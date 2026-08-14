import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #4f46e5 0%, #c026d3 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            letterSpacing: -1.5,
            color: "#ffffff",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            marginTop: 28,
            maxWidth: 920,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Freelance Web &amp; Software Developer — {siteConfig.location}
        </div>
      </div>
    ),
    { ...size }
  );
}
