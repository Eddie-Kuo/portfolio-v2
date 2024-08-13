import React from "react";

const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    location: "Formosa Plastics Corporation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid necessitatibus eius sequi sint repellendus ut itaque quaerat. Maxime officia quo aliquam sequi consectetur dolorem aut, obcaecati veritatis? Voluptatum, voluptate.",
    duration: "2023 - PRESENT",
    technologies: [
      "JavaScript",
      "TypeScript",
      "WordPress",
      "React",
      "Sanity.io",
      "Figma",
      "React Native",
    ],
  },
  {
    id: 2,
    title: "Software Engineer",
    location: "Freelance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid necessitatibus eius sequi sint repellendus ut itaque quaerat. Maxime officia quo aliquam sequi consectetur dolorem aut, obcaecati veritatis? Voluptatum, voluptate.",
    duration: "2022 - 2023",
    technologies: [
      "JavaScript",
      "TypeScript",
      "WordPress",
      "React",
      "Sanity.io",
      "TailwindCSS",
      "Figma",
      "React Native",
    ],
  },
  {
    id: 3,
    title: "Software Engineer",
    location: "Alchemy Code Lab",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae temporibus impedit corporis dolore dolor laborum commodi provident amet, eaque veritatis itaque fugiat, architecto nesciunt esse exercitationem officiis beatae expedita.",
    duration: "2022 - 2023",
    technologies: [
      "JavaScript",
      "TypeScript",
      "WordPress",
      "React",
      "Sanity.io",
      "TailwindCSS",
      "Figma",
      "React Native",
    ],
  },
];

function Experience() {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-md font-semibold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <ul className="group/list">
        {experiences.map((experience) => (
          <li key={experience.id} className="mb-10">
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
                <p className="mt-2 text-secondaryText">
                  {experience.description}
                </p>
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
        ))}
      </ul>
    </>
  );
}

export default Experience;
