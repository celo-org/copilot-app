export function FeatureCard({
  stat,
  label,
  description,
}: {
  stat: string;
  label: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-card-border bg-card p-7 hover:border-celo-yellow/30 transition-colors">
      <div className="text-4xl text-celo-yellow mb-1 tracking-[-0.02em] font-serif">{stat}</div>
      <div className="text-sm font-medium text-foreground mb-2">{label}</div>
      <p className="text-xs text-muted leading-relaxed">{description}</p>
    </div>
  );
}
