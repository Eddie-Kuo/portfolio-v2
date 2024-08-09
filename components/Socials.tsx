import React from "react";
import { SocialIcon } from "react-social-icons";
import { socials } from "@/constants/socials";

function Socials() {
  return (
    <ul className="mt-5 flex gap-2">
      {socials.map((social) => (
        <li key={social.id} className="p-0">
          <SocialIcon
            url={social.url}
            fgColor={"rgb(161 161 170)"}
            bgColor="rgb(51 65 85)"
            target="_blank"
          />
        </li>
      ))}
    </ul>
  );
}

export default Socials;
