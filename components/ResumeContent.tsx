"use client";

import { useTranslations } from "next-intl";

import { WorkItems } from "./WorkItems";
import { useResumeContext } from "@/app/[locale]/(resume)/ResumeContext";

export const ResumeContent = () => {
  const { darkMode } = useResumeContext();
  const t = useTranslations('resume');

  return (
    <div className="px-10 pb-20">
      <h2 className={`text-center text-4xl font-extrabold mb-10 ${darkMode ? "text-white" : "text-black"}`}>
        {t('experience')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <WorkItems darkMode={darkMode} />
      </div>
    </div>
  )
};
