import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

const About = dynamic(() => import("@/components/sections/About"));
const TechStack = dynamic(() => import("@/components/sections/TechStack"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Certifications = dynamic(() => import("@/components/sections/Certifications"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

import LazySectionWrapper from "@/components/ui/LazySectionWrapper";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        <LazySectionWrapper height="80vh">
          <div className="section-divider" />
          <About />
        </LazySectionWrapper>
        
        <LazySectionWrapper height="60vh">
          <div className="section-divider" />
          <TechStack />
        </LazySectionWrapper>
        
        <LazySectionWrapper height="60vh">
          <div className="section-divider" />
          <Skills />
        </LazySectionWrapper>
        
        <LazySectionWrapper height="100vh">
          <div className="section-divider" />
          <Projects />
        </LazySectionWrapper>
        
        <LazySectionWrapper height="80vh">
          <div className="section-divider" />
          <Experience />
        </LazySectionWrapper>
        
        <LazySectionWrapper height="100vh">
          <div className="section-divider" />
          <Certifications />
        </LazySectionWrapper>
        
        <LazySectionWrapper height="80vh">
          <div className="section-divider" />
          {/* <Blog />
          <div className="section-divider" /> */}
          <Contact />
        </LazySectionWrapper>
      </main>
      <Footer />
    </>
  );
}
