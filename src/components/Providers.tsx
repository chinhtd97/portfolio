// src/components/Providers.tsx
"use client";

import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { i18next } from "@/i18n/client";
import { ThemeProvider } from "./theme-provider";
import FirstVisitModal from "./FirstVisitModal";

interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider>
        {" "}
        {/*<FirstVisitModal />*/}
        {children}
      </ThemeProvider>
    </I18nextProvider>
  );
}
