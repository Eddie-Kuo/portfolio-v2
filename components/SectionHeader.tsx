import React from "react";

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="bg-background/60 sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:mx-auto lg:opacity-0">
      <h2 className="text-md font-semibold uppercase tracking-widest text-slate-200 lg:sr-only">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeader;
