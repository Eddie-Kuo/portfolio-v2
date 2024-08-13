import React from "react";

type ExperienceCardProps = {
  title: string;
  location: string;
  description: string;
  duration: string;
  technologies: string[];
};

function ExperienceCard({ experience }: { experience: ExperienceCardProps }) {
  return (
    <li className="mb-10">
      <div className="group relative grid transition-all sm:grid-cols-8 lg:gap-3 lg:hover:!opacity-100 lg:group-hover/list:opacity-40">
        <div className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-700/20" />
        <header className="z-10 mt-1 text-xs uppercase tracking-widest text-secondaryText sm:col-span-2">
          {experience.duration}
        </header>
        <div className="z-10 sm:col-span-6">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-medium text-lightText group-hover:text-accent">
              {experience.title} -
            </h3>
            <h5 className="font-xs text-sm text-secondaryText group-hover:text-accent">
              {experience.location}
            </h5>
          </div>
          <p className="mt-2 text-secondaryText">{experience.description}</p>
          <ul className="mb-1 mt-2 flex flex-wrap">
            {experience.technologies.map((tech) => (
              <li key={tech} className="mr-1 mt-2">
                <div className="rounded-full bg-accent/30 px-3 py-1 text-sm font-medium text-zinc-300">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default ExperienceCard;
