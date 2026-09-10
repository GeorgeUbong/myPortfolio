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
    link: "https://www.linkedin.com/",
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

      {/* Navbar 
       <div className="relative z-50">
        <Navbar />
      </div>
      */}
     

      <main className="relative z-10">
        {/* ================= HERO ================= */}
        <section
          id="home"
          className="
            min-h-screen
            flex
            flex-col
            lg:flex-row
            gap-10
            lg:gap-16
            px-6
            md:px-10
            lg:px-16
            py-8
            max-w-7xl
            mx-auto
          "
        >
          {/* ================= LEFT PROFILE ================= */}
          <div
            className="
              w-full
              lg:w-[46%]
              lg:sticky
              lg:top-0
              lg:h-screen
              flex
              flex-col
              justify-center
              py-8
            "
          >
            <TextCursor text="🤩">
              <div className="max-w-md">
                {/* NAME */}
                <h1
                  className="
                    text-4xl
                    md:text-5xl
                    lg:text-[42px]
                    font-extrabold
                    leading-[0.95]
                    tracking-tight
                  "
                  style={{
                    color: "#2428e8",
                  }}
                >
                  {maker.name}
                </h1>

                {/* JOB */}
                <h2
                  className="
                    mt-4
                    text-lg
                    md:text-xl
                    font-medium
                  "
                  style={{
                    color: "#2428e8",
                  }}
                >
                  <DecryptedText text={maker.job} />
                </h2>

                {/* PROFILE IMAGE */}
                <div className="mt-8">
                  <div
                    className="
                      w-24
                      h-24
                      md:w-28
                      md:h-28
                      rounded-full
                      overflow-hidden
                      border-[3px]
                      p-[2px]
                      bg-white
                    "
                    style={{
                      borderColor: "#2428e8",
                    }}
                  >
                    
                      

                     

                      <img
                        src={profile}
                        alt="George Ubongabasi"
                        className="w-full h-full object-cover rounded-full"
                      />
                    

                    <div
                      className="
                        w-full
                        h-full
                        rounded-full
                        bg-gray-200
                        flex
                        items-center
                        justify-center
                        text-xs
                        text-gray-500
                      "
                    >
                      PHOTO
                    </div>
                  </div>
                </div>

                {/* ABOUT */}
                <p
                  className="
                    mt-5
                    text-[12px]
                    md:text-[13px]
                    leading-[1.5]
                    max-w-[390px]
                    text-gray-600
                  "
                >
                  {maker.about}
                </p>

                {/* SOCIAL LINKS */}
                <div className="flex flex-wrap gap-3 mt-7">
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
                          gap-2
                          px-3
                          py-1.5
                          rounded-full
                          border
                          text-[10px]
                          font-medium
                          transition-all
                          duration-300
                          hover:bg-[#2428e8]
                          hover:text-white
                          hover:-translate-y-0.5
                        "
                        style={{
                          borderColor: "#8b8ff5",
                          color: "#2428e8",
                          backgroundColor:
                            "rgba(255,255,255,0.45)",
                        }}
                      >
                        <span>{social.name}</span>
                        <Icon size={12} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </TextCursor>
          </div>

          {/* ================= PROJECTS ================= */}
          <div
            id="projects"
            className="
              w-full
              lg:w-[54%]
              py-8
              lg:py-10
            "
          >
            {/* PROJECT TITLE */}
            <div className="mb-6">
              <h3
                className="
                  text-3xl
                  md:text-4xl
                  font-titan

                "
                style={{
                  color: "#2428e8",
                }}
              >
                Projects
              </h3>
            </div>

            {/* PROJECT CARDS */}
            <div className="space-y-3">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="
                    group
                    rounded-lg
                    overflow-hidden
                    bg-white/90
                    border
                    border-gray-200
                    shadow-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  <div className="p-3 md:p-4">
                    {/* TITLE */}
                    <h4
                      className="
                        text-sm
                        md:text-base
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
                        md:text-[11px]
                        leading-[1.45]
                        text-gray-500
                        max-w-[520px]
                      "
                    >
                      {project.description}
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {/* LIVE */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-1
                          px-3
                          py-1
                          rounded-full
                          text-[9px]
                          font-semibold
                          text-white
                          transition-all
                          duration-300
                          hover:scale-105
                        "
                        style={{
                          backgroundColor: "#F29100",
                        }}
                      >
                        <span>View Live</span>
                        <ExternalLink size={10} />
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
                          py-1
                          rounded-full
                          text-[9px]
                          font-medium
                          border
                          transition-all
                          duration-300
                          hover:bg-[#2428e8]
                          hover:text-white
                        "
                        style={{
                          borderColor: "#8b8ff5",
                          color: "#2428e8",
                          backgroundColor:
                            "rgba(255,255,255,0.7)",
                        }}
                      >
                        <span>View on GitHub</span>
                        <Github size={10} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
       
        {/* ================= FOOTER ================= */}
        <footer
          className="
            py-6
            px-6
            text-center
            border-t
            border-gray-200/70
          "
        >
          <p className="text-xs text-gray-500">
            © 2026 Ubongabasi George. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}