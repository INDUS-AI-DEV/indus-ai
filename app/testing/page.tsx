"use client";
import { useState, useEffect, useRef } from "react";
import styles from "../demo/medibot/medibot.module.css";
import Image from "next/image";

// Language options for dropdown (full names)
const LANGUAGE_OPTIONS = [
  { value: "Hi", label: "Hindi" },
  { value: "En", label: "English" },
  { value: "Ta", label: "Tamil" },
  { value: "Ar", label: "Arabic" },
  { value: "Af", label: "African" },
];

export default function HotelbotDemoPage() {
  type ChatMessage = { sender: string; text: string };
  const [room, setRoom] = useState<unknown>(null); // Will be cast to Room after import
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [callType, setCallType] = useState<'web' | 'telephony'>("web");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [clientName, setClientName] = useState("");
  const [telephonyStatus, setTelephonyStatus] = useState("");
  const [language, setLanguage] = useState("Hi");
  const roomRef = useRef<unknown>(null); // Will be cast to Room after import
  const [isDesktop, setIsDesktop] = useState(false);
  const [agentType, setAgentType] = useState("sample_input");

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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth > 700);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const connectToRoom = async () => {
    if (connecting || connected) return;
    setConnecting(true);
    try {
      const livekit = await import("livekit-client");
      const server_url = 'https://api.vijaya.ai/api/token/test?';
      const ws_url = 'wss://testing-77v0hbsk.livekit.cloud';
      const userId = `user-${Math.random().toString(36).substring(2, 8)}`;
      const roomId = `room-${Math.random().toString(36).substring(2, 8)}`;
      const fullUrl = `${server_url}room=${roomId}&user=${userId}&language=${language}&agent_type=${encodeURIComponent(agentType)}`;
      const resp = await fetch(fullUrl);
      const data = await resp.json();
      const token = data.token;
      const newRoom = new livekit.Room();
      await newRoom.connect(ws_url, token);
      setRoom(newRoom);
      roomRef.current = newRoom;
      setConnected(true);
      const micTrack = await livekit.createLocalAudioTrack();
      await newRoom.localParticipant.publishTrack(micTrack);
    } finally {
      setConnecting(false);
    }
  };

  const disconnectFromRoom = async () => {
    if (!room || connecting) return;
    setConnecting(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (room as any).disconnect();
      setConnected(false);
      setRoom(null);
      setChatMessages([]);
      setIsSpeaking(false);
    } finally {
      setConnecting(false);
    }
  };

  const handleStartCall = async () => {
    if (callType === "web") {
      connectToRoom();
    } else {
      setTelephonyStatus("");
      if (!phoneNumber || !clientName) {
        setTelephonyStatus("Please enter phone number and client name.");
        return;
      }
      setConnecting(true);
      try {
        const resp = await fetch("/api/start-telephony-call", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber, clientName })
        });
        const data = await resp.json();
        if (resp.ok && data.success) {
          setTelephonyStatus("Call Initiated");
        } else {
          setTelephonyStatus(data.error || "Failed to initiate call");
        }
      } catch {
        setTelephonyStatus("Network error");
      } finally {
        setConnecting(false);
      }
    }
  };

  return (
    <>
      <style jsx global>{`
        input.${styles.telephonyInput}::placeholder {
          color: #fff;
          opacity: 1;
        }
      `}</style>
      <div style={{ background: 'var(--background-dark)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className={styles.appContainer}>
          <div className={styles.phoneMockup} style={{ position: 'relative', backgroundImage: "url('/images/Hotel1.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className={styles.topBar}>
              <span className={styles.toggleLabel} style={{ fontWeight: callType === "web" ? "bold" : "normal" }}>Web Call</span>
              <label className={styles.switch}>
                <input type="checkbox" checked={callType === "telephony"} onChange={e => setCallType(e.target.checked ? "telephony" : "web")} className={styles.switchInput} />
                <span className={styles.slider}></span>
              </label>
              <span className={styles.toggleLabel} style={{ fontWeight: callType === "telephony" ? "bold" : "normal" }}>Telephony</span>
              <div className={styles.languageDropdownContainer}>
                <select
                  className={styles.languageDropdown}
                  value={language}
                  onChange={e => setLanguage(e.target.value)}
                  aria-label="Select Language"
                  style={{ color: '#fff', background: 'rgba(30,60,120,0.5)' }}
                >
                  {LANGUAGE_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value} style={{ color: '#000', background: '#fff' }}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <span className={styles.languageDropdownArrow}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" style={{ verticalAlign: "middle" }}>
                    <path d="M5 8l5 5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#fff" stroke="#fff" />
                  </svg>
                </span>
              </div>
            </div>
            <div className={styles.logoContainer} style={{ marginBottom: 2, marginTop: 0 }}>
              {/* Try SVG, fallback to PNG if SVG fails */}
              <Image src="/images/Indus.svg" alt="Indus AI Logo" className={styles.logoWhite} width={80} height={40} style={{ marginBottom: 16 }} onError={(e) => { e.currentTarget.onerror=null; e.currentTarget.src='/images/Indus.png'; }} />
              <div className={styles.logoSubtitle} style={{ fontSize: 16, marginBottom: 16, marginTop: 12 }}>AI Testing System</div>
              <div style={{ width: '100%', marginBottom: 16, textAlign: 'center' }}>
                <input
                  type="text"
                  placeholder="Enter Agent Type"
                  value={agentType}
                  onChange={e => setAgentType(e.target.value)}
                  style={{
                    width: '200px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    fontSize: '14px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    outline: 'none',
                    textAlign: 'center'
                  }}
                />
              </div>
            </div>
            {callType === "telephony" && (
              <div style={{ marginTop: 24, marginBottom: 16, width: "100%" }}>
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value.replace(/[^0-9+]/g, ""))}
                  className={styles.telephonyInput}
                  style={{ width: "100%", marginBottom: 8, padding: 8, borderRadius: 8, border: "1px solid #ccc", fontSize: 16 }}
                />
                <input
                  type="text"
                  placeholder="Client Name"
                  value={clientName}
                  onChange={e => setClientName(e.target.value)}
                  className={styles.telephonyInput}
                  style={{ width: "100%", marginBottom: 8, padding: 8, borderRadius: 8, border: "1px solid #ccc", fontSize: 16 }}
                />
              </div>
            )}
            <div className={styles.callSection} style={{ marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 }}>
              {/* Connecting Loader: always above the call button, centered, pixel-perfect */}
              {connecting && (
                <div className={styles.connectingLoader}>
                  <div className={styles.loaderSpinner}></div>
                  <div className={styles.loaderText}>Connecting to the agent...</div>
                </div>
              )}
              <div className={styles.callButtonContainer}>
                <button
                  onClick={connected || connecting ? disconnectFromRoom : handleStartCall}
                  className={`${styles.callButton} ${connecting ? styles.connecting : ""} ${!connected && !connecting ? styles.startCall : styles.endCall}`}
                  disabled={callType === "telephony" && !connected && !connecting && (!phoneNumber || !clientName)}
                  style={{ width: 56, height: 56 }}
                >
                  <div className={styles.callIcon}>
                    {!connected ? (
                      <svg viewBox="0 0 24 24" fill="#fff" width="24" height="24">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                      </svg>
                    ) : (
                      <svg className={styles.endCallIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <circle cx="24" cy="24" r="24" fill="#f44336"/>
                        <line x1="16" y1="16" x2="32" y2="32" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"/>
                        <line x1="32" y1="16" x2="16" y2="32" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
                  {connecting && <div className={styles.loadingRing}></div>}
                </button>
              </div>
              <div className={styles.buttonLabel} style={{ fontSize: 16, marginTop: 10, marginBottom: 18 }}>
                {connecting ? "END CALL" : (!connected ? "START CALL" : "END CALL")}
              </div>
              {!connected && !connecting && (
                <div style={{ marginBottom: 70 }}></div>
              )}
              {callType === "telephony" && telephonyStatus && (
                <div style={{ color: telephonyStatus === "Call Initiated" ? "green" : "red", marginTop: 8 }}>{telephonyStatus}</div>
              )}
              {connected && isSpeaking && (
                <div className={styles.speakingIndicator}>
                  <span className={styles.speakingDot}></span>
                  Agent is speaking...
                </div>
              )}
            </div>
            <div className={styles.chatPlaceholder}>
              {connected && (
                <div className={styles.chatBox} style={{ fontSize: 12, padding: '8px 10px' }}>
                  <div className={styles.chatHeader} style={{ fontSize: 15 }}>Live Chat</div>
                  <div className={styles.chatMessages}>
                    {chatMessages.length === 0 ? (
                      <div className={styles.noMessages} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Agent will start speaking now</div>
                    ) : (
                      chatMessages.map((msg, idx) => (
                        <div key={idx} className={styles.chatMessage} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          <span className={styles.agentName}>{msg.sender}:</span> <span style={{color:'#fff'}}>{msg.text}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
            {/* Bot image always at the bottom, left-aligned, large */}
            <div
              className={styles.botContainer}
              style={
                !connected && isDesktop
                  ? { marginBottom: 120 }
                  : { marginBottom: 40}
              }
            >
              <Image src="/images/bot.png" alt="AI Assistant" className={styles.botImage} width={170} height={170} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
