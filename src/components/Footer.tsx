"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaLinkedinIn, FaSkype, FaGithub } from "react-icons/fa";
import { SiZalo, SiLine } from "react-icons/si"; // Cần thêm icon đặc thù
import { useTheme } from "next-themes";

export default function Footer() {
  //const { t } = useTranslation(undefined, { useSuspense: false });
  const { theme } = useTheme();

  return (
    <footer
      className={` py-8 px-4 mt-16 border-t   ${
        theme === "dark"
          ? "bg-gray-900 border-gray-700"
          : "bg-gray-100 border-gray-200"
      }`}
    >
      <div
        className={` max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-sm ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {/* Left: Copyright */}
        <div className="text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Tran Duc Chinh.{" "}
            all_rights_reserved
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end gap-4">
          <Link
            href="https://www.facebook.com/nicknd93/"
            target="_blank"
            aria-label="Facebook"
            className={` w-10 h-10 flex items-center justify-center rounded-full  transition-colors text-white  ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            <FaFacebookF className="text-blue-500" size={18} />
          </Link>
          <Link
            href="https://zalo.me/0345938394"
            target="_blank"
            aria-label="Zalo"
            className={` w-10 h-10 flex items-center justify-center rounded-full  transition-colors text-white  ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            <span className="text-blue-400 text-sm font-semibold">Zalo</span>
          </Link>
          <Link
            href="https://line.me/ti/p/whNDrsAdNU"
            target="_blank"
            aria-label="Line"
            className={` w-10 h-10 flex items-center justify-center rounded-full  transition-colors text-white  ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            <SiLine className="text-green-500" size={18} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            className={` w-10 h-10 flex items-center justify-center rounded-full  transition-colors text-white  ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            <FaLinkedinIn className="text-blue-500" size={18} />
          </Link>
          <Link
            href="https://skype.com"
            target="_blank"
            aria-label="Skype"
            className={` w-10 h-10 flex items-center justify-center rounded-full  transition-colors text-white  ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            <FaSkype className="text-blue-400" size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
