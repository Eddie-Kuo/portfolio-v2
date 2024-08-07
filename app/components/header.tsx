import React from "react";
import Hero from "./hero";
import { SocialIcon } from "react-social-icons";
import Socials from "./socials";

type headerProps = {
  links: string[];
  activeSection: string;
};

export default function Header({ links, activeSection }: headerProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <Hero />
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
      </div>
      <Socials />
    </header>
  );
}
