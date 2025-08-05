"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Code, Globe, Sparkles } from "lucide-react"; // ✅ optional icon set
import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";

export default function SkillContent() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-12"
      >
        {/* Title */}
        {/*<h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400">
          {t("skillLabel")}
        </h1>*/}

        {/* Technical Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={` p-6 md:p-8 rounded-xl shadow-md space-y-4 ${
            theme === "dark" ? "bg-zinc-800" : "bg-white"
          }`}
        >
          <div
            className={`flex items-center gap-2 text-xl font-semibold ${
              theme === "dark" ? "text-blue-400" : "text-blue-800"
            }`}
          >
            <Code size={22} /> {t("skillLabel.tech")}
          </div>
          <ul
            className={`list-disc list-inside space-y-2text-sm md:text-base ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <li>
              <strong>{t("skillLabel.frontend")}: </strong>{" "}
              {t("skill.frontend")}
            </li>
            <li>
              <strong>{t("skillLabel.backend")}: </strong> {t("skill.backend")}
            </li>
            <li>
              <strong>{t("skillLabel.database")}: </strong>{" "}
              {t("skill.database")}
            </li>
            <li>
              <strong>{t("skillLabel.test")}: </strong> {t("skill.test")}
            </li>
            <li>
              <strong>{t("skillLabel.devops")}: </strong> {t("skill.devops")}
            </li>
            <li>
              <strong>{t("skillLabel.doc")}: </strong>
              {t("skill.doc")}
            </li>
            <li>
              <strong>{t("skillLabel.ai")}: </strong>
              {t("skill.ai")}
            </li>
          </ul>
        </motion.div>

        {/* Language Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`  p-6 md:p-8 rounded-xl shadow-md space-y-4 ${
            theme === "dark" ? "bg-zinc-800" : "bg-white"
          }`}
        >
          <div
            className={`flex items-center gap-2 text-xl font-semibold ${
              theme === "dark" ? "text-blue-400" : "text-blue-800"
            }`}
          >
            <Globe size={22} /> {t("skillLabel.lang")}
          </div>
          <ul
            className={`list-disc list-inside space-y-2 text-sm md:text-base ${
              theme === "dark" ? "text-gray-200" : "text-gray-800 "
            }`}
          >
            <li>
              <strong>{t("skillLabel.ja")}: </strong> {t("skill.ja")}
            </li>
            <li>
              <strong>{t("skillLabel.en")}: </strong> {t("skill.en")}
            </li>
          </ul>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`p-6 md:p-8 rounded-xl shadow-md space-y-4 ${
            theme === "dark" ? "bg-zinc-800" : "bg-white"
          }`}
        >
          <div
            className={`flex items-center gap-2 text-xl font-semibold ${
              theme === "dark" ? "text-blue-400" : "text-blue-800"
            }`}
          >
            <Sparkles size={22} /> {t("skillLabel.other")}
          </div>
          <ul
            className={`list-disc list-inside space-y-2 text-sm md:text-base ${
              theme === "dark" ? "text-gray-200" : "text-gray-800 "
            }`}
          >
            <li>{t("skill.other1")}</li>
            <li>{t("skill.other2")}</li>
            <li>{t("skill.other3")}</li>
          </ul>
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
}
