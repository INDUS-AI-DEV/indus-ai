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

  // Define styles inside the component
  // Extend CSSProperties to include pseudo-selectors
  type CSSPropertiesWithPseudo = React.CSSProperties & {
    '&:hover'?: React.CSSProperties;
    '&:focus'?: React.CSSProperties;
    '&:active'?: React.CSSProperties;
  };

  const styles: Record<string, CSSPropertiesWithPseudo> = {
    container: {
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '10px',
      margin: '0 auto',
      boxSizing: 'border-box',
      maxWidth: '1400px',
    },
    header: {
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '10px 20px',
      marginBottom: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      textAlign: 'center',
    },
    logoSection: {
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      justifyContent: 'center',
    },
    logo: {
      fontSize: '28px',
      lineHeight: 1,
      backgroundColor: '#3498db',
      padding: '8px 12px',
      borderRadius: '6px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: '20px',
      fontWeight: 600,
      margin: 0,
      color: 'white',
    },
    subtitle: {
      fontSize: '14px',
      color: '#ecf0f1',
      margin: '4px 0 0',
      opacity: 0.9,
    },
    formContainer: {
      width: '100%',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      overflow: 'hidden',
    },
    formCard: {
      padding: '15px 20px',
    },
    formHeader: {
      marginBottom: '20px',
      paddingBottom: '15px',
      borderBottom: '1px solid #eee',
    },
    formTitle: {
      fontSize: '18px',
      fontWeight: 600,
      color: '#2c3e50',
      margin: '0 0 5px 0',
    },
    formDescription: {
      fontSize: '14px',
      color: '#7f8c8d',
      margin: 0,
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '12px',
      marginBottom: '15px',
    },
    formField: {
      marginBottom: '8px',
    },
    label: {
      display: 'block',
      marginBottom: '6px',
      fontSize: '14px',
      fontWeight: 500,
      color: '#2c3e50',
    },
    input: {
      width: '100%',
      padding: '8px 10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '13px',
      color: '#333',
      boxSizing: 'border-box',
      height: '36px',
      outline: 'none',
      '&:focus': {
        borderColor: '#3498db',
        boxShadow: '0 0 0 2px rgba(52, 152, 219, 0.2)',
      } as React.CSSProperties,
    },
    select: {
      width: '100%',
      padding: '8px 10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '13px',
      color: '#333',
      backgroundColor: 'white',
      appearance: 'none',
      backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 8px center',
      backgroundSize: '10px',
      height: '36px',
      outline: 'none',
      '&:focus': {
        borderColor: '#3498db',
        boxShadow: '0 0 0 2px rgba(52, 152, 219, 0.2)',
      } as React.CSSProperties,
    },
    textarea: {
      width: '100%',
      padding: '8px 10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '13px',
      color: '#333',
      resize: 'vertical',
      minHeight: '60px',
      boxSizing: 'border-box',
      outline: 'none',
      '&:focus': {
        borderColor: '#3498db',
        boxShadow: '0 0 0 2px rgba(52, 152, 219, 0.2)',
      } as React.CSSProperties,
    },
    formActions: {
      marginTop: '10px',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    startButton: {
      backgroundColor: '#2ecc71',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'background-color 0.2s',
      '&:hover': {
        backgroundColor: '#27ae60',
      } as React.CSSProperties,
    },
    buttonIcon: {
      fontSize: '16px',
    },
    sessionContainer: {
      maxWidth: '1000px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      overflow: 'hidden',
    },
    sessionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 25px',
      borderBottom: '1px solid #eee',
    },
    sessionInfo: {
      flex: 1,
    },
    sessionTitle: {
      fontSize: '18px',
      fontWeight: 600,
      margin: '0 0 4px 0',
      color: '#2c3e50',
    },
    sessionStatus: {
      fontSize: '14px',
      color: '#7f8c8d',
      margin: 0,
    },
    endButton: {
      backgroundColor: '#e74c3c',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      padding: '8px 16px',
      fontSize: '14px',
      fontWeight: 500,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      transition: 'background-color 0.2s',
      '&:hover': {
        backgroundColor: '#c0392b',
      },
    },
    speakingIndicator: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 25px',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #eee',
      fontSize: '14px',
      color: '#2c3e50',
    },
    speakingIcon: {
      fontSize: '16px',
    },
    chatContainer: {
      padding: '20px 25px',
    },
    chatHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '15px',
    },
    chatTitle: {
      fontSize: '16px',
      fontWeight: 600,
      margin: 0,
      color: '#2c3e50',
    },
    chatStatus: {
      fontSize: '12px',
      color: '#7f8c8d',
      backgroundColor: '#f1f2f6',
      padding: '4px 8px',
      borderRadius: '10px',
    },
    chatMessages: {
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      padding: '15px',
      minHeight: '200px',
      maxHeight: '400px',
      overflowY: 'auto',
    },
    emptyChat: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '200px',
      color: '#95a5a6',
      textAlign: 'center',
    },
    emptyIcon: {
      fontSize: '32px',
      marginBottom: '10px',
      opacity: 0.7,
    },
    chatMessage: {
      marginBottom: '15px',
      padding: '10px 15px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    messageSender: {
      fontSize: '12px',
      fontWeight: 600,
      color: '#3498db',
      marginBottom: '4px',
    },
    messageText: {
      fontSize: '14px',
      color: '#2c3e50',
      lineHeight: 1.5,
    },
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
              <h2 style={styles.formTitle}>Loan Recovery Call Configuration</h2>
              <p style={styles.formDescription}>
                Configure the loan details to initiate the recovery call
              </p>
            </div>
            
            <form
              onSubmit={(e) => {
                e.preventDefault();
                connectToRoom();
              }}
              style={styles.form}
            >
              <div style={styles.formGrid}>
                {/* Language */}
                {/*
                <div style={styles.formField}>
                  <label htmlFor="language" style={styles.label}>Language</label>
                  <select
                    id="language"
                    name="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    style={styles.select}
                  >
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="ta">Tamil</option>
                    <option value="af">African</option>
                  </select>
                </div>
                */}
                {/* Bot Name */}
                <div style={styles.formField}>
                  <label htmlFor="bot_name" style={styles.label}>Bot Name</label>
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

                {/* Bank Name */}
                <div style={styles.formField}>
                  <label htmlFor="bank_name" style={styles.label}>Bank Name</label>
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

                {/* Customer Name */}
                <div style={styles.formField}>
                  <label htmlFor="customer_name" style={styles.label}>Customer Name</label>
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

                {/* Loan Type */}
                <div style={styles.formField}>
                  <label htmlFor="loan_type" style={styles.label}>Loan Type</label>
                  <select
                    id="loan_type"
                    name="loan_type"
                    value={formData.loan_type}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                      setFormData(prev => ({...prev, loan_type: e.target.value}))
                    }
                    style={styles.select}
                  >
                    <option value="home">Home Loan</option>
                    <option value="personal">Personal Loan</option>
                    <option value="business">Business Loan</option>
                    <option value="auto">Auto Loan</option>
                  </select>
                </div>

                {/* Amount Disbursed */}
                <div style={styles.formField}>
                  <label htmlFor="amount_disbursed" style={styles.label}>Amount Disbursed</label>
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

                {/* Principal Outstanding */}
                <div style={styles.formField}>
                  <label htmlFor="principal_outstanding" style={styles.label}>Principal Outstanding</label>
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

                {/* Total Overdue Amount */}
                <div style={styles.formField}>
                  <label htmlFor="over_due_total_amount" style={styles.label}>Total Overdue Amount</label>
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

                {/* Overdue Days */}
                <div style={styles.formField}>
                  <label htmlFor="over_due_days" style={styles.label}>Overdue Days</label>
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

                {/* Empty field for grid alignment */}
                <div style={styles.formField}></div>

                {/* Recovery Reason */}
                <div style={{ ...styles.formField, gridColumn: '1 / -1' }}>
                  <label htmlFor="reason" style={styles.label}>Recovery Reason</label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    style={styles.textarea}
                    placeholder="Describe the reason for recovery"
                    rows={2}
                  />
                </div>
              </div>

              {/* Start Voice Call button */}
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
