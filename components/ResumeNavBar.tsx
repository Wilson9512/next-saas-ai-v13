"use client";

import { Montserrat } from "next/font/google";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LanguageChanger } from "@/components/LanguageChanger";
import { useResumeContext } from "@/app/(resume)/[locale]/ResumeContext";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"]
});

export const ResumeNavBar = () => {
  const { darkMode } = useResumeContext();
  const t = useTranslations('resume');

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <h1 className={cn(`text-2xl font-bold ${darkMode ? "text-white" : "text-black"}`, font.className)}>
          {t('title')}
        </h1>
      </Link>

      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-2">
          <LanguageChanger />
        </div>
        {/* <div className="flex items-center gap-x-2">
          <Switch
            checked={darkMode}
            onCheckedChange={toggleDarkMode}
            id="dark-mode-toggle"
          />
          <Label htmlFor="dark-mode-toggle" className={darkMode ? "text-white" : "text-black"}>
            {darkMode ? t("dayMode") : t("nightMode")}
          </Label>
        </div> */}
        <Link href="/">
          <Button variant="outline" className="rounded-full">
            {t('home')}
          </Button>
        </Link>
      </div>
    </nav>
  );
};
