# Celo Copilot — Landing Page

The marketing landing page for [Celo Copilot](https://github.com/celo-org/copilot), the comprehensive AI skill for building on the Celo ecosystem.

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **TypeScript**
- **Fonts**: GT Alpina Thin (headings) + Inter (body) — matching celo.org's typography
- **Design**: Celo brand yellow (`#FCFF52`) hero, dark sections, pill buttons

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/
    globals.css           # Tailwind theme, Celo brand colors, animations
    layout.tsx            # Fonts, metadata, OG tags
    page.tsx              # Main landing page (all sections)
  components/
    TerminalMockup.tsx    # Animated terminal demo
    InstallCommand.tsx    # Copy-to-clipboard install command
    FeatureCard.tsx       # Stats card (150+, 6,300+, etc.)
    UseCaseCard.tsx       # Use case card
    SourcesMarquee.tsx    # Scrolling data sources marquee
```

## Sections

1. **Hero** — Yellow Celo-branded hero with terminal mockup animation
2. **What's Inside** — 6 feature cards with key stats
3. **Topic Clusters** — Tag pills for ecosystem verticals
4. **Data Sources** — Full-bleed marquee of curated sources
5. **What Builders Ask** — 6 use case cards
6. **Get Started** — CTA with install command
7. **Footer** — celo.org-style yellow footer with columns and social icons

## Deploy

Deploy to Vercel:

```bash
vercel
```

## Related

- [celo-org/copilot](https://github.com/celo-org/copilot) — The actual skill (markdown + reference files)
- [celo-org/agent-skills](https://github.com/celo-org/agent-skills) — Celo's modular agent skills collection

## License

Apache-2.0
