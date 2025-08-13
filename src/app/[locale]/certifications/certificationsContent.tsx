"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";

export default function CertificationsContent() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-4 md:px-10 py-10"
      >
        <section className="max-w-5xl mx-auto space-y-12">
          {/* Title */}
          {/*<motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-blue-400 dark:text-blue-400"
          >
            {t("certificationsLabel")}
          </motion.h1>*/}

          {/* Main Content Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col md:flex-row gap-10  p-6 md:p-8 rounded-xl shadow-lg ${
              theme === "dark" ? "bg-zinc-800" : "bg-white"
            }`}
          >
            {/* Left Content */}
            <div
              className={`flex-1 space-y-8 text-sm md:text-base ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {/* Education */}
              <div>
                <h2
                  className={`text-xl font-semibold mb-2 ${
                    theme === "dark" ? "text-blue-400" : "text-blue-800"
                  }`}
                >
                  {t("educationLabel")}
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>{t("education.school")}</strong>
                  </li>
                  <li>{t("education.major")}</li>
                  <li>{t("education.graduation")}</li>
                </ul>
              </div>

              {/* Certifications */}
              <div>
                <h2
                  className={`text-xl font-semibold mb-2 ${
                    theme === "dark" ? "text-blue-400" : "text-blue-800"
                  }`}
                >
                  {t("cerLabel")}
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>{t("certifications.ja")}</strong> JLPT N2
                  </li>
                  <li>
                    <strong>{t("certifications.en")}</strong> TOEIC 500
                  </li>
                </ul>
              </div>
            </div>

            {/* Logo Image */}
            <div className="w-full md:w-80 h-64 md:h-80 relative mx-auto">
              <Image
                src="/images/logo_hust.png"
                alt="HUST Logo"
                fill
                priority
                className="object-contain rounded-lg "
              />
            </div>
          </motion.div>
        </section>
      </motion.div>
      <Footer />
    </>
  );
}
