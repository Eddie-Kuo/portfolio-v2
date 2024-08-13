import React from "react";
import SectionHeader from "./SectionHeader";
import { projects } from "@/constants/projects";
import Card from "./Card";

function Projects() {
  return (
    <>
      <SectionHeader title="projects" />
      <ul className="group/list">
        {projects.map((project) => (
          <Card experience={project} key={project.title} />
        ))}
      </ul>
    </>
  );
}

export default Projects;
