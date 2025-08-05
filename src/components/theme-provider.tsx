"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

// Bạn tự define type đơn giản cho children
interface Props {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      //defaultTheme="system"
      //enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
