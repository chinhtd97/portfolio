"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import * as Icons from "react-icons/si";
import React, { useEffect, useState } from "react";
import SkillItem from "@/components/SkillItem";
import { useTranslation } from "react-i18next";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiJest,
  SiDocker,
  SiSwagger,
} from "react-icons/si";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";
// Component nhỏ để hiển thị từng icon + label
type SkillIconProps = {
  icon: keyof typeof Icons;
  label: string;
};

function SkillIcon({ icon, label }: SkillIconProps) {
  const IconComponent = Icons[icon];
  return (
    <div className="flex flex-col items-center group transition-transform hover:scale-105">
      <div className="text-3xl sm:text-4xl text-gray-700 dark:text-gray-200">
        <IconComponent />
      </div>
      <span className="text-xs mt-2 text-gray-600 dark:text-gray-400 text-center">
        {label}
      </span>
    </div>
  );
}

export default function AboutContent() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 md:px-10 py-10"
      >
        <section className="max-w-5xl mx-auto space-y-12">
          {/* Tiêu đề chính */}
          {/*<h1
            className={`text-3xl md:text-4xl font-bold text-center ${
              theme === "dark" ? "text-blue-400" : "text-blue-800"
            }`}
          >
            {t("about")}
          </h1>*/}

          {/* Nội dung chính chia cột */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
            {/* Bên trái: thông tin giới thiệu */}
            <div className="flex-1 space-y-4">
              <h2
                className={`text-2xl md:text-2xl font-semibold ${
                  theme === "dark" ? "text-white" : "text-neutral-800"
                }`}
              >
                {t("intro")}
              </h2>
              <p
                className={`leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {t("careerObjective")}
              </p>

              <div className="space-y-2 text-sm">
                <p>
                  <span
                    className={`font-medium ${
                      theme === "dark" ? "text-neutral-200" : "text-neutral-800"
                    }`}
                  >
                    ① CV (English):
                  </span>{" "}
                  <a
                    href="/files/cv-en.pdf"
                    download
                    className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
                  >
                    {t("download")}
                  </a>
                </p>
                <p>
                  <span
                    className={`font-medium ${
                      theme === "dark" ? "text-neutral-200" : "text-neutral-800"
                    }`}
                  >
                    ② 履歴書 (Japanese):
                  </span>{" "}
                  <a
                    href="/files/cv-ja.pdf"
                    download
                    className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
                  >
                    {t("download")}
                  </a>
                </p>
              </div>
            </div>

            {/* Bên phải: ảnh đại diện */}
            <div
              className={`w-52 h-52 md:w-60 md:h-60 relative rounded-full overflow-hidden border-4 shadow-lg shrink-0 ${
                theme === "dark" ? "border-zinc-600" : "border-zinc-300"
              }`}
            >
              <Image
                src="/images/avt.jpg"
                alt="My photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* THÊM SECTION: Tech Stack Icons */}

          <div className="pt-0 border-zinc-300 dark:border-zinc-700">
            {/*<h2
              className={`text-4xl pb-10 font-bold mb-6 text-center ${
                theme === "dark" ? "text-blue-400" : "text-blue-800"
              }`}
            >
              {t("skillLabel")}
            </h2>*/}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
              {/* Next.js */}
              <SkillItem
                icon={<SiNextdotjs className="text-black dark:text-white" />}
                label="Next.js"
              />
              {/* React */}
              <SkillItem
                icon={<SiReact className="text-sky-500" />}
                label="React"
              />
              {/* TypeScript */}
              <SkillItem
                icon={<SiTypescript className="text-blue-600" />}
                label="TypeScript"
              />
              {/* Tailwind */}
              <SkillItem
                icon={<SiTailwindcss className="text-sky-400" />}
                label="TailwindCSS"
              />
              {/* Redux */}
              <SkillItem
                icon={<SiRedux className="text-purple-600" />}
                label="Redux"
              />
              {/* NestJS */}
              <SkillItem
                icon={<SiNestjs className="text-rose-600" />}
                label="NestJS"
              />
              {/* PostgreSQL */}
              <SkillItem
                icon={<SiPostgresql className="text-blue-800" />}
                label="PostgreSQL"
              />
              {/* MongoDB */}
              <SkillItem
                icon={<SiMongodb className="text-green-600" />}
                label="MongoDB"
              />
              {/* Prisma */}
              <SkillItem
                icon={<SiPrisma className="text-gray-800 dark:text-white" />}
                label="Prisma"
              />
              {/* Jest */}
              <SkillItem
                icon={<SiJest className="text-rose-500" />}
                label="Jest"
              />
              {/* Docker */}
              <SkillItem
                icon={<SiDocker className="text-sky-500" />}
                label="Docker"
              />
              {/* Swagger */}
              <SkillItem
                icon={<SiSwagger className="text-yellow-500" />}
                label="Swagger"
              />
            </div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </>
  );
}
