import { ResumeContent } from "@/components/ResumeContent";
import ResumeFooter from "@/components/ResumeFooter";
import { ResumeHero } from "@/components/ResumeHero";
import { ResumeNavBar } from "@/components/ResumeNavBar";
import ResumeSections from "@/components/ResumeSections";

const ResumePage = () =>
  <div className="h-full">
    <ResumeNavBar />
    <ResumeHero />
    <ResumeContent />
    <ResumeSections />
    <ResumeFooter />
  </div>
  ;

export default ResumePage;

