import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const WorkItems = ({
  darkMode = true
}: {
  darkMode: boolean
}) => {
  const t = useTranslations('resume');

  return (<>
    <Card key={t('responsibilities1')} className={`border-none p-4 mb-4 ${darkMode ? "bg-[#192339] text-white" : "bg-[#d3dcef] text-black"}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-x-2">
          <div className="m-1">
            <Avatar className="h-8 w-8">
              <AvatarImage className="p-1" src="logo.png" />
            </Avatar>
            <h3 className="text-xl font-bold">{t("workTitle1")} - {t("company1")}</h3>
            <p className="text-zinc-400">{t("timeRanges1")}</p>
          </div>
        </CardTitle>
        <CardContent className="pt-4 px-0">
          <p className="text-lg">{t("skillsContext1")}</p>
          <p className="text-zinc-400 text-md sm:text-sm md:text-md">{t("skills1")}</p>
          <br />
          <p className="text-lg">{t("responsibilitiesContext1")}</p>
          <p className="text-zinc-400 text-md sm:text-sm md:text-md">{t("responsibilities1")}</p>
        </CardContent>
      </CardHeader>
    </Card>
    <Card key={t("responsibilities2")} className={`border-none p-4 mb-4 ${darkMode ? "bg-[#192339] text-white" : "bg-[#d3dcef] text-black"}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-x-2">
          <div className="m-1">
            <Avatar className="h-8 w-8">
              <AvatarImage className="p-1" src="berify-title.webp" />
            </Avatar>
            <h3 className="text-xl font-bold">{t("workTitle2")} - {t("company2")}</h3>
            <p className="text-zinc-400">{t("timeRanges2")}</p>
          </div>
          <div>
          </div>
        </CardTitle>
        <CardContent className="pt-4 px-0">
          <p className="text-lg">{t("skillsContext2")}</p>
          <p className="text-zinc-400 text-md sm:text-sm md:text-md">{t("skills2")}</p>
          <br />
          <p className="text-lg">{t("responsibilitiesContext2")}</p>
          <p className="text-zinc-400 text-md sm:text-sm md:text-md">{t("responsibilities2")}</p>
        </CardContent>
      </CardHeader>
    </Card>
  </>
  )
};

