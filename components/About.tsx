import React from "react";

function About() {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-md font-semibold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div className="leading-7 text-lightText">
        <p className="mb-4">
          Hi! My name is Eddie and I&apos;m a software engineer based in Austin,
          Texas with a specialty in the JavaScript/TypeScript ecosystem. I enjoy
          developing pixel perfect solutions that focus heavily on delivering an
          intuitive user experience.
        </p>
        <p className="mb-4">
          My inspiration in what made me pursue this field is accredited towards
          Apple. I still remember the twelve year old me getting my hands on my
          first iPhone and navigating through the endless features that my mind
          couldn&apos;t even fully comprehend at the time.
        </p>
        <p className="mb-4">
          Fast forward to today, I still chase a form of that feeling. Instead
          of chasing the feeling for myself, that feeling has become a core
          principle I strive to bring to my users. Aside from developing
          aesthetic user interfaces, my goal as the developer has been to create
          an exquisite user experience while solving problems that the average
          consumer face through software.
        </p>
        <p className="mb-4">
          While I&apos;m not at my computer, you can typically find me training
          at the gym, bouldering, hiking with my two dogs (Corgi and Shiba Inu),
          or just casually lounging with my S.O watching some popular shows. If
          you see something you like here or would be interested in
          collaborating on something, my door is always open to chat about tech,
          fitness, or life!✌️
        </p>
      </div>
    </>
  );
}

export default About;
