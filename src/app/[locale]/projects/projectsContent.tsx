"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaDocker } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import ImagePopup from "@/components/ImagePopup";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { defaultLocale, Locale } from "@/i18n/settings";
import Footer from "@/components/Footer";

type Project = {
  title: string;
  stack: string;
  demo?: string;
  github: {
    backend?: string;
    frontend?: string;
  };
  docker?: string;
  description: string[];
  image: string;
};

export default function ProjectsContent() {
  const baseUrl = window.location.origin;
  const pathname = usePathname();
  const currentLang = (pathname.split("/")[1] as Locale) || defaultLocale;
  const { t } = useTranslation();
  const { theme } = useTheme();
  const projects: Project[] = [
    {
      title: t("project1.title"),
      stack: t("project1.tech"),
      demo: "https://mobile-shop-phi.vercel.app",
      github: {
        backend: "https://github.com/Litch9x/mobile-shop-api.git",
        frontend: "https://github.com/Litch9x/mobile-shop.git",
      },
      docker: "Dockerized",
      description: [
        t("project1.description1"),
        t("project1.description2"),
        t("project1.description3"),
        t("project1.description4"),
        t("project1.description5"),
      ],
      image: "/images/mobi-shop-demo.jpg",
    },
    {
      title: t("project2.title"),
      stack: t("project2.tech"),
      github: {
        backend: "https://github.com/Litch9x/food-delivery-api.git",
      },
      description: [
        t("project2.description1"),
        t("project2.description2"),
        t("project2.description3"),
        t("project2.description4"),
      ],
      image: "/images/food-delivery-demo.jpg",
    },
    {
      title: t("project3.title"),
      stack: t("project3.tech"),
      demo: `${baseUrl}/${currentLang}/about`,
      github: {
        frontend: "https://github.com/Litch9x/portfolio",
      },
      description: [
        t("project3.description1"),
        t("project3.description2"),
        t("project3.description3"),
        t("project3.description4"),
      ],
      image: "/images/portfolio-demo.jpg",
    },
  ];
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-10"
      >
        <section className="max-w-5xl mx-auto space-y-12">
          {/*<h1 className="text-4xl font-bold text-center text-neutral-800 dark:text-white mb-8">
            {t("projectsLabel")}
          </h1>*/}

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={` rounded-xl shadow-md p-6 md:flex md:items-start md:justify-between gap-6 ${
                theme === "dark" ? "bg-zinc-800" : "bg-white"
              }`}
            >
              <div className="flex-1 space-y-4">
                <h3
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-blue-400" : " text-blue-800"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm  ${
                    theme === "dark" ? "text-gray-300" : " text-gray-600"
                  }`}
                >
                  <strong>{t("project.techLabel")}: </strong>
                  {project.stack}
                </p>

                <ul
                  className={`list-disc list-inside text-sm space-y-1  ${
                    theme === "dark" ? "text-neutral-200" : " text-neutral-700"
                  }`}
                >
                  {project.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-4 pt-2 text-sm">
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="text-blue-500 hover:underline flex items-center gap-1"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </Link>
                  )}
                  {project.github.frontend && (
                    <Link
                      href={project.github.frontend}
                      target="_blank"
                      className={`hover:underline flex items-center gap-1  ${
                        theme === "dark" ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      <FaGithub /> Frontend Code
                    </Link>
                  )}
                  {project.github.backend && (
                    <Link
                      href={project.github.backend}
                      target="_blank"
                      className={`hover:underline flex items-center gap-1  ${
                        theme === "dark" ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      <FaGithub /> Backend Code
                    </Link>
                  )}
                  {project.docker && (
                    <div
                      className={`flex items-center gap-1 ${
                        theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                      }`}
                    >
                      <FaDocker /> Dockerized
                    </div>
                  )}
                </div>
              </div>
              <div
                className={`hidden md:block mt-6 md:mt-0 w-85 h-40 md:w-85 md:h-40 relative rounded-md overflow-hidden shadow-md border${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                }`}
              >
                <ImagePopup
                  src={project.image}
                  alt={project.title + " screenshot"}
                />
              </div>
            </motion.div>
          ))}
        </section>
      </motion.div>
      <Footer />
    </>
  );
}
