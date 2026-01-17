export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_10%_-10%,rgba(var(--accent),0.18),transparent_60%),radial-gradient(900px_520px_at_88%_0%,rgba(110,180,255,0.16),transparent_60%)]" />
      <div className="absolute inset-0 opacity-60 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      <div className="absolute inset-0 bg-[radial-gradient(520px_260px_at_70%_30%,rgba(255,255,255,0.08),transparent_70%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-[var(--bg)] to-transparent" />
    </div>
  );
}
