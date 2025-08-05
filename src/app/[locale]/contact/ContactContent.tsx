"use client";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaFacebookF,
  FaLinkedinIn,
  FaSkype,
  FaLine,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";

type ContactItem = {
  icon: React.ReactNode;
  title: string;
  label: string;
  link?: string;
};

const socialLinks = [
  {
    icon: <FaFacebookF className="text-blue-600" />,
    url: "https://facebook.com/",
    label: "Facebook",
  },
  {
    icon: <SiZalo className="text-blue-400" />,
    url: "https://zalo.me/",
    label: "Zalo",
  },
  {
    icon: <FaLine className="text-green-500" />,
    url: "https://line.me/",
    label: "Line",
  },
  {
    icon: <FaLinkedinIn className="text-sky-700" />,
    url: "https://linkedin.com/in/chinh-tran-65307a373",
    label: "LinkedIn",
  },
  {
    icon: <FaSkype className="text-blue-500" />,
    url: "skype:live:.cid.1234567890abcdef",
    label: "Skype",
  },
];

export default function ContactContent() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const contactInfo: ContactItem[] = [
    {
      icon: <FaPhone className="text-blue-600 dark:text-green-400" />,
      title: t("phoneLabel"),
      label: "+84 345 938 394",
    },
    {
      icon: <FaEnvelope className="text-blue-600 dark:text-red-400" />,
      title: t("emailLabel"),
      label: "tranducchinh20021997@gmail.com",
    },
    {
      icon: <FaGlobe className="text-blue-600 dark:text-blue-400" />,
      title: t("linkedinLabel"),
      label: "linkedin.com/in/chinh-tran-65307a373",
      link: "https://linkedin.com/in/chinh-tran-65307a373",
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-600 dark:text-yellow-400" />,
      title: t("locationLabel"),
      label: "Thanh Xuan, Ha Noi",
    },
    {
      icon: <FaBirthdayCake className="text-blue-600 dark:text-pink-400" />,
      title: t("birthdayLabel"),
      label: "20/02/1997",
    },
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      await emailjs.send(
        "service_r1jzfhq",
        "template_2j04j8g",
        {
          ...form,
          time: new Date().toLocaleString(),
        },
        "aB7SGqNKf66lXcI1W"
      );
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      if (formRef.current) formRef.current.reset();
    } catch (error) {
      console.error("Email sending error:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 md:px-10 py-10"
      >
        <section
          className={`max-w-5xl mx-auto p-6 rounded-lg shadow-lg space-y-10 ${
            theme === "dark"
              ? "bg-zinc-800 text-white"
              : "bg-white text-zinc-900"
          }`}
        >
          {/* Contact Info */}
          <div>
            <h2
              className={`text-2xl font-semibold  border-b  mb-6 pb-2 ${
                theme === "dark"
                  ? "text-blue-400 border-blue-400"
                  : "text-blue-800 border-blue-800"
              }`}
            >
              {t("contactLabel")}
            </h2>
            <ul className="space-y-4 text-sm">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  {item.icon}
                  <span className="font-semibold">{item.title}</span>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2
              className={`text-2xl font-semibold  border-b  mb-6 pb-2 ${
                theme === "dark"
                  ? "text-blue-400 border-blue-400"
                  : "text-blue-800 border-blue-800"
              }`}
            >
              {t("snsLabel")}
            </h2>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
               
                   className={`hover:scale-105 transition-transform p-3 rounded-full ${
                theme === "dark"
                  ? "bg-zinc-200"
                  : "bg-zinc-200"
              }`}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2
              className={`text-2xl font-semibold  border-b  mb-6 pb-2 ${
                theme === "dark"
                  ? "text-blue-400 blue-blue-400"
                  : "text-blue-800 border-blue-800"
              }`}
            >
              {t("formLabel")}
            </h2>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4 text-sm"
            >
              <input
                type="text"
                name="name"
                placeholder={t("formName")}
                required
                onChange={handleChange}
                className={`w-full p-2 rounded ${
                  theme === "dark" ? "bg-zinc-700" : "bg-zinc-100"
                }`}
              />
              <input
                type="email"
                name="email"
                placeholder={t("formEmail")}
                required
                onChange={handleChange}
                className={`w-full p-2 rounded ${
                  theme === "dark" ? "bg-zinc-700" : "bg-zinc-100"
                }`}
              />
              <input
                type="text"
                name="subject"
                placeholder={t("formSubject")}
                required
                onChange={handleChange}
                className={`w-full p-2 rounded ${
                  theme === "dark" ? "bg-zinc-700" : "bg-zinc-100"
                }`}
              />
              <textarea
                name="message"
                placeholder={t("formMessage")}
                rows={4}
                required
                onChange={handleChange}
                className={`w-full p-2 rounded ${
                  theme === "dark" ? "bg-zinc-700" : "bg-zinc-100"
                }`}
              />
              <button
                type="submit"
                disabled={loading}
                className={` hover:bg-blue-600 px-4 py-2 rounded text-white font-semibold ${
                  theme === "dark" ? "bg-blue-400" : "bg-blue-400"
                }`}
              >
                {loading ? "Sending..." : t("formSubmit")}
              </button>
              {success && (
                <p className="text-green-600 font-medium pt-2">
                  {t("formSended")}
                </p>
              )}
            </form>
          </div>
        </section>
      </motion.div>
      <Footer />
    </>
  );
}
