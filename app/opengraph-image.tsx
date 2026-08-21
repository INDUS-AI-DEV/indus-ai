import { ImageResponse } from "next/og";
import { siteConfig } from "./lib/site";

export const alt =
  "Indus AI — the agentic AI platform for enterprise workflows";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0B1220 0%, #14302B 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#2C514C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            I
          </div>
          <div style={{ color: "#E6EFEB", fontSize: 30, fontWeight: 700 }}>
            Indus AI
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -1.5,
              maxWidth: 900,
            }}
          >
            The agentic AI platform for enterprise workflows
          </div>
          <div style={{ color: "#9FBDB3", fontSize: 28, maxWidth: 860 }}>
            Voice agents, lead management, financial operations, and autonomous
            workflow execution.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: 28,
            color: "#7E9E95",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex" }}>indusai.app</div>
          <div style={{ display: "flex" }}>{siteConfig.legalName}</div>
        </div>
      </div>
    ),
    size
  );
}
