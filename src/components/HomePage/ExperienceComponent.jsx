"use client";
import React from "react";
import { portfolioData } from "@/lib/portfolioData";

const ExperienceComponent = () => {
  return (
    <div className="space-y-4">
      {portfolioData.experience.map((item, idx) => (
        <article
          key={`${item.company}-${item.role}`}
          className="rounded-xl border border-slate-700 bg-slate-900/60 p-5 md:p-6"
        >
          <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">{item.role}</h3>
              <p className="text-sm font-medium text-primary">{item.company}</p>
            </div>
            <span className="text-sm font-medium text-slate-400">
              {item.period}
            </span>
          </div>

          <ul className="space-y-2.5">
            {item.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 text-sm leading-relaxed text-slate-300 md:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {idx < portfolioData.experience.length - 1 ? null : (
            <div className="mt-5 rounded-lg border border-slate-700 bg-slate-950/60 p-3 text-sm text-slate-300">
              Open to impactful product challenges and long-term team
              collaboration.
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

export default ExperienceComponent;
