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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <TechStack />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        {/* <Blog />
        <div className="section-divider" /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
