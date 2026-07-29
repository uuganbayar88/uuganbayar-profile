import { ImageResponse } from "next/og";

export const alt = "Uuganbayar Chuluunbaatar — Technology Executive";
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
          position: "relative",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#FFFFFF",
          background: "linear-gradient(145deg, #0F1C2E 0%, #1D3350 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#7FB2E5",
            fontFamily: "Arial, sans-serif",
            fontSize: 22,
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          ULAANBAATAR · TECHNOLOGY · LEADERSHIP
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
            Uuganbayar
          </div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
            Chuluunbaatar
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              color: "#BDD7F2",
              fontFamily: "Arial, sans-serif",
              fontSize: 29,
            }}
          >
            Chief Executive Officer · Technology Executive
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Arial, sans-serif",
            fontSize: 20,
            color: "#AFC3DB",
          }}
        >
          <span>15+ years from engineer to executive leadership</span>
          <span style={{ color: "#7FB2E5" }}>CH. UUGANBAYAR</span>
        </div>
      </div>
    ),
    size,
  );
}
