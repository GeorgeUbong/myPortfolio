import {
  Github,
  ExternalLink,
  Linkedin,
  Twitter,
} from "lucide-react";

import TextCursor from "../components/TextCursor";
import DecryptedText from "../components/textdec";
import profile from "../assets/me.jpg";

import meds from "../assets/meds.png";
import temp from "../assets/temp.png";
import art from "../assets/art.png";
import bg from "../assets/bg.png";

const maker = {
  name: "George Ubongabasi Daniel",
  job: "UIUX/Developer",
  about:
    "I craft modern, full-stack digital experiences that balance clean visual design with resilient software architecture. From building intuitive user interfaces to engineering offline-first applications and mobile platforms, I turn complex problems into sleek, usable tools. Driven by a passion for detail and continuous learning, I build products designed to be both highly functional and engaging to use.",
};

const projects = [
  {
    id: 1,
    name: "HealthDB",
    description:
      "A comprehensive hospital management system that simplifies patient records, personal data management, and healthcare administration.",
    image: meds,
    link: "https://health-database-app.vercel.app/Landing",
  },
  {
    id: 2,
    name: "ArtInstitute",
    description:
      "An immersive art discovery platform that curates museum collections and enables extended browsing without interruption, powered by the Chicago Art API.",
    image: art,
    link: "https://art-institute.vercel.app/",
  },
  {
    id: 3,
    name: "Temperature Sensor App",
    description:
      "Real-time temperature monitoring application with visual indicators for sensor thresholds, providing instant alerts for anomalies.",
    image: temp,
    link: "#",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/ubongabasi-george-a33731234/",
  },
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/GeorgeUbong",
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    link: "https://twitter.com/",
  },
];

export default function Hero() {
  return (
    <div
      className="min-h-screen text-gray-700"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background overlay */}
      <div className="fixed inset-0 bg-white/10 pointer-events-none z-0" />

      <main className="relative z-10">
        {/* ================= HERO SECTION ================= */}
        <section
          id="home"
          className="
            min-h-screen
            flex
            flex-col
            lg:flex-row
            gap-6
            md:gap-8
            lg:gap-12
            px-4
            sm:px-6
            md:px-8
            lg:px-12
            py-8
            md:py-10
            lg:py-0
            max-w-7xl
            mx-auto
          "
        >
          {/* ================= LEFT PROFILE (STICKY ON DESKTOP) ================= */}
          <div
            className="
              w-full
              lg:w-1/2
              lg:sticky
              lg:top-0
              lg:h-screen
              flex
              flex-col
              justify-center
              py-8
              md:py-12
              lg:py-30
              order-1
              lg:order-none
            "
          >
            <TextCursor text="🌟">
              <div className="max-w-md mx-auto lg:mx-0">
                {/* NAME */}
                <h1
                  className="
                    text-3xl
                    sm:text-4xl
                    md:text-6xl
                    lg:text-[42px]
                    font-extrabold
                    leading-tight
                    lg:leading-[0.95]
                    tracking-widest
                  "
                  style={{
                    color: "#2428e8",
                    fontFamily: "'Titan One', cursive",
                  }}
                >
                  {maker.name}
                </h1>

                {/* JOB TITLE */}
                <h2
                  className="
                    mt-3
                    md:mt-4
                    text-base
                    sm:text-lg
                    md:text-2xl
                    font-medium
                  "
                  style={{
                    color: "#2428e8",
                  }}
                >
                  <DecryptedText text={maker.job} />
                </h2>

                {/* PROFILE IMAGE */}
                <div className="mt-6 md:mt-8">
                  <div
                    className="
                      w-40
                      h-40
                      sm:w-24
                      sm:h-24
                      md:w-40
                      md:h-40
                      rounded-full
                      overflow-hidden
                      border-[3px]
                      p-[2px]
                      bg-white
                      flex-shrink-0
                    "
                    style={{
                      borderColor: "#2428e8",
                    }}
                  >
                    <img
                      src={profile}
                      alt="An image of George Ubongabasi "
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* ABOUT */}
                <p
                  className="
                    mt-4
                    md:mt-5
                    text-m
                    sm:text-sm
                    md:text-[18px]
                    leading-relaxed
                    md:leading-[1.5]
                    max-w-full
                    lg:max-w-[390px]
                    text-gray-600
                  "
                >
                  {maker.about}
                </p>

                {/* SOCIAL LINKS */}
                <div className="flex flex-wrap gap-2 md:gap-3 mt-5 md:mt-7">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          items-center
                          gap-1.5
                          md:gap-2
                          px-2.5
                          md:px-3
                          py-1
                          md:py-1.5
                          rounded-full
                          border
                          text-[14px]
                          sm:text-[18px]
                          font-medium
                          transition-all
                          duration-300
                          hover:bg-[#2428e8]
                          hover:text-white
                          hover:-translate-y-0.5
                          whitespace-nowrap
                        "
                        style={{
                          borderColor: "#8b8ff5",
                          color: "#2428e8",
                          backgroundColor: "rgba(255,255,255,0.45)",
                        }}
                      >
                        <span className="hidden sm:inline">{social.name}</span>
                        <span className="sm:hidden">{social.name.split(" ")[0]}</span>
                        <Icon size={12} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </TextCursor>
          </div>

          {/* ================= RIGHT PROJECTS (SCROLLABLE ON ALL SIZES) ================= */}
          <div
            id="projects"
           className="
  w-full
  lg:w-1/2
  py-8
  md:py-12
  lg:py-10
  order-2
  lg:order-none
  overflow-y-auto
  lg:max-h-screen
  lg:pr-4
  [scrollbar-width:none]
  [-ms-overflow-style:none]
  [&::-webkit-scrollbar]:hidden
"
          >
            {/* PROJECT TITLE */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center gap-3">
                <h3
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  font-bold
                  tracking-tight
                "
                style={{
                  color: "#2428e8",
                }}
              >
                Projects
              </h3>
              <p  className="
                  text-2xl
                  sm:text-3xl
                  md:text-xl
                  font-bold
                  tracking-tight
                "
                 style={{
                  color: "#F29100",
                }}> ( {projects.length} )</p>
              </div>
              <div 
                className="h-1 w-16 mt-3 rounded-full"
                style={{ backgroundColor: "#F29100" }}
              ></div>
            </div>

            {/* PROJECT CARDS */}
            <div className="space-y-3 md:space-y-4">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="
                    group
                    rounded-lg
                    overflow-hidden
                    bg-white/90
                    backdrop-blur-sm
                    border
                    border-gray-200/50
                    shadow-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    md:hover:shadow-xl
                  "
                >
                  {/* PROJECT IMAGE */}
                  <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* PROJECT CONTENT */}
                  <div className="p-3 md:p-4">
                    {/* TITLE */}
                    <h4
                      className="
                        text-sm
                        sm:text-base
                        md:text-lg
                        font-bold
                        mb-2
                      "
                      style={{
                        color: "#2428e8",
                      }}
                    >
                      {project.name}
                    </h4>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        text-[10px]
                        sm:text-[11px]
                        md:text-xs
                        leading-relaxed
                        md:leading-[1.45]
                        text-gray-600
                        max-w-full
                        mb-3
                      "
                    >
                      {project.description}
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-wrap gap-2">
                      {/* VIEW LIVE */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-1
                          px-3
                          py-1.5
                          rounded-full
                          text-[9px]
                          sm:text-[10px]
                          font-semibold
                          text-white
                          transition-all
                          duration-300
                          hover:scale-105
                          active:scale-95
                        "
                        style={{
                          backgroundColor: "#F29100",
                        }}
                      >
                        <span>View Live</span>
                        <ExternalLink size={11} />
                      </a>

                      {/* GITHUB */}
                      <a
                        href="https://github.com/GeorgeUbong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-1
                          px-3
                          py-1.5
                          rounded-full
                          text-[9px]
                          sm:text-[10px]
                          font-medium
                          border
                          transition-all
                          duration-300
                          hover:bg-[#2428e8]
                          hover:text-white
                          hover:border-[#2428e8]
                        "
                        style={{
                          borderColor: "#8b8ff5",
                          color: "#2428e8",
                          backgroundColor: "rgba(255,255,255,0.7)",
                        }}
                      >
                        <span>View on GitHub</span>
                        <Github size={11} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer
          className="
            py-6
            md:py-8
            px-4
            sm:px-6
            md:px-8
            lg:px-12
            text-center
            border-t
            border-gray-200/70
            max-w-7xl
            mx-auto
          "
        >
          <p className="text-xs md:text-sm text-gray-600">
            © 2026 Ubongabasi George. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}