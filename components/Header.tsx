import React from "react";
import Hero from "./Hero";
import Socials from "./Socials";
import Nav from "./Nav";

function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <Hero />
        <Nav />
      </div>
      <Socials />
    </header>
  );
}

export default Header;
