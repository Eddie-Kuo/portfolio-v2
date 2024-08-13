import React from "react";

function About() {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-md font-semibold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div className="font-light leading-7 text-lightText">
        <p className="mb-4">
          A software engineer based in Austin, Texas with a specialty in the
          JavaScript/TypeScript ecosystem. I enjoy developing pixel-perfect
          solutions that emphasize on delivering an intuitive user experience.
        </p>
        <p className="mb-4">
          My inspiration to pursue this field is accredited towards Apple. I
          vividly remember the twelve year old me getting my hands on my first
          iPhone and navigating through the endless features that sparked a
          fascination in technology that has stayed with me ever since. Today, I
          strive to bring the same experiences to my users. My main focus in
          developing software is to create an exquisite user experience while
          bringing applications to life with aesthetic user interfaces.
        </p>
        <p className="mb-4"></p>
        <p className="mb-4">
          When I&apos;m not at my computer, you can typically find me working
          out, bouldering, hiking with my two dogs (Corgi and Shiba Inu), or
          just casually lounging with my S.O watching some popular shows. If you
          see something you like or would be interested in collaborating on
          something, my door is always open to chat about tech, fitness, or
          life!
        </p>
      </div>
    </>
  );
}

export default About;
