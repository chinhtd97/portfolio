"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaLinkedinIn, FaSkype, FaGithub } from "react-icons/fa";
import { SiZalo, SiLine } from "react-icons/si"; // Cần thêm icon đặc thù
import { useTheme } from "next-themes";

export default function Footer() {
  //const { t } = useTranslation(undefined, { useSuspense: false });
  const { theme } = useTheme();
  const iconStyle =
    "w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-white";

  return (
    <footer
      className={` py-8 px-4 mt-16 border-t   ${
        theme === "dark"
          ? "bg-gray-900 border-gray-700"
          : "bg-gray-100 border-gray-200"
      }`}
    >
      <div
        className={` max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center   text-sm ${
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
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            className={iconStyle}
          >
            <FaFacebookF className="text-blue-500" size={18} />
          </Link>
          <Link
            href="https://zalo.me"
            target="_blank"
            aria-label="Zalo"
            className={iconStyle}
          >
            <span className="text-blue-400 text-sm font-semibold">Zalo</span>
          </Link>
          <Link
            href="https://line.me"
            target="_blank"
            aria-label="Line"
            className={iconStyle}
          >
            <SiLine className="text-green-500" size={18} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            className={iconStyle}
          >
            <FaLinkedinIn className="text-blue-500" size={18} />
          </Link>
          <Link
            href="https://skype.com"
            target="_blank"
            aria-label="Skype"
            className={iconStyle}
          >
            <FaSkype className="text-blue-400" size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
