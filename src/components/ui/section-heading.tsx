export function SectionHeading({
  eyebrow,
  title,
  align = "left"
}: {
  eyebrow: string;
  title: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : undefined}>
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <span className={`section-heading-accent${align === "center" ? " mx-auto" : ""}`} />
    </div>
  );
}
