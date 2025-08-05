import React from "react";
import { useTheme } from "next-themes";

type Props = {
  icon: React.ReactNode;
  label: string;
};

export default function SkillItem({ icon, label }: Props) {
  const { theme } = useTheme();
  return (
    <div
      className={`flex flex-col items-center gap-2 p-3 rounded-xl hover:scale-105 transition-transform w-24 h-24 justify-center shadow-md ${
        theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"
      }`}
    >
      <div className="text-3xl">{icon}</div>
      <div
        className={`text-xs text-center font-medium ${
          theme === "dark" ? "text-neutral-200" : "text-neutral-800"
        }`}
      >
        {label}
      </div>
    </div>
  );
}
