import { experiences } from "@/constants/experience";
import React from "react";
import Card from "./Card";
import SectionHeader from "./SectionHeader";

function Experience() {
  return (
    <>
      <SectionHeader title="experience" />
      {/* hover effect */}
      <ul className="group/list">
        {experiences.map((experience) => (
          <Card experience={experience} key={experience.location} />
        ))}
      </ul>
    </>
  );
}

export default Experience;
