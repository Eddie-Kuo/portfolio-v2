import React from "react";
import { SocialIcon } from "react-social-icons";

const socials = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/eddie-kuo17/",
  },
  {
    id: 2,
    url: "https://github.com/Eddie-Kuo",
  },
  {
    id: 3,
    url: "https://www.instagram.com/the_eddiekuo/",
  },
  {
    id: 4,
    url: "https://www.facebook.com/eddie.kuo.520/",
  },
];

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
