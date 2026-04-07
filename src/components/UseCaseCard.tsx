export function UseCaseCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-card-border bg-card p-7 hover:border-celo-yellow/30 transition-colors">
      <h3 className="text-base font-medium text-foreground mb-2 tracking-[-0.01em]">{title}</h3>
      <p className="text-xs text-muted leading-relaxed">{description}</p>
    </div>
  );
}
