// src/app/[locale]/layout.tsx
import "../globals.css";
import { dir } from "i18next";
import { languages } from "@/i18n/settings";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "@/i18n/client";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Fullstack Portfolio",
};

// ✅ generateStaticParams luôn là async
export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: { locale: string };
};

// ✅ Dùng kiểu trả về rõ ràng, không Promise<>
export default async function LocaleLayout(props: Props) {
  const { children } = props;
  const { locale } = await props.params; // ✅ await đúng

  const direction = dir(locale);

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
