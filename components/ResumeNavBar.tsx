"use client";

import { Montserrat } from "next/font/google";
import { useTranslations } from "next-intl";
import { usePathname } from "next-intl/client";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useResumeContext } from "@/app/[locale]/(resume)/ResumeContext";
import { LanguageChanger } from "@/components/LanguageChanger";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"]
});

export const ResumeNavBar = () => {
  const { darkMode, toggleDarkMode } = useResumeContext();
  const t = useTranslations('resume');
  const pathname = usePathname();
  pathname &&console.log(pathname);
  
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
