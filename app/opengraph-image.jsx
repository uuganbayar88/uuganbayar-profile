import { ImageResponse } from "next/og";

export const alt = "Uuganbayar Chuluunbaatar — Technology & Business Executive";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#111111",
          background: "#F7F6F3",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#6A6A6A" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#E9552B" }} />
          Open to leadership opportunities
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 800, lineHeight: 1, letterSpacing: -4 }}>Uuganbayar</div>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 800, lineHeight: 1, letterSpacing: -4 }}>Chuluunbaatar</div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 34, fontWeight: 700 }}>Technology &amp; Business Executive</div>
          <div style={{ display: "flex", marginTop: 8, fontSize: 26, color: "#6A6A6A" }}>
            Former CEO, SteppeLink · Founder, Flynk Tech
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22, color: "#6A6A6A" }}>
          <span>12+ years in technology · Ulaanbaatar, Mongolia</span>
          <span style={{ display: "flex", fontWeight: 800, fontSize: 30, color: "#111111" }}>
            U<span style={{ color: "#E9552B" }}>C</span>
          </span>
        </div>
      </div>
    ),
    size,
  );
}
