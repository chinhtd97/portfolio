"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiJavascript,
  SiWordpress,
  SiOpenai,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiWebflow,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import {
  FaNotesMedical,
  FaXRay,
  FaServer,
  FaHospitalSymbol,
} from "react-icons/fa";
import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";

export default function ExperienceContent() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const experiences = [
    {
      title: t("job1.role"),
      company: t("job1.company"),
      period: t("job1.duration"),
      icons: [
        <SiReact key="react" className="text-sky-500" />,
        <SiNestjs key="nestjs" className="text-red-500" />,
        <SiMongodb key="mongo" className="text-green-600" />,
        <SiPostgresql key="pg" className="text-blue-700" />,
        <SiDocker key="docker" className="text-blue-400" />,
      ],
      tasks: [
        t("job1.description1"),
        t("job1.description2"),
        t("job1.description3"),
        t("job1.description4"),
        t("job1.description5"),
      ],
    },
    {
      title: t("job2.role"),
      company: t("job2.company"),
      period: t("job2.duration"),
      icons: [
        <SiOpenai key="chatgpt" className="text-emerald-500" />,
        <SiAdobepremierepro key="premiere" className="text-purple-600" />,
        <SiAdobephotoshop key="photoshop" className="text-blue-600" />,
        <SiWebflow key="ladipage" className="text-indigo-500" />,
      ],
      tasks: [
        t("job2.description1"),
        t("job2.description2"),
        t("job2.description3"),
        t("job2.description4"),
      ],
    },
    {
      title: t("job3.role"),
      company: t("job3.company"),
      period: t("job3.duration"),
      icons: [
        <SiWordpress key="wp" className="text-blue-600" />,
        <SiJavascript key="js" className="text-yellow-500" />,
        <SiHtml5 key="html" className="text-orange-500" />,
        <SiCss3 key="css" className="text-blue-500" />,
      ],
      tasks: [
        t("job3.description1"),
        t("job3.description2"),
        t("job3.description3"),
        t("job3.description4"),
      ],
    },
    {
      title: t("job4.role"),
      company: t("job4.company"),
      period: t("job4.duration"),
      icons: [
        <FaNotesMedical key="emr" className="text-green-500" />,
        <FaXRay key="pacs" className="text-blue-500" />,
        <FaServer key="system" className="text-gray-600" />,
        <FaHospitalSymbol key="healthcare" className="text-red-600" />,
      ],
      tasks: [
        t("job4.description1"),
        t("job4.description2"),
        t("job4.description3"),
        t("job4.description4"),
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-6 md:p-10 font-sans min-h-screen">
        <section className="max-w-5xl mx-auto space-y-20 relative">

          {/* Timeline vertical line */}
          <div
            className={`absolute left-[18px] md:left-1/2 transform md:-translate-x-1/2 top-20 bottom-0 w-[3px] bg-gradient-to-b from-blue-400 via-zinc-400 to-transparent rounded-full shadow-sm`}
          />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative w-full md:w-[48%] ${
                  isLeft ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
                }`}
              >
                {/* Circle dot on the timeline */}
                <div
                  className={`absolute top-4 w-4 h-4 rounded-full border-4 z-10 ${
                    theme === "dark"
                      ? "bg-blue-500 border-zinc-900"
                      : "bg-blue-500 border-white"
                  } ${
                    isLeft
                      ? "left-[-34px] md:left-[-42px]"
                      : "left-[-34px] md:left-[calc(100%+10px)]"
                  }`}
                ></div>

                <div
                  className={`border rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 hover:scale-[1.01] ${
                    theme === "dark"
                      ? "bg-zinc-900 border-zinc-700"
                      : "bg-white border-zinc-200"
                  }`}
                >
                  <div className="flex flex-col gap-1 mb-3">
                    <h2
                      className={`text-xl md:text-2xl font-semibold ${
                        theme === "dark" ? "text-blue-400" : "text-blue-800"
                      }`}
                    >
                      {exp.title}
                    </h2>
                    <span
                      className={`text-sm ${
                        theme === "dark" ? "text-zinc-400" : "text-zinc-500"
                      }`}
                    >
                      {exp.company} | {exp.period}
                    </span>
                  </div>

                  {exp.icons.length > 0 && (
                    <div className="flex flex-wrap gap-2 text-2xl mb-4">
                      {exp.icons}
                    </div>
                  )}

                  <ul
                    className={`list-disc list-inside text-sm leading-relaxed space-y-2 pl-2 ${
                      theme === "dark" ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    {exp.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </section>
      </div>
      <Footer />
    </>
  );
}
