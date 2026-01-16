export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[var(--bg)] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
    </div>
  );
}
