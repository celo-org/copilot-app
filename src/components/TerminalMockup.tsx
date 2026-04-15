"use client";

import { useEffect, useState, useCallback } from "react";

type Line = {
  type: "prompt" | "output" | "result" | "highlight";
  text: string;
};

const DEMOS: { prompt: string; lines: Line[] }[] = [
  {
    prompt: "What DeFi protocols are on Celo?",
    lines: [
      { type: "output", text: "Running ecosystem search..." },
      { type: "output", text: "" },
      { type: "result", text: "Found 10+ DeFi protocols on Celo:" },
      {
        type: "result",
        text: "  \u2022 Uniswap V3/V4 \u2014 Primary DEX, concentrated liquidity",
      },
      {
        type: "result",
        text: "  \u2022 Aave V3 \u2014 Multi-asset lending (USDC, USDT, USDm, CELO)",
      },
      {
        type: "result",
        text: "  \u2022 Morpho Blue \u2014 Permissionless isolated lending markets",
      },
      {
        type: "result",
        text: "  \u2022 Mento V3 \u2014 15+ local-currency stablecoins",
      },
      {
        type: "result",
        text: "  \u2022 Velodrome V3 \u2014 ve-tokenomics DEX",
      },
      { type: "output", text: "" },
      {
        type: "highlight",
        text: "Gap: Celo is missing a prediction market.",
      },
      {
        type: "highlight",
        text: "No Polymarket/Azuro equivalent deployed yet.",
      },
    ],
  },
  {
    prompt: "I want to build a payments Mini App. Where do I start?",
    lines: [
      { type: "output", text: "Searching MiniPay docs + templates..." },
      { type: "output", text: "" },
      {
        type: "result",
        text: "MiniPay: 14M+ wallets, 60+ countries, sub-cent fees",
      },
      { type: "output", text: "" },
      { type: "result", text: "Quick start:" },
      {
        type: "result",
        text: "  1. npx @celo/celo-composer@latest create -t minipay",
      },
      {
        type: "result",
        text: "  2. Detect wallet: window.ethereum.isMiniPay",
      },
      {
        type: "result",
        text: "  3. Pay gas with USDm (fee abstraction built in)",
      },
      { type: "output", text: "" },
      {
        type: "highlight",
        text: "Funding: Apply to Proof of Ship (20K USDT)",
      },
      {
        type: "highlight",
        text: "or Celo Builder Fund ($25K cUSD via Verda).",
      },
    ],
  },
  {
    prompt:
      "How do I resolve a phone number to a MiniPay wallet on mainnet?",
    lines: [
      { type: "output", text: "Loading odis-socialconnect.md + guides..." },
      { type: "output", text: "" },
      {
        type: "result",
        text: "ODIS (PnP) + FederatedAttestations \u2014 SocialConnect pattern",
      },
      { type: "output", text: "" },
      { type: "result", text: "  1. Ensure PnP quota (OdisPayments.payInCUSD + allowance)" },
      {
        type: "result",
        text: "  2. getObfuscatedIdentifier(E.164, ContractKit + @celo/identity)",
      },
      {
        type: "result",
        text: "  3. lookupAttestations(hash, [MiniPay issuer])",
      },
      { type: "output", text: "" },
      {
        type: "result",
        text: "  MiniPay issuer: 0x7888612486844Bb9BE598668081c59A9f7367FBc",
      },
      { type: "output", text: "" },
      {
        type: "highlight",
        text: "Quota \u2260 wallet balance \u2014 top up ODIS before lookups.",
      },
    ],
  },
  {
    prompt: "What Mini Apps are already live in MiniPay discovery?",
    lines: [
      { type: "output", text: "Opening minipay-live-apps.md..." },
      { type: "output", text: "" },
      {
        type: "result",
        text: "Snapshot: finance, games, rewards, sports, utility, shopping\u2026",
      },
      {
        type: "result",
        text: "  e.g. BitGifty (bills, airtime), Squid (BTC/ETH), Mento rewards",
      },
      {
        type: "result",
        text: "  Games: mchamp, Tradcast, MiniPlay \u2014 plus country targeting notes",
      },
      { type: "output", text: "" },
      {
        type: "highlight",
        text: "Not every app in every country \u2014 check export + real MiniPay.",
      },
    ],
  },
  {
    prompt: "What grants can I apply to right now?",
    lines: [
      { type: "output", text: "Fetching celopg.eco/programs..." },
      { type: "output", text: "" },
      { type: "result", text: "3 programs currently live:" },
      { type: "output", text: "" },
      {
        type: "result",
        text: "  \u2022 Prezenti Anchor Round \u2014 up to $25K USD",
      },
      {
        type: "result",
        text: "  \u2022 GoodBuilders Season 3 \u2014 $50K in G$",
      },
      {
        type: "result",
        text: "  \u2022 Celo Builder Fund \u2014 $25K cUSD (year-round)",
      },
      { type: "output", text: "" },
      {
        type: "highlight",
        text: "Tip: Set up a Karma GAP profile first \u2014",
      },
      {
        type: "highlight",
        text: "most programs use it to verify progress.",
      },
    ],
  },
  {
    prompt: "Show me the Uniswap V4 contracts on Celo",
    lines: [
      { type: "output", text: "Looking up contracts.md..." },
      { type: "output", text: "" },
      { type: "result", text: "Uniswap V4 (Celo Mainnet, Chain ID 42220):" },
      { type: "output", text: "" },
      {
        type: "result",
        text: "  PoolManager     0x288dc841A52FCA2707c6947B...",
      },
      {
        type: "result",
        text: "  PositionManager  0xf7965f3981e4d5bc383bfbc...",
      },
      {
        type: "result",
        text: "  UniversalRouter  0xcb695bc5d3aa22cad1e6df0...",
      },
      {
        type: "result",
        text: "  V4Quoter        0x28566da1093609182dff2cb2...",
      },
      {
        type: "result",
        text: "  Permit2          0x000000000022D473030F116d...",
      },
      { type: "output", text: "" },
      {
        type: "highlight",
        text: "All verified from docs.celo.org \u2714",
      },
    ],
  },
  {
    prompt: "How do I pay gas with USDC on Celo?",
    lines: [
      { type: "output", text: "Loading fee abstraction guide..." },
      { type: "output", text: "" },
      {
        type: "result",
        text: "USDC uses an adapter for feeCurrency (6 decimals):",
      },
      { type: "output", text: "" },
      {
        type: "result",
        text: "  Token:   0xcebA9300f2b948710d2653dD7B07...",
      },
      {
        type: "result",
        text: "  Adapter: 0x2F25deB3848C207fc8E0c34035B3...",
      },
      { type: "output", text: "" },
      {
        type: "result",
        text: "  // Use adapter address, NOT token address",
      },
      {
        type: "result",
        text: "  feeCurrency: '0x2F25deB384...'",
      },
      { type: "output", text: "" },
      {
        type: "highlight",
        text: "Only viem supports feeCurrency natively.",
      },
    ],
  },
];

function TypewriterText({
  text,
  onDone,
}: {
  text: string;
  onDone: () => void;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, 35);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onDone, 400);
      return () => clearTimeout(timer);
    }
  }, [displayed, text, onDone]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-2 h-4 bg-celo animate-blink ml-0.5 align-middle" />
      )}
    </span>
  );
}

export function TerminalMockup() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [phase, setPhase] = useState<"typing" | "output">("typing");
  const [visibleLines, setVisibleLines] = useState(0);

  const demo = DEMOS[activeDemo];

  const handleTypingDone = useCallback(() => {
    setPhase("output");
  }, []);

  // Output lines appearing one by one
  useEffect(() => {
    if (phase !== "output") return;
    if (visibleLines < demo.lines.length) {
      const delay = visibleLines === 0 ? 600 : 120;
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay);
      return () => clearTimeout(timer);
    } else {
      // Auto-advance after showing all lines
      const timer = setTimeout(() => {
        setActiveDemo((d) => (d + 1) % DEMOS.length);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [phase, visibleLines, demo.lines.length]);

  // Reset when demo changes
  useEffect(() => {
    setPhase("typing");
    setVisibleLines(0);
  }, [activeDemo]);

  return (
    <div>
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
          {/* Prompt with typing effect */}
          <div className="whitespace-pre-wrap">
            <span className="text-celo">{">"}</span>{" "}
            <span className="text-foreground">
              {phase === "typing" ? (
                <TypewriterText
                  key={activeDemo}
                  text={demo.prompt}
                  onDone={handleTypingDone}
                />
              ) : (
                demo.prompt
              )}
            </span>
          </div>

          {/* Output lines */}
          {phase === "output" &&
            demo.lines.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="whitespace-pre-wrap">
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

          {/* Cursor when output is still streaming */}
          {phase === "output" && visibleLines < demo.lines.length && (
            <span className="inline-block w-2 h-4 bg-celo animate-blink" />
          )}
        </div>
      </div>

      {/* Carousel dots */}
      <div className="flex justify-center gap-2 mt-4">
        {DEMOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveDemo(i)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              i === activeDemo
                ? "w-6 h-2 bg-celo"
                : "w-2 h-2 bg-muted/40 hover:bg-muted"
            }`}
            aria-label={`Demo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
