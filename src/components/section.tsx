import { SectionHeading } from "@/components/section-heading";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-10 sm:py-14">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      {children}
    </section>
  );
}
