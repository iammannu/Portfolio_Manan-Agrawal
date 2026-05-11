"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ScrollProgress from "@/components/common/ScrollProgress";
import LoadingScreen from "@/components/common/LoadingScreen";
import AnimatedBackground from "@/components/common/AnimatedBackground";
import CursorFollower from "@/components/common/CursorFollower";

const About = dynamic(() => import("@/components/sections/About"), { ssr: false });
const Experience = dynamic(() => import("@/components/sections/Experience"), { ssr: false });
const Publications = dynamic(() => import("@/components/sections/Publications"), { ssr: false });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: false });
const Hardware = dynamic(() => import("@/components/sections/Hardware"), { ssr: false });
const Skills = dynamic(() => import("@/components/sections/Skills"), { ssr: false });
const Achievements = dynamic(() => import("@/components/sections/Achievements"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorFollower />
      <ScrollProgress />
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div className="h-screen" />}>
            <About />
            <Experience />
            <Publications />
            <Projects />
            <Hardware />
            <Skills />
            <Achievements />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}
