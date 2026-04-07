"use client";

import { useEffect, useState } from "react";

const LINES = [
  { type: "prompt" as const, text: "What DeFi protocols are on Celo?" },
  { type: "output" as const, text: "Running ecosystem search..." },
  { type: "output" as const, text: "" },
  {
    type: "result" as const,
    text: "Found 30+ DeFi protocols on Celo:",
  },
  {
    type: "result" as const,
    text: "  \u2022 Uniswap V3/V4 \u2014 Primary DEX, concentrated liquidity",
  },
  {
    type: "result" as const,
    text: "  \u2022 Aave V3 \u2014 Multi-asset lending (USDC, USDT, USDm, CELO)",
  },
  {
    type: "result" as const,
    text: "  \u2022 Morpho Blue \u2014 Permissionless isolated lending markets",
  },
  {
    type: "result" as const,
    text: "  \u2022 Mento V3 \u2014 15+ local-currency stablecoins",
  },
  {
    type: "result" as const,
    text: "  \u2022 Velodrome V3 \u2014 ve-tokenomics DEX",
  },
  { type: "output" as const, text: "" },
  {
    type: "highlight" as const,
    text: "Gap analysis: No perpetuals DEX with significant",
  },
  {
    type: "highlight" as const,
    text: "TVL on Celo yet. Lynx exists but <$250K TVL.",
  },
];

export function TerminalMockup() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < LINES.length) {
      const delay = visibleLines === 0 ? 800 : visibleLines === 1 ? 1200 : 150;
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <div className="rounded-lg border border-card-border bg-card overflow-hidden shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-card-border">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-auto mr-auto text-xs text-muted font-mono">
          claude
        </span>
      </div>
      {/* Terminal content */}
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[320px]">
        {LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {line.type === "prompt" && (
              <span>
                <span className="text-celo">{">"}</span>{" "}
                <span className="text-foreground">{line.text}</span>
              </span>
            )}
            {line.type === "output" && (
              <span className="text-muted">{line.text || "\u00A0"}</span>
            )}
            {line.type === "result" && (
              <span className="text-foreground">{line.text}</span>
            )}
            {line.type === "highlight" && (
              <span className="text-celo">{line.text}</span>
            )}
          </div>
        ))}
        {visibleLines < LINES.length && (
          <span className="inline-block w-2 h-4 bg-celo animate-blink" />
        )}
      </div>
    </div>
  );
}
