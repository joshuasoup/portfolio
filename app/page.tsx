"use client";
import { ExperienceItem } from "./components/ExperienceItem";
import ClickSpark from "../components/ClickSpark.jsx";
import StickerPeel from "../components/StickerPeel.jsx";
import Image from "next/image";
export default function Home() {
  return (
    <ClickSpark
      sparkColor="#000000"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div
        className="min-h-screen w-full bg-zinc-50 font-sans text-zinc-900"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <StickerPeel
          imageSrc="/images/JS.png"
          width={150}
          rotate={10}
          peelBackHoverPct={10}
          peelBackActivePct={40}
          shadowIntensity={0.6}
          lightingIntensity={0.09}
          className="hidden md:block top-10 right-10 z-50"
        />
        <main className="mx-auto max-w-3xl px-4 md:px-6 py-8 md:py-16">
          <header className="mb-8 md:mb-8">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="flex-1 min-w-0 md:max-w-[calc(100%-220px)]">
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight fade-in">
                  Josh Souphanthong
                </h1>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-sm md:text-base fade-in fade-in-delay-1">
                  <span>
                    Computer Science at{" "}
                    <a
                      href="https://carleton.ca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:text-zinc-700"
                    >
                      Carleton
                    </a>
                  </span>
                  <img
                    src="/images/carleton.png"
                    alt="Carleton University"
                    className="h-4 w-auto"
                  />
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm fade-in fade-in-delay-2">
                  <a
                    className="underline underline-offset-4 hover:text-zinc-700"
                    href="mailto:joshuasouphanthong@carleton.ca"
                  >
                    email
                  </a>
                  <span className="text-zinc-400">•</span>
                  <a
                    className="underline underline-offset-4 hover:text-zinc-700"
                    href="https://github.com/joshuasoup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github
                  </a>
                  <span className="text-zinc-400">•</span>
                  <a
                    className="underline underline-offset-4 hover:text-zinc-700"
                    href="https://www.linkedin.com/in/joshua-souphanthong/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin
                  </a>
                  <span className="text-zinc-400">•</span>
                  <a
                    className="underline underline-offset-4 hover:text-zinc-700"
                    href="/Souphanthong_Joshua_2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    cv
                  </a>
                </div>

                <div className="mt-6 md:mt-8 fade-in fade-in-delay-3">
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                    Now
                  </p>
                  <ul className="mt-1 space-y-2">
                    <li className="flex items-start md:items-center gap-3">
                      <span className="relative inline-flex h-2 w-2 shrink-0 mt-1.5 md:mt-0">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-40 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                      </span>
                      <p className="text-sm md:text-base leading-relaxed">
                        Software engineering at{" "}
                        <a
                          href="https://cloverlabs.ai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-2 underline-offset-4 decoration-red-400 hover:decoration-red-500"
                        >
                          Clover Labs
                        </a>
                      </p>
                    </li>
                    <li className="flex items-start md:items-center gap-3">
                      <span className="relative inline-flex h-2 w-2 shrink-0 mt-1.5 md:mt-0">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                      </span>
                      <p className="text-sm md:text-base leading-relaxed">
                        Building{" "}
                        <a
                          href="https://trylumi.ca/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-2 underline-offset-4 decoration-blue-400 hover:decoration-blue-500"
                        >
                          Lumi
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:flex shrink-0 items-center justify-center fade-in fade-in-delay-1">
                <Image
                  src="/me.jpeg"
                  alt="Josh Souphanthong"
                  width={144}
                  height={144}
                  className="rounded-full object-cover w-24 h-24 md:w-36 md:h-36"
                />
              </div>
            </div>
          </header>

          <section
            aria-labelledby="about-heading"
            className="mb-8 md:mb-8 fade-in fade-in-delay-4"
          >
            <p className="mt-3 text-sm md:text-base leading-6 md:leading-7 text-zinc-700">
              I'm a second-year computer science student who enjoys building
              things that have a positive impact. I love trying new things
              whether it's food, sports, places, and I'm currently getting into
              rock climbing! I'm always open to connecting so feel free to
              reachout or connect with me!
            </p>
          </section>

          <section
            aria-labelledby="experience-heading"
            className="mb-8 md:mb-8"
          >
            <h2
              id="experience-heading"
              className="text-lg md:text-xl font-semibold fade-in fade-in-delay-5"
            >
              Journey
            </h2>
            <p className="text-sm md:text-base text-zinc-600 fade-in fade-in-delay-5">
              What I've learned and where I've been.
            </p>
            <div className="flex flex-col w-full gap-0 mt-2">
              <div className="fade-in fade-in-delay-5">
                <ExperienceItem
                  name="Clover Labs"
                  logo="/images/companies/clover-labs/logo.png"
                  label="Software Engineer Intern"
                  link="https://cloverlabs.ai"
                  backgroundImage="/images/companies/clover-labs/bg.png"
                />
              </div>
              <div className="fade-in fade-in-delay-6">
                <ExperienceItem
                  name="Laroye AI"
                  logo="/images/companies/laroye-ai/logo.png"
                  label="Software Engineer Intern"
                  link="https://laroye.ai"
                  backgroundImage="/images/companies/laroye-ai/bg.png"
                />
              </div>
              <div className="fade-in fade-in-delay-7">
                <ExperienceItem
                  name="Social Coffee & Tea Co."
                  logo="/images/companies/social-coffee/logo.png"
                  label="Full-stack Developer"
                  link="https://socialcoffee.com"
                  backgroundImage="/images/companies/social-coffee/bg.png"
                />
              </div>
            </div>
          </section>
          <section aria-labelledby="projects-heading" className="mb-8 md:mb-8">
            <h2
              id="projects-heading"
              className="text-lg md:text-xl font-semibold fade-in fade-in-delay-5"
            >
              Projects
            </h2>
            <p className="text-sm md:text-base text-zinc-600 fade-in fade-in-delay-5">
              Things I've built
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="fade-in fade-in-delay-6">
                <a
                  href="https://github.com/joshuasoup/Clear-Health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="rounded-lg bg-zinc-900 text-white relative overflow-hidden aspect-video transition-transform duration-300 group-hover:scale-[1.03] cursor-pointer">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/videos/clearhealth.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300"></div>
                  </div>
                </a>
                <div className="mt-3">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="text-sm md:text-base font-semibold">
                      ClearHealth
                    </h4>
                    <span className="text-xs text-zinc-500">2024</span>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-600">
                    An AI chatbot for families navigating medical reports. I
                    built this after struggling to understand my grandma's
                    cancer diagnosis.
                  </p>
                </div>
              </div>

              <div className="fade-in fade-in-delay-7">
                <a
                  href="https://github.com/joshuasoup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="rounded-lg bg-zinc-900 text-white relative overflow-hidden aspect-video transition-transform duration-300 group-hover:scale-[1.03] cursor-pointer">
                    <Image
                      src="/images/courseflow.png"
                      alt="CourseFlow"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300"></div>
                  </div>
                </a>
                <div className="mt-3">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="text-sm md:text-base font-semibold">
                      CourseFlow
                    </h4>
                    <span className="text-xs text-zinc-500">2024</span>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-600">
                    Turns course syllabi into calendar events automatically.
                    Parses deadlines and assignments because I kept missing
                    them.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-8 md:mt-12 border-t border-zinc-200 pt-4 md:pt-6 text-xs md:text-sm text-zinc-600 fade-in fade-in-delay-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p>© 2025 Joshua Souphanthong</p>
              <div className="flex items-center gap-3 md:gap-4 text-zinc-600">
                <a
                  href="mailto:joshuasouphanthong@carleton.ca"
                  aria-label="Email"
                  title="Email"
                  className="hover:text-zinc-800 transition-transform hover:scale-110"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m22 6-8.97 6.427a2 2 0 0 1-2.06 0L2 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/joshuasoup"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className="hover:text-zinc-800 transition-transform hover:scale-110"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 22v-3.1a3.37 3.37 0 0 0-.94-2.6c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18.5 5.5a5.07 5.07 0 0 0-.09-3.64S17.17 1.5 15 3a13.38 13.38 0 0 0-6 0C6.83 1.5 5.59 1.86 5.59 1.86A5.07 5.07 0 0 0 5.5 5.5 5.44 5.44 0 0 0 3.5 9.3c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.9V22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/joshua-souphanthong/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="hover:text-zinc-800 transition-transform hover:scale-110"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 11v5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 8h.01"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16v-3a2 2 0 1 1 4 0v3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="/Souphanthong_Joshua_2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CV"
                  title="CV"
                  className="hover:text-zinc-800 transition-transform hover:scale-110"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 2v6h6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 13h8M8 17h5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </ClickSpark>
  );
}
