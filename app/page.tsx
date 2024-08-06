"use client";

import { motion } from "framer-motion";
import Hero from "./components/hero";
import About from "./components/about";
import Header from "./components/header";
import { useEffect, useState } from "react";

export default function Home() {
  let [activeSection, setActiveSection] = useState("about");

  let links = ["about", "experience", "projects"];

  useEffect(() => {
    let about = document.getElementById("about");
    let projects = document.getElementById("experience");
    let skills = document.getElementById("projects");

    let sections = [about, projects, skills];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "about") {
            setActiveSection("about");
          }
          if (entry.target.id == "experience") {
            setActiveSection("experience");
          }
          if (entry.target.id == "projects") {
            setActiveSection("projects");
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      section && observer.observe(section);
    });
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl bg-slate-800 px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header links={links} activeSection={activeSection} />
        <main className="pt-24 lg:w-1/2 lg:py-24">
          {/* about */}
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <About />
          </section>

          {/* experience */}
          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            Experience
          </section>

          {/* projects */}
          <section
            id="projects"
            className="lg:scroll-mt-24] mb-16 scroll-mt-16 md:mb-24 lg:mb-36"
          >
            Projects
          </section>

          {/* additional stuff */}
          <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            Tech Stack
          </section>
          <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            Contact
          </section>
          <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            Credit for inspo
          </section>
        </main>
      </div>
    </div>
  );
}
