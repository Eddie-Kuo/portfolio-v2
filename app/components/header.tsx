"use client";

import React from "react";
import Hero from "./hero";
import { useParams, useSearchParams } from "next/navigation";

export default function Header() {
  const params = useSearchParams();
  console.log("params", params);
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <Hero />
        <nav className="hidden lg:block">
          <ul className="mt-16 w-max">
            <li>
              <a href="#about" className="group flex items-center py-3">
                <span className="w-10 bg-accent h-[2px] mr-3 group-hover:w-16 transition-all"></span>
                <span className="uppercase tracking-widest text-secondaryText group-hover:text-lightText text-sm">
                  about
                </span>
              </a>
            </li>
            <li>
              <a href="#experience" className="group flex items-center py-3">
                <span className="w-10 bg-teal-400 h-[2px] mr-3 group-hover:w-16 transition-all"></span>
                <span className="uppercase tracking-widest text-secondaryText group-hover:text-lightText text-sm">
                  experience
                </span>
              </a>
            </li>
            <li>
              <a href="#projects" className="group flex items-center py-3">
                <span className="w-10 bg-teal-400 h-[2px] mr-3 group-hover:w-16 transition-all"></span>
                <span className="uppercase tracking-widest text-secondaryText group-hover:text-lightText text-sm">
                  projects
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    // nav
    // socials
  );
}