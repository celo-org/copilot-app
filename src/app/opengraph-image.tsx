import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Celopedia — Know the ecosystem before you build";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoSvg = readFileSync(
    join(process.cwd(), "public", "celo-skills-logo.svg"),
    "utf8",
  );
  const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FCFF52",
          padding: "80px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoDataUri} alt="Celopedia" width={720} height={104} />
        <div
          style={{
            marginTop: 64,
            fontSize: 56,
            color: "#000",
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Know the ecosystem before you build.
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 24,
            color: "rgba(0,0,0,0.6)",
            textAlign: "center",
          }}
        >
          The comprehensive skill for building on Celo
        </div>
      </div>
    ),
    { ...size },
  );
}
