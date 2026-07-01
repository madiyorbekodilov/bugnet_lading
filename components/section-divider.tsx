export function SectionDivider() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
      <div className="relative h-px w-full bg-border">
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
      </div>
    </div>
  );
}
