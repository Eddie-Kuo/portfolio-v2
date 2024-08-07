import React from "react";
import Hero from "./hero";
import Socials from "./socials";
import Nav from "./nav";

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
