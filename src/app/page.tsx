import Image from "next/image";
import { TerminalMockup } from "@/components/TerminalMockup";
import { InstallCommand } from "@/components/InstallCommand";
import { FeatureCard } from "@/components/FeatureCard";
import { UseCaseCard } from "@/components/UseCaseCard";
import { SourcesMarquee } from "@/components/SourcesMarquee";

const FEATURES = [
  {
    stat: "150+",
    label: "Verified Contracts",
    description:
      "Core protocol, Mento stablecoins, Uniswap V3/V4, Aave V3, Morpho Blue, L1 bridge contracts \u2014 all from docs.celo.org.",
  },
  {
    stat: "6,300+",
    label: "Products via The Grid",
    description:
      "Live ecosystem data across crypto. Search by vertical, chain, status. Find competitors and gaps in real time.",
  },
  {
    stat: "15+",
    label: "Mento Stablecoins",
    description:
      "Local-currency stablecoins for 15+ countries \u2014 USD, EUR, BRL, KES, NGN, GHS, PHP, and more. Fee abstraction built in.",
  },
  {
    stat: "20+",
    label: "Grant Programs",
    description:
      "3 live + 17 past programs tracked. Prezenti, Celo Builder Fund, GoodBuilders \u2014 with matchmaking guide.",
  },
  {
    stat: "11M+",
    label: "MiniPay Wallets",
    description:
      "Build Mini Apps for the fastest-growing stablecoin wallet. Templates, detection, payments, and testing guides included.",
  },
  {
    stat: "10+",
    label: "DeFi Protocols",
    description:
      "Aave V3, Uniswap V3/V4, Morpho, Velodrome, Mento, Curve, Feather, Ubeswap, stCELO \u2014 with live TVL via DefiLlama.",
  },
];

const TOPIC_CLUSTERS = [
  "DeFi",
  "Stablecoins",
  "Payments",
  "MiniPay",
  "AI Agents",
  "RWA",
  "Identity",
  "Bridges",
  "Oracles",
  "Liquid Staking",
  "Governance",
  "Carbon Credits",
];

const USE_CASES = [
  {
    title: "Validate an idea before you build",
    description:
      'Ask "should I build this on Celo?" and get a competitor scan, landscape analysis, and gap assessment.',
  },
  {
    title: "Find what\u2019s missing on Celo",
    description:
      "Compare verticals across EVM chains. See what exists on Ethereum, Base, or Arbitrum but not yet on Celo.",
  },
  {
    title: "Set up a project in minutes",
    description:
      "Get Foundry/Hardhat configs, Viem setup with fee abstraction, and deploy scripts \u2014 all Celo-ready.",
  },
  {
    title: "Build a MiniPay Mini App",
    description:
      "Wallet detection, auto-connect, stablecoin payments, ngrok testing \u2014 with 5 ready-to-use code templates.",
  },
  {
    title: "Integrate DeFi protocols",
    description:
      "Swap on Uniswap, lend on Aave, create Morpho markets \u2014 with contract addresses and code patterns.",
  },
  {
    title: "Find the right grant",
    description:
      "Tell Copilot what you\u2019re building and get matched to the best Celo funding program for your stage.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Header — matches celo.org style */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-hero-bg">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://framerusercontent.com/images/4QwLLMpyMuhMZ8kCZqNVWR7ji4.png?scale-down-to=512"
              alt="Celo"
              className="h-8"
            />
            <span className="text-xl font-bold text-hero-text ml-1.5 tracking-tight">
              Copilot
            </span>
          </a>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-6 text-xs text-hero-text">
              <a href="#features" className="hover:opacity-60 transition-opacity">Features</a>
              <a href="#sources" className="hover:opacity-60 transition-opacity">Sources</a>
              <a href="#use-cases" className="hover:opacity-60 transition-opacity">Use Cases</a>
              <a href="https://docs.celo.org" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Docs</a>
            </nav>
            <a
              href="https://github.com/celo-org/copilot"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-hero-text px-5 py-2 text-xs font-medium text-hero-text hover:bg-hero-text hover:text-hero-bg transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-hero-bg text-hero-text pt-28 pb-20 px-6 min-h-[90vh] flex items-center">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.1] mb-6 tracking-[-0.02em]">
              Know the ecosystem before you build.
            </h1>
            <p className="text-base text-hero-text/60 leading-relaxed mb-10 max-w-xl">
              The comprehensive skill for building on Celo. Ecosystem
              intelligence, DeFi protocols, MiniPay templates, AI agent
              infrastructure, grants, and 150+ verified contract addresses.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://github.com/celo-org/copilot"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-hero-text bg-hero-text text-hero-bg px-6 py-2.5 text-sm font-medium hover:bg-transparent hover:text-hero-text transition-colors"
              >
                Get started
              </a>
              <a
                href="https://docs.celo.org/build-on-celo/build-with-ai/agent-skills"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-hero-text/30 px-6 py-2.5 text-sm font-medium text-hero-text hover:border-hero-text transition-colors"
              >
                Read the docs &rarr;
              </a>
            </div>
            <InstallCommand />
          </div>
          <div className="hidden lg:block">
            <TerminalMockup />
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section id="features" className="bg-background text-foreground py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-5xl mb-4 tracking-[-0.02em]">
            What&apos;s inside
          </h2>
          <p className="text-muted text-sm mb-16 max-w-2xl leading-relaxed">
            Verified data from docs.celo.org, live ecosystem intelligence from
            The Grid, and deep protocol references &mdash; all searchable from
            inside Claude Code, Codex, or OpenClaw.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <FeatureCard key={f.label} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Topic Clusters */}
      <section className="bg-background text-foreground py-12 px-6">
        <div className="max-w-[1400px] mx-auto">
          <h3 className="text-lg font-semibold mb-6 text-muted">
            Topic Clusters
          </h3>
          <div className="flex flex-wrap gap-3">
            {TOPIC_CLUSTERS.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-card-border px-5 py-2.5 text-sm text-foreground hover:border-celo hover:text-celo transition-colors cursor-default"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sources — Yellow, full-bleed marquee (no side padding) */}
      <section id="sources" className="bg-celo-yellow text-hero-text py-24">
        <div className="max-w-[1400px] mx-auto mb-10 px-6">
          <h2 className="text-3xl md:text-5xl mb-3 tracking-[-0.02em]">
            Data Sources
          </h2>
          <p className="text-sm text-hero-text/60">
            Curated from official documentation, protocol teams, and live APIs
          </p>
        </div>
        <div className="overflow-hidden">
          <SourcesMarquee />
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="bg-background text-foreground py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-5xl mb-4 tracking-[-0.02em]">
            What builders ask
          </h2>
          <p className="text-muted text-sm mb-16 max-w-2xl leading-relaxed">
            The questions that keep you up at night, answered with ecosystem
            data, protocol references, and honest assessments.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {USE_CASES.map((uc) => (
              <UseCaseCard key={uc.title} {...uc} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-celo-yellow text-hero-text py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-4 tracking-[-0.02em]">
            Get started
          </h2>
          <p className="text-sm text-hero-text/60 mb-10">
            Install the skill and start asking research questions inside your
            coding assistant.
          </p>
          <div className="flex justify-center mb-10">
            <InstallCommand />
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/celo-org/copilot"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-hero-text bg-hero-text text-hero-bg px-6 py-2.5 text-sm font-medium hover:bg-transparent hover:text-hero-text transition-colors"
            >
              Get started
            </a>
            <a
              href="https://docs.celo.org/build-on-celo/build-with-ai/agent-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-hero-text/30 px-6 py-2.5 text-sm font-medium text-hero-text hover:border-hero-text transition-colors"
            >
              Read the docs &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Footer — celo.org style: yellow bg, big logo, columns with pill links, social icons */}
      <footer className="bg-celo-yellow text-hero-text py-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Logo */}
          <div className="mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://framerusercontent.com/images/4QwLLMpyMuhMZ8kCZqNVWR7ji4.png?scale-down-to=512"
              alt="Celo"
              className="h-12"
            />
          </div>

          {/* Newsletter + Links grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left — tagline */}
            <div>
              <p className="text-lg mb-6">
                The comprehensive skill for building on Celo
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/celo-org/copilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-hero-text px-5 py-2 text-xs font-medium text-hero-text hover:bg-hero-text hover:text-hero-bg transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://docs.celo.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-hero-text px-5 py-2 text-xs font-medium text-hero-text hover:bg-hero-text hover:text-hero-bg transition-colors"
                >
                  Docs
                </a>
              </div>
            </div>

            {/* Right — link columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <h4 className="text-xs text-hero-text/60 mb-4">Celo for</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://docs.celo.org/build-on-celo/index" target="_blank" rel="noopener noreferrer" className="rounded-full border border-hero-text/30 px-3 py-1 text-xs hover:border-hero-text transition-colors inline-block">Builders</a>
                  </li>
                  <li>
                    <a href="https://docs.celo.org/build-on-celo/build-with-ai/overview" target="_blank" rel="noopener noreferrer" className="rounded-full border border-hero-text/30 px-3 py-1 text-xs hover:border-hero-text transition-colors inline-block">AI</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs text-hero-text/60 mb-4">Tech</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://docs.celo.org" target="_blank" rel="noopener noreferrer" className="rounded-full border border-hero-text/30 px-3 py-1 text-xs hover:border-hero-text transition-colors inline-block">Celo Docs</a>
                  </li>
                  <li>
                    <a href="https://mondo.celo.org" target="_blank" rel="noopener noreferrer" className="rounded-full border border-hero-text/30 px-3 py-1 text-xs hover:border-hero-text transition-colors inline-block">Celo Mondo</a>
                  </li>
                  <li>
                    <a href="https://github.com/celo-org/agent-skills" target="_blank" rel="noopener noreferrer" className="rounded-full border border-hero-text/30 px-3 py-1 text-xs hover:border-hero-text transition-colors inline-block">Agent Skills</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs text-hero-text/60 mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://celo.org" target="_blank" rel="noopener noreferrer" className="rounded-full border border-hero-text/30 px-3 py-1 text-xs hover:border-hero-text transition-colors inline-block">Celo.org</a>
                  </li>
                  <li>
                    <a href="https://celo.org/ecosystem" target="_blank" rel="noopener noreferrer" className="rounded-full border border-hero-text/30 px-3 py-1 text-xs hover:border-hero-text transition-colors inline-block">Ecosystem</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs text-hero-text/60 mb-4">Community</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://discord.com/invite/celo" target="_blank" rel="noopener noreferrer" className="rounded-full border border-hero-text/30 px-3 py-1 text-xs hover:border-hero-text transition-colors inline-block">Discord</a>
                  </li>
                  <li>
                    <a href="https://forum.celo.org" target="_blank" rel="noopener noreferrer" className="rounded-full border border-hero-text/30 px-3 py-1 text-xs hover:border-hero-text transition-colors inline-block">Forum</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar — social icons + copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-hero-text/10">
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a href="https://discord.com/invite/celo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-hero-text flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Discord">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M15.25 1.16A14.7 14.7 0 0011.53 0a.06.06 0 00-.06.03c-.16.29-.34.66-.47.96a13.6 13.6 0 00-4 0A9.5 9.5 0 006.52.03.06.06 0 006.46 0 14.64 14.64 0 002.75 1.16.05.05 0 00-.02.02C.4 4.73-.24 8.2.08 11.63a.06.06 0 00.02.05 14.8 14.8 0 004.46 2.25.06.06 0 00.07-.02c.34-.47.65-.97.91-1.49a.06.06 0 00-.03-.09 9.76 9.76 0 01-1.39-.66.06.06 0 01-.01-.1c.09-.07.19-.14.28-.22a.06.06 0 01.06-.01c2.93 1.34 6.1 1.34 9 0a.06.06 0 01.06.01c.09.07.19.15.28.22a.06.06 0 01-.01.1c-.44.26-.91.48-1.39.66a.06.06 0 00-.03.09c.27.52.57 1.02.91 1.49a.06.06 0 00.07.02 14.74 14.74 0 004.47-2.25.06.06 0 00.02-.05c.38-3.98-.64-7.43-2.7-10.49a.05.05 0 00-.02-.02zM6.01 9.54c-.91 0-1.66-.84-1.66-1.87s.73-1.87 1.66-1.87c.94 0 1.68.85 1.66 1.87 0 1.03-.73 1.87-1.66 1.87zm6.14 0c-.91 0-1.66-.84-1.66-1.87s.73-1.87 1.66-1.87c.94 0 1.68.85 1.66 1.87 0 1.03-.73 1.87-1.66 1.87z" fill="#FCFF52"/></svg>
              </a>
              <a href="https://x.com/CeloOrg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-hero-text flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="X">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12.6.75h2.45L9.73 6.87l6.27 8.38h-5.12L7.26 10.3l-4.42 4.95H.39l5.68-6.5L.12.75H5.4l3.46 4.58L12.6.75zm-.86 13.65h1.36L4.32 2.15H2.85l8.89 12.25z" fill="#FCFF52"/></svg>
              </a>
              <a href="https://github.com/celo-org/copilot" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-hero-text flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 .5A8.5 8.5 0 00.5 9a8.5 8.5 0 005.81 8.07c.43.07.58-.18.58-.4 0-.2-.01-.87-.01-1.57-2.13.4-2.69-.52-2.86-1 0 0-.38-.98-.93-1.23-.34-.18-.82-.63-.01-.64.76-.01 1.3.7 1.48.99.87 1.46 2.26 1.05 2.81.8.09-.63.34-1.05.62-1.3-2.16-.24-4.42-1.08-4.42-4.8 0-1.06.38-1.93.99-2.61-.1-.25-.43-1.24.1-2.58 0 0 .81-.26 2.67.99a9.14 9.14 0 014.84 0c1.85-1.25 2.67-.99 2.67-.99.52 1.34.2 2.33.1 2.58.62.68.99 1.55.99 2.61 0 3.73-2.27 4.56-4.43 4.8.35.3.65.89.65 1.8 0 1.3-.01 2.35-.01 2.67 0 .22.15.48.58.4A8.5 8.5 0 009 .5z" fill="#FCFF52"/></svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-hero-text/50">
              &copy; 2026 Celo Foundation
            </p>

            {/* Legal links */}
            <div className="flex items-center gap-4 text-xs text-hero-text/50">
              <a href="https://celo.org" target="_blank" rel="noopener noreferrer" className="hover:text-hero-text transition-colors">Privacy Policy</a>
              <a href="https://celo.org" target="_blank" rel="noopener noreferrer" className="hover:text-hero-text transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
