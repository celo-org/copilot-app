const SOURCES_ROW_1 = [
  { name: "docs.celo.org", category: "Protocol" },
  { name: "Uniswap", category: "DeFi" },
  { name: "Aave", category: "DeFi" },
  { name: "Morpho", category: "DeFi" },
  { name: "Mento", category: "Stablecoins" },
  { name: "MiniPay", category: "Wallet" },
  { name: "Chainlink", category: "Oracle" },
  { name: "RedStone", category: "Oracle" },
  { name: "The Graph", category: "Indexer" },
  { name: "DefiLlama", category: "Analytics" },
  { name: "Celoscan", category: "Explorer" },
  { name: "ERC-8004", category: "AI Agents" },
];

const SOURCES_ROW_2 = [
  { name: "Celo Governance", category: "Protocol" },
  { name: "x402", category: "AI Payments" },
  { name: "Velodrome", category: "DeFi" },
  { name: "stCELO", category: "Staking" },
  { name: "Superfluid", category: "Payments" },
  { name: "Toucan", category: "ReFi" },
  { name: "Band Protocol", category: "Oracle" },
  { name: "Envio", category: "Indexer" },
  { name: "Valora", category: "Wallet" },
  { name: "Self Protocol", category: "Identity" },
  { name: "Celo Camp", category: "Accelerator" },
  { name: "Prezenti", category: "Grants" },
];

function MarqueeRow({ items }: { items: typeof SOURCES_ROW_1 }) {
  return (
    <div className="flex overflow-hidden">
      <div className="flex animate-marquee gap-4">
        {[...items, ...items].map((source, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-full border border-hero-text/20 bg-hero-text/10 px-4 py-2 shrink-0"
          >
            <span className="text-xs text-hero-text/60 font-medium">
              {source.category}
            </span>
            <span className="text-sm text-hero-text">{source.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SourcesMarquee() {
  return (
    <div className="space-y-4">
      <MarqueeRow items={SOURCES_ROW_1} />
      <MarqueeRow items={SOURCES_ROW_2} />
    </div>
  );
}
