// src/components/FirstVisitModal.tsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { i18next } from "@/i18n/client";

export default function FirstVisitModal() {
  const [showModal, setShowModal] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    const visited = localStorage.getItem("hasVisited");
    if (!visited) {
      setShowModal(true);
    }
  }, []);

  const handleConfirm = (lang: string, theme: string) => {
    i18next.changeLanguage(lang);
    setTheme(theme);
    localStorage.setItem("hasVisited", "true");
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md w-[90%] max-w-md text-center space-y-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Welcome!
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Please select your language and theme:
        </p>

        <div className="space-y-2">
          <div>
            <p className="font-medium mb-1 dark:text-white">Language:</p>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => handleConfirm("en", "system")}
                className="btn"
              >
                EN
              </button>
              <button
                onClick={() => handleConfirm("vi", "system")}
                className="btn"
              >
                VI
              </button>
              <button
                onClick={() => handleConfirm("ja", "system")}
                className="btn"
              >
                JA
              </button>
            </div>
          </div>

          <div>
            <p className="font-medium mb-1 dark:text-white">Theme:</p>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => handleConfirm(i18next.language, "light")}
                className="btn"
              >
                Light
              </button>
              <button
                onClick={() => handleConfirm(i18next.language, "dark")}
                className="btn"
              >
                Dark
              </button>
              <button
                onClick={() => handleConfirm(i18next.language, "system")}
                className="btn"
              >
                System
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
