import Image, { StaticImageData } from "next/image";
import React from "react";

type CardProps = {
  title: string;
  image?: StaticImageData;
  location?: string;
  description: string;
  duration?: string;
  technologies: string[];
  deployedLink?: string;
};

function Card({ experience }: { experience: CardProps }) {
  return (
    <li className="mb-10">
      <div className="group relative grid gap-4 transition-all sm:grid-cols-8 lg:gap-3 lg:hover:!opacity-100 lg:group-hover/list:opacity-40">
        <div className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-700/20" />

        {/* display either job duration or project image */}
        {experience.duration && (
          <header className="z-10 mt-1 text-xs uppercase tracking-widest text-secondaryText sm:col-span-2">
            {experience.duration}
          </header>
        )}
        {experience.image && (
          <div className="z-10 sm:col-span-2">
            <Image
              priority
              className="rounded-md border-2 border-slate-500/50"
              src={experience.image}
              alt="project image"
              width={200}
              height={45}
            />
          </div>
        )}

        <div className="z-10 sm:col-span-6">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-medium text-lightText group-hover:text-accent">
              {experience.deployedLink ? (
                <a
                  className="inline-flex items-baseline"
                  href={experience.deployedLink}
                  target="_blank"
                >
                  <div className="absolute -inset-x-4 -inset-y-4 hidden rounded-md lg:block" />
                  <span>{experience.title}</span>
                </a>
              ) : (
                <span>{experience.title}</span>
              )}
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

export default Card;
