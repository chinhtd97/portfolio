"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { defaultLocale, languages, Locale } from "@/i18n/settings";
import { i18next } from "@/i18n/client";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, Fragment, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  Menu as DropdownMenu,
  MenuItems,
  MenuItem,
  Transition,
} from "@headlessui/react";
import { languageOptions } from "@/constants/languageOptions";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = (pathname.split("/")[1] as Locale) || defaultLocale;
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "about",
    "certifications",
    "skill",
    "experience",
    "projects",
    "contact",
  ];

  const handleChangeLang = async (lang: string) => {
    if (!languages.includes(lang as Locale)) return;
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${lang}`);
    // Chuyển route trước
    router.push(newPath);

    // Đợi router chuyển xong rồi đổi ngôn ngữ
    await i18next.changeLanguage(lang);
  };
  useEffect(() => {
    if (i18next.language !== currentLang) {
      i18next.changeLanguage(currentLang);
    }
  }, [currentLang]);
  if (typeof window === "undefined") return null;
  return (
    <nav
      key={currentLang}
      className={`w-full shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="flex justify-between items-center ">
        <Link href={`/${currentLang}`}>
          <div className="w-10 h-10 md:h-12 md:w-12 mr-3 relative rounded-full overflow-hidden border-0 border-white-300 shadow-lg shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="My photo"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100px, 150px"
            />
          </div>
        </Link>
        {/* Logo */}
        <div>
          <Link
            className={`hidden lg:block text-xl font-bold ${
              theme === "dark" ? "text-blue-400" : "text-cyan-800"
            }`}
            href={`/${currentLang}`}
          >
            {t("fullName")}
          </Link>
          <div
            className={`hidden lg:block text-sm font-light ${
              theme === "dark" ? "text-blue-100" : "text-grey-100"
            }`}
          >
            {t("career")}
          </div>
        </div>
      </div>

      {/* Desktop navLinks */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((key) => {
          const isActive = pathname === `/${currentLang}/${key}`;
          return (
            <Link
              key={key}
              href={`/${currentLang}/${key}`}
              className={`transition font-medium ${
                isActive
                  ? theme === "dark"
                    ? "text-blue-400 underline underline-offset-4"
                    : "text-blue-600 underline underline-offset-4"
                  : theme === "dark"
                  ? "text-gray-300 hover:text-blue-600 hover:text-blue-400"
                  : "text-gray-700 hover:text-blue-600"
              } 
                
              `}
            >
              {t(key)}
            </Link>
          );
        })}
      </div>

      {/* Right controls: Language, Theme, Mobile menu button */}
      <div className="flex items-center gap-3 ml-auto md:ml-0">
        {/* Language Dropdown */}
        <DropdownMenu as="div" className="relative inline-block text-left">
          <div>
            <DropdownMenu.Button
              className={`inline-flex justify-center items-center gap-1 px-3 py-1.5 text-sm font-medium    rounded-md  transition ${
                theme === "dark"
                  ? "hover:bg-gray-600 text-white bg-gray-700"
                  : "text-gray-800 hover:bg-gray-300 bg-gray-200"
              }`}
            >
              <span className="text-xl">
                <img
                  src={
                    languageOptions.find((lng) => lng.code === currentLang)
                      ?.flag
                  }
                />
              </span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </DropdownMenu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems
              className={`absolute right-0 mt-2 w-40 origin-top-right  border  rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-600"
                  : "bg-white border-gray-300"
              }`}
            >
              {languageOptions.map((lng) => (
                <MenuItem key={lng.code} as={Fragment}>
                  {({ active }) => (
                    <button
                      onClick={() => handleChangeLang(lng.code)}
                      className={`${
                        active
                          ? theme === "dark"
                            ? "bg-gray-700 text-white"
                            : "bg-gray-100 text-gray-800"
                          : theme === "dark"
                          ? "text-white"
                          : "text-gray-800"
                      } w-full px-4 py-2 text-sm text-left flex gap-2 items-center`}
                    >
                      <span className="text-xl">
                        <img src={lng.flag} />
                      </span>
                      <span>{lng.label}</span>
                    </button>
                  )}
                </MenuItem>
              ))}
            </MenuItems>
          </Transition>
        </DropdownMenu>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Hamburger menu button */}
        <button
          className="block md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav menu */}
      {menuOpen && (
        <div
          className={`absolute top-16 left-0 w-full px-6 py-4 shadow-md z-40 ${
            theme === "dark" ? "bg-gray-900" : " bg-white"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((key) => {
              const isActive = pathname === `/${currentLang}/${key}`;
              return (
                <Link
                  key={key}
                  href={`/${currentLang}/${key}`}
                  className={`transition font-medium md:hidden ${
                    isActive
                      ? theme === "dark"
                        ? "text-blue-400 underline underline-offset-4"
                        : "text-blue-600 underline underline-offset-4"
                      : theme === "dark"
                      ? "text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                      : "text-gray-700 hover:text-blue-500 "
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {t(key)}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
