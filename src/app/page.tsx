import HeroSection from "@/components/HeroSection";
import ArcadeGrid from "@/components/ArcadeGrid";
import ToolsGrid from "@/components/ToolsGrid";
import OpenSourceGrid from "@/components/OpenSourceGrid";
import { ALL_PROJECTS, OSS_PROJECTS } from "@/lib/data";

export default function Home() {
  const arcadeProjects = ALL_PROJECTS.filter((p) => p.category === "arcade");
  const toolsProjects = ALL_PROJECTS.filter((p) => p.category === "tools");

  return (
    <>
      <HeroSection />
      <ArcadeGrid projects={arcadeProjects} />
      <ToolsGrid projects={toolsProjects} />
      <OpenSourceGrid projects={OSS_PROJECTS} />
    </>
  );
}
