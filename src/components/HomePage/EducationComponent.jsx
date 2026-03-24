"use client";

import React from "react";
import { portfolioData } from "@/lib/portfolioData";

const EducationComponent = () => {
  return (
    <div className="space-y-4">
      {portfolioData.education.map((item, index) => (
        <article
          key={`${item.degree}-${item.institute}`}
          className="rounded-xl border border-slate-700 bg-slate-900/60 p-5 md:p-6"
        >
          <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">
                {item.degree}
              </h3>
              <p className="text-sm font-medium text-primary">
                {item.institute}
              </p>
            </div>
            <span className="inline-flex w-fit rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
              {item.status}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            {item.summary}
          </p>

          <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
            {String(index + 1).padStart(2, "0")}
          </div>
        </article>
      ))}
    </div>
  );
};

export default EducationComponent;
