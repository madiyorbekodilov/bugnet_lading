export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[680px]">
      <div className="absolute inset-0 rounded-[40px] border border-border bg-white shadow-[0_30px_100px_rgba(15,23,42,0.08)]" />
      <div className="absolute inset-4 rounded-[34px] border border-slate-100 bg-[linear-gradient(180deg,rgba(248,250,252,0.96),rgba(255,255,255,0.98))]" />
      <div className="absolute left-8 top-8 rounded-full border border-border bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted shadow-sm">
        Enterprise delivery
      </div>
      <div className="absolute right-8 top-8 flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Reliable by design
      </div>
      <div className="absolute left-12 top-28 h-36 w-36 rounded-[34px] border border-slate-200 bg-white/90 shadow-sm animate-float-slow" />
      <div className="absolute left-20 top-36 h-20 w-20 rounded-full bg-slate-100" />
      <div className="absolute right-14 top-28 h-28 w-28 rounded-[30px] border border-blue-200 bg-blue-50 shadow-sm animate-drift" />
      <div className="absolute right-24 top-36 h-8 w-16 rounded-full bg-white shadow-sm" />
      <div className="absolute bottom-14 left-14 h-44 w-56 rounded-[32px] border border-slate-200 bg-white shadow-sm animate-float-slow [animation-delay:1s]">
        <div className="absolute left-5 top-5 h-3 w-24 rounded-full bg-slate-200" />
        <div className="absolute left-5 top-12 h-3 w-32 rounded-full bg-slate-100" />
        <div className="absolute inset-x-5 bottom-5 top-20 rounded-[22px] bg-slate-50" />
      </div>
      <div className="absolute bottom-16 right-12 h-36 w-44 rounded-[28px] border border-slate-200 bg-slate-50 shadow-sm">
        <div className="absolute left-4 top-4 h-2.5 w-20 rounded-full bg-slate-200" />
        <div className="absolute left-4 top-10 h-24 w-28 rounded-[20px] bg-white shadow-sm" />
        <div className="absolute right-4 bottom-4 h-10 w-10 rounded-full bg-blue-50" />
      </div>
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/70 bg-blue-50/60 blur-3xl animate-glow-soft" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(37,99,235,0.08),transparent_36%)]" />
    </div>
  );
}
