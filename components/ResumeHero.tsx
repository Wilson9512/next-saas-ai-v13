"use client";

import { useTranslations } from "next-intl";
import TypeweiterComponent from "typewriter-effect";

import { useResumeContext } from "@/app/[locale]/(resume)/ResumeContext";

export const ResumeHero = () => {
  const { darkMode } = useResumeContext();
  const t = useTranslations('resume');

  return (
    <div className={`font-bold py-36 text-center space-y-5 ${darkMode ? "text-white" : "text-black"}`}>
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl spacy-y-5 font-extrabold">
        <h1>{t('name')}</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypeweiterComponent
            options={{
              strings: [
                `${t('position')}`,
                `${t('location')}`
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};
