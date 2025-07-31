"use client";
import { useState, useEffect } from "react";

// Loanbot Demo Page (converted from loan-bot/src/App.js)
export default function LoanbotDemoPage() {
  type ChatMessage = { sender: string; text: string };
  type FormData = {
    bot_name: string;
    bank_name: string;
    customer_name: string;
    reason: string;
    loan_type: string;
    amount_disbursed: number;
    principal_outstanding: number;
    over_due_principal_amount: number;
    over_due_interest_amount: number;
    over_due_total_amount: number;
    over_due_days: number;
  };

  const [room, setRoom] = useState<unknown>(null);
  const [connected, setConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [language, setLanguage] = useState<string>("en");
  const [formData, setFormData] = useState<FormData>({
    bot_name: "Maya",
    bank_name: "ICICI Bank",
    customer_name: "Manish",
    reason: "your last 3 repayments have been missed",
    loan_type: "home",
    amount_disbursed: 5000000,
    principal_outstanding: 3500000,
    over_due_principal_amount: 3500000,
    over_due_interest_amount: 500000,
    over_due_total_amount: 4000000,
    over_due_days: 94,
  });

  useEffect(() => {
    if (!room) return;
    let cleanupFns: (() => void)[] = [];
    (async () => {
      const livekit = await import("livekit-client");
      const handleTrackSubscribed = (track: unknown, publication: unknown, participant: { identity: string }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((track as any).kind === livekit.Track.Kind.Audio) {
          setIsSpeaking(true);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const audioElement = (track as any).attach();
          document.body.appendChild(audioElement);
          setChatMessages(prev => [...prev, { sender: participant.identity, text: "Agent is responding..." }]);
          audioElement.onended = () => {
            setIsSpeaking(false);
            if (audioElement.parentNode) {
              audioElement.parentNode.removeChild(audioElement);
            }
          };
        }
      };
      const handleTrackUnsubscribed = (track: unknown) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((track as any).kind === livekit.Track.Kind.Audio) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (track as any).detach().forEach((element: HTMLElement) => element.remove());
          setIsSpeaking(false);
        }
      };
      const handleDataReceived = (payload: ArrayBuffer, participant: { identity: string }) => {
        const message = new TextDecoder().decode(payload);
        setChatMessages(prev => [...prev, { sender: participant.identity, text: message }]);
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (room as any).on("trackSubscribed", handleTrackSubscribed);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (room as any).on("trackUnsubscribed", handleTrackUnsubscribed);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (room as any).on("dataReceived", handleDataReceived);
      cleanupFns = [
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        () => { (room as any).off("trackSubscribed", handleTrackSubscribed); },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        () => { (room as any).off("trackUnsubscribed", handleTrackUnsubscribed); },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        () => { (room as any).off("dataReceived", handleDataReceived); },
      ];
    })();
    return () => {
      cleanupFns.forEach(fn => fn());
    };
  }, [room]);

  const connectToRoom = async () => {
    try {
      const livekit = await import("livekit-client");
      const userId = `user-${Math.random().toString(36).substring(2, 8)}`;
      const roomId = `room-${Math.random().toString(36).substring(2, 8)}`;
      const queryParams = new URLSearchParams({
        room: roomId,
        user: userId,
        ...Object.fromEntries(
          Object.entries(formData).map(([key, value]) => [key, String(value)])
        ),
        language,
      });
      const url = `${process.env.NEXT_PUBLIC_LIVEKIT_TOKEN_SERVER_URL || "https://api.vijaya.ai/api/token/loan?"}${queryParams.toString()}`;
      const resp = await fetch(url);
      const data = await resp.json();
      const ws_url = process.env.NEXT_PUBLIC_LIVEKIT_WS_URL || "wss://loanrecovery-dv4g88d7.livekit.cloud";
      const newRoom = new livekit.Room();
      await newRoom.connect(ws_url, data.token);
      setRoom(newRoom);
      setConnected(true);
      const micTrack = await livekit.createLocalAudioTrack();
      await newRoom.localParticipant.publishTrack(micTrack);
    } catch (err) {
      console.error("Error connecting to room:", err);
    }
  };

  const disconnectFromRoom = async () => {
    if (room) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (room as any).disconnect();
      setConnected(false);
      setRoom(null);
      setChatMessages([]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logoSection}>
          <div style={styles.logo}>🏦</div>
          <div>
            <h1 style={styles.title}>Loan Recovery Assistant</h1>
            <p style={styles.subtitle}>AI-powered voice assistant for loan recovery</p>
          </div>
        </div>
      </div>

      {!connected ? (
        <div style={styles.formContainer}>
          <div style={styles.formCard}>
            <div style={styles.formHeader}>
              <h2 style={styles.formTitle}>Configure Loan Details</h2>
              <p style={styles.formDescription}>
                Set up the loan information and start a voice conversation with our AI assistant
              </p>
            </div>
            
            <form
              onSubmit={(e) => {
                e.preventDefault();
                connectToRoom();
              }}
              style={styles.form}
            >
              <div style={styles.formSection}>
                <h3 style={styles.sectionTitle}>Basic Settings</h3>
                <div style={styles.formRow}>
                  <div style={styles.formField}>
                    <label htmlFor="language" style={styles.label}>
                      Language
                    </label>
                    <select
                      id="language"
                      name="language"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      style={styles.select}
                    >
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                      <option value="es">Tamil</option>
                      <option value="fr">African</option>
                    </select>
                  </div>
                </div>
              </div>

              <div style={styles.formSection}>
                <h3 style={styles.sectionTitle}>Bot Configuration</h3>
                <div style={styles.formRow}>
                  <div style={styles.formField}>
                    <label htmlFor="bot_name" style={styles.label}>
                      Bot Name
                    </label>
                    <input
                      id="bot_name"
                      name="bot_name"
                      type="text"
                      value={formData.bot_name}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="Enter bot name"
                    />
                  </div>
                  <div style={styles.formField}>
                    <label htmlFor="bank_name" style={styles.label}>
                      Bank Name
                    </label>
                    <input
                      id="bank_name"
                      name="bank_name"
                      type="text"
                      value={formData.bank_name}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="Enter bank name"
                    />
                  </div>
                </div>
              </div>

              <div style={styles.formSection}>
                <h3 style={styles.sectionTitle}>Customer Information</h3>
                <div style={styles.formRow}>
                  <div style={styles.formField}>
                    <label htmlFor="customer_name" style={styles.label}>
                      Customer Name
                    </label>
                    <input
                      id="customer_name"
                      name="customer_name"
                      type="text"
                      value={formData.customer_name}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="Enter customer name"
                    />
                  </div>
                  <div style={styles.formField}>
                    <label htmlFor="loan_type" style={styles.label}>
                      Loan Type
                    </label>
                    <input
                      id="loan_type"
                      name="loan_type"
                      type="text"
                      value={formData.loan_type}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="e.g., home, personal, business"
                    />
                  </div>
                </div>
              </div>

              <div style={styles.formSection}>
                <h3 style={styles.sectionTitle}>Loan Details</h3>
                <div style={styles.formRow}>
                  <div style={styles.formField}>
                    <label htmlFor="amount_disbursed" style={styles.label}>
                      Amount Disbursed
                    </label>
                    <input
                      id="amount_disbursed"
                      name="amount_disbursed"
                      type="number"
                      value={formData.amount_disbursed}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="Enter amount"
                    />
                  </div>
                  <div style={styles.formField}>
                    <label htmlFor="principal_outstanding" style={styles.label}>
                      Principal Outstanding
                    </label>
                    <input
                      id="principal_outstanding"
                      name="principal_outstanding"
                      type="number"
                      value={formData.principal_outstanding}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="Enter outstanding amount"
                    />
                  </div>
                </div>
                <div style={styles.formRow}>
                  <div style={styles.formField}>
                    <label htmlFor="over_due_total_amount" style={styles.label}>
                      Total Overdue Amount
                    </label>
                    <input
                      id="over_due_total_amount"
                      name="over_due_total_amount"
                      type="number"
                      value={formData.over_due_total_amount}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="Enter overdue amount"
                    />
                  </div>
                  <div style={styles.formField}>
                    <label htmlFor="over_due_days" style={styles.label}>
                      Overdue Days
                    </label>
                    <input
                      id="over_due_days"
                      name="over_due_days"
                      type="number"
                      value={formData.over_due_days}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="Enter overdue days"
                    />
                  </div>
                </div>
              </div>

              <div style={styles.formSection}>
                <h3 style={styles.sectionTitle}>Recovery Context</h3>
                <div style={styles.formRow}>
                  <div style={{ ...styles.formField, width: '100%' }}>
                    <label htmlFor="reason" style={styles.label}>
                      Recovery Reason
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      style={styles.textarea}
                      placeholder="Describe the reason for recovery"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              <div style={styles.formActions}>
                <button type="submit" style={styles.startButton}>
                  <span style={styles.buttonIcon}>🎙️</span>
                  Start Voice Call
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div style={styles.sessionContainer}>
          <div style={styles.sessionHeader}>
            <div style={styles.sessionInfo}>
              <h2 style={styles.sessionTitle}>Active Call Session</h2>
              <p style={styles.sessionStatus}>Connected to AI Assistant</p>
            </div>
            <button onClick={disconnectFromRoom} style={styles.endButton}>
              <span style={styles.buttonIcon}>🔴</span>
              End Call
            </button>
          </div>

          {isSpeaking && (
            <div style={styles.speakingIndicator}>
              <div style={styles.speakingIcon}>🔊</div>
              <span>Agent is speaking...</span>
            </div>
          )}

          <div style={styles.chatContainer}>
            <div style={styles.chatHeader}>
              <h3 style={styles.chatTitle}>Conversation Transcript</h3>
              <div style={styles.chatStatus}>
                {chatMessages.length > 0 ? `${chatMessages.length} messages` : 'No messages yet'}
              </div>
            </div>
            <div style={styles.chatMessages}>
              {chatMessages.length === 0 ? (
                <div style={styles.emptyChat}>
                  <div style={styles.emptyIcon}>💬</div>
                  <p>Start speaking to see the conversation here</p>
                </div>
              ) : (
                chatMessages.map((msg, idx) => (
                  <div key={idx} style={styles.chatMessage}>
                    <div style={styles.messageSender}>{msg.sender}</div>
                    <div style={styles.messageText}>{msg.text}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
      padding: "0",
      margin: "0",
    },
    header: {
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #e2e8f0",
      padding: "24px 0",
      marginBottom: "32px",
    },
    logoSection: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    logo: {
      fontSize: "48px",
      lineHeight: "1",
    },
    title: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#2C514C",
      margin: "0 0 4px 0",
    },
    subtitle: {
      fontSize: "16px",
      color: "#64748b",
      margin: "0",
    },
    formContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    },
    formCard: {
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      overflow: "hidden",
    },
    formHeader: {
      padding: "32px 32px 24px 32px",
      borderBottom: "1px solid #e2e8f0",
    },
    formTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#2C514C",
      margin: "0 0 8px 0",
    },
    formDescription: {
      fontSize: "16px",
      color: "#64748b",
      margin: "0",
      lineHeight: "1.5",
    },
    form: {
      padding: "32px",
    },
    formSection: {
      marginBottom: "32px",
    },
    sectionTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#2C514C",
      margin: "0 0 16px 0",
      paddingBottom: "8px",
      borderBottom: "2px solid #2C514C",
    },
    formRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      marginBottom: "16px",
    },
    formField: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#374151",
      marginBottom: "6px",
    },
    input: {
      padding: "12px 16px",
      fontSize: "16px",
      border: "2px solid #e2e8f0",
      borderRadius: "8px",
      backgroundColor: "#ffffff",
      transition: "border-color 0.2s ease",
      outline: "none",
    },
    select: {
      padding: "12px 16px",
      fontSize: "16px",
      border: "2px solid #e2e8f0",
      borderRadius: "8px",
      backgroundColor: "#ffffff",
      transition: "border-color 0.2s ease",
      outline: "none",
      cursor: "pointer",
    },
    textarea: {
      padding: "12px 16px",
      fontSize: "16px",
      border: "2px solid #e2e8f0",
      borderRadius: "8px",
      backgroundColor: "#ffffff",
      transition: "border-color 0.2s ease",
      outline: "none",
      resize: "vertical",
      fontFamily: "inherit",
    },
    formActions: {
      display: "flex",
      justifyContent: "center",
      paddingTop: "24px",
      borderTop: "1px solid #e2e8f0",
    },
    startButton: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "16px 32px",
      fontSize: "18px",
      fontWeight: "600",
      backgroundColor: "#2C514C",
      color: "#ffffff",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      transition: "all 0.2s ease",
      boxShadow: "0 4px 6px -1px rgba(44, 81, 76, 0.3)",
    },
    buttonIcon: {
      fontSize: "20px",
    },
    sessionContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    },
    sessionHeader: {
      backgroundColor: "#ffffff",
      borderRadius: "16px 16px 0 0",
      padding: "24px 32px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #e2e8f0",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    sessionInfo: {
      display: "flex",
      flexDirection: "column",
    },
    sessionTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#2C514C",
      margin: "0 0 4px 0",
    },
    sessionStatus: {
      fontSize: "16px",
      color: "#2C514C",
      fontWeight: "500",
      margin: "0",
    },
    endButton: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 24px",
      fontSize: "16px",
      fontWeight: "600",
      backgroundColor: "#ef4444",
      color: "#ffffff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
    speakingIndicator: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      backgroundColor: "#f0fdf4",
      border: "1px solid #2C514C",
      borderRadius: "8px",
      padding: "12px 16px",
      margin: "16px 0",
      color: "#2C514C",
      fontWeight: "500",
    },
    speakingIcon: {
      fontSize: "20px",
    },
    chatContainer: {
      backgroundColor: "#ffffff",
      borderRadius: "0 0 16px 16px",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    chatHeader: {
      padding: "24px 32px 16px 32px",
      borderBottom: "1px solid #e2e8f0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    chatTitle: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#2C514C",
      margin: "0",
    },
    chatStatus: {
      fontSize: "14px",
      color: "#64748b",
      fontWeight: "500",
    },
    chatMessages: {
      padding: "24px 32px",
      maxHeight: "400px",
      overflowY: "auto",
    },
    emptyChat: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "48px 24px",
      color: "#64748b",
      textAlign: "center",
    },
    emptyIcon: {
      fontSize: "48px",
      marginBottom: "16px",
    },
    chatMessage: {
      marginBottom: "16px",
      padding: "16px",
      backgroundColor: "#f8fafc",
      borderRadius: "12px",
      border: "1px solid #e2e8f0",
    },
    messageSender: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#2C514C",
      marginBottom: "4px",
    },
    messageText: {
      fontSize: "16px",
      color: "#1e293b",
      lineHeight: "1.5",
    },
  }; 