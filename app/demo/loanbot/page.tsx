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

  const [room, setRoom] = useState<any>(null);
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
    let livekit: any;
    let handleTrackSubscribed: any;
    let handleTrackUnsubscribed: any;
    let handleDataReceived: any;
    (async () => {
      livekit = await import("livekit-client");
      handleTrackSubscribed = (track: any) => {
        if (track.kind === livekit.Track.Kind.Audio) {
          setIsSpeaking(true);
          const audioElement = track.attach();
          document.body.appendChild(audioElement);
          audioElement.onended = () => {
            setIsSpeaking(false);
            audioElement.remove();
          };
        }
      };
      handleTrackUnsubscribed = (track: any) => {
        if (track.kind === livekit.Track.Kind.Audio) {
          track.detach().forEach((el: HTMLElement) => el.remove());
          setIsSpeaking(false);
        }
      };
      handleDataReceived = (payload: ArrayBuffer, participant: { identity: string }) => {
        const message = new TextDecoder().decode(payload);
        setChatMessages((prev) => [...prev, { sender: participant.identity, text: message }]);
      };
      room.on("trackSubscribed", handleTrackSubscribed);
      room.on("trackUnsubscribed", handleTrackUnsubscribed);
      room.on("dataReceived", handleDataReceived);
    })();
    return () => {
      if (!room) return;
      room.off("trackSubscribed", handleTrackSubscribed);
      room.off("trackUnsubscribed", handleTrackUnsubscribed);
      room.off("dataReceived", handleDataReceived);
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
        ...formData,
        language,
      });
      const url = `${process.env.NEXT_PUBLIC_LIVEKIT_TOKEN_SERVER_URL || "https://api.vijaya.ai/api/token/loanbot?"}${queryParams.toString()}`;
      const resp = await fetch(url);
      const data = await resp.json();
      const ws_url = process.env.NEXT_PUBLIC_LIVEKIT_WS_URL || "wss://medibot-axdx77yw.livekit.cloud";
      const newRoom = new livekit.Room();
      await newRoom.connect(ws_url, data.token);
      setRoom(newRoom);
      setConnected(true);
      const micTrack = await livekit.createLocalAudioTrack();
      await newRoom.localParticipant.publishTrack(micTrack);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error connecting to room:", err);
    }
  };

  const disconnectFromRoom = async () => {
    if (room) {
      await room.disconnect();
      setConnected(false);
      setRoom(null);
      setChatMessages([]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Voice AI Loan Assistant</h1>
      {!connected && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            connectToRoom();
          }}
          style={styles.form}
        >
          <h2 style={styles.subheading}>Loan Details</h2>
          <div style={styles.formGroup}>
            <label htmlFor="language" style={styles.label}>
              Language:
            </label>
            <select
              id="language"
              name="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={styles.input}
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} style={styles.formGroup}>
              <label htmlFor={key} style={styles.label}>
                {key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}:
              </label>
              <input
                id={key}
                name={key}
                type="text"
                value={value}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          ))}
          <button type="submit" style={styles.startButton}>
            🎙️ Start Call
          </button>
        </form>
      )}
      {connected && (
        <div style={styles.sessionContainer}>
          <button onClick={disconnectFromRoom} style={styles.endButton}>
            🔴 End Call
          </button>
          {isSpeaking && <div style={styles.speakingIndicator}>🔊 Agent is speaking...</div>}
          <div style={styles.chatBox}>
            <h3 style={styles.chatTitle}>Chat Transcript</h3>
            <div style={styles.chatMessages}>
              {chatMessages.map((msg, idx) => (
                <div key={idx} style={styles.chatMessage}>
                  <strong>{msg.sender}:</strong> {msg.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  subheading: {
    marginBottom: "10px",
    fontSize: "20px",
    textAlign: "left",
  },
  form: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    textAlign: "left",
  },
  formGroup: {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
  },
  label: {
    flex: "0 0 220px",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  startButton: {
    marginTop: "20px",
    padding: "12px 25px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  sessionContainer: {
    marginTop: "30px",
  },
  endButton: {
    padding: "12px 25px",
    fontSize: "16px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  speakingIndicator: {
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "18px",
    color: "green",
  },
  chatBox: {
    marginTop: "30px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "left",
    backgroundColor: "#ffffff",
  },
  chatTitle: {
    marginBottom: "10px",
  },
  chatMessages: {
    maxHeight: "300px",
    overflowY: "auto",
  },
  chatMessage: {
    marginBottom: "10px",
    lineHeight: "1.4",
  },
}; 