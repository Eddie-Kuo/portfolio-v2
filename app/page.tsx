import About from "./components/about";
import Header from "./components/header";

function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl bg-slate-800 px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="pt-24 lg:w-1/2 lg:py-24">
          {/* about */}
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-40 lg:scroll-mt-24"
          >
            <About />
          </section>

          {/* experience */}
          <section
            id="experience"
            className="mb-16 h-[700px] scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            Experience
          </section>

          {/* projects */}
          <section
            id="projects"
            className="lg:scroll-mt-24] mb-16 h-[750px] scroll-mt-16 md:mb-24 lg:mb-36"
          >
            Projects
          </section>

          {/* additional stuff */}
          <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            Tech Stack
          </section>
          <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            Contact
          </section>
          <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            Credit for inspo
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
