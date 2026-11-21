import { Fragment, type ReactNode } from "react";

/**
 * Editorial section heading. Section numbers come from a CSS counter on
 * `.portfolio-page`, so they stay correct when sections are reordered.
 * Plain-string titles are split into words for a staggered reveal.
 */
export function SectionHeading({
  eyebrow,
  title,
  align = "left"
}: {
  eyebrow: string;
  title: ReactNode;
  align?: "left" | "center";
}) {
  const words = typeof title === "string" ? title.split(" ") : null;

  return (
    <div className={`sh${align === "center" ? " sh--center" : ""}`} data-reveal>
      <div className="sh-top">
        <span className="sh-index" aria-hidden="true" />
        <span className="sh-rule" aria-hidden="true" />
        <p className="sh-eyebrow">{eyebrow}</p>
      </div>
      <h2 className="sh-title">
        {words
          ? words.map((w, i) => (
              <Fragment key={`${w}-${i}`}>
                <span className="sh-word">
                  <span style={{ "--i": i } as React.CSSProperties}>{w}</span>
                </span>
                {i < words.length - 1 ? " " : null}
              </Fragment>
            ))
          : title}
      </h2>
    </div>
  );
}
