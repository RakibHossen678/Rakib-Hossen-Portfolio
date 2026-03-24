import React from "react";

const SectionHeader = ({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
}) => {
  const alignment = align === "left" ? "text-left" : "text-center";

  return (
    <div className={`mb-10 ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="section-title">
        {title} {accent ? <span className="text-primary">{accent}</span> : null}
      </h2>
      {description ? (
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeader;
