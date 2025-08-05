"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages } from "@/i18n/settings";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const currentLang = segments[1];

  return (
    <div className="flex gap-2">
      {languages.map((lng) => {
        const newPath =
          currentLang && languages.includes(currentLang as any)
            ? pathname.replace(`/${currentLang}`, `/${lng}`)
            : `/${lng}${pathname}`;

        return (
          <Link
            key={lng}
            href={newPath}
            className="underline text-blue-500 hover:text-blue-700"
          >
            {lng.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
