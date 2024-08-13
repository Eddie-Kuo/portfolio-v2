import { experiences } from "@/constants/experience";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import SectionHeader from "./SectionHeader";

function Experience() {
  return (
    <>
      <SectionHeader title="experience" />
      <ul className="group/list">
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} key={experience.location} />
        ))}
      </ul>
    </>
  );
}

export default Experience;
