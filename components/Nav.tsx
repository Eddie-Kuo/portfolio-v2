"use client";

import React, { useEffect, useState } from "react";

function Nav() {
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
      threshold: 0.8,
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
    <nav className="hidden lg:block">
      <ul className="mt-16 w-max">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link}`} className="group flex items-center py-3">
              <span
                className={`mr-3 h-[2px] w-10 bg-accent transition-all group-hover:w-16 ${
                  activeSection === link && "w-16"
                }`}
              ></span>
              <span
                className={`text-sm uppercase tracking-widest group-hover:text-lightText ${
                  activeSection === link
                    ? "text-lightText"
                    : "text-secondaryText"
                }`}
              >
                {link}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
