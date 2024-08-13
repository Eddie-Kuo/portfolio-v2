import React from "react";

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 className="text-md font-semibold uppercase tracking-widest text-slate-200 lg:sr-only">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeader;
