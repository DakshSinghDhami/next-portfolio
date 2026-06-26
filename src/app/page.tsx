import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";
import Background3DClient from "@/components/Background3DClient";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Sidebar />
      <MobileNav />
      <Background3DClient />
      <main className="relative bg-base text-text">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <OpenSource />
        <Contact />
      </main>
    </>
  );
}
