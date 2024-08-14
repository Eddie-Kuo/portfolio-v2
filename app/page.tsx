import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Link from "next/link";

function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="pt-24 lg:w-1/2 lg:py-24">
          {/* about */}
          <section id="about" className="mb-16 md:mb-24 lg:mb-32">
            <About />
          </section>

          {/* experience */}
          <section id="experience" className="mb-16 md:mb-24 lg:mb-32">
            <Experience />
            <Link
              href="Edlan_Kuo_Resume.pdf"
              target="_blank"
              className="group flex gap-2"
            >
              <span className="tracking-wide text-lightText group-hover:text-accent">
                View Full Resume
              </span>
              <div className="text-lightText transition ease-in-out group-hover:translate-x-1 group-hover:text-accent">
                {`=>`}
              </div>
            </Link>
          </section>

          {/* projects */}
          <section id="projects" className="mb-16 md:mb-24 lg:mb-32">
            <Projects />
          </section>

          {/* additional stuff */}
          <section>
            <div>
              <p className="text-sm text-secondaryText">
                Design inspiration credit to {""}
                <a
                  href="https://brittanychiang.com/"
                  className="text-lightText"
                >
                  Brittany Chiang
                </a>{" "}
                &{" "}
                <a
                  href="https://www.instagram.com/mirayatech/"
                  className="text-lightText"
                >
                  Miraya Tech
                </a>
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
