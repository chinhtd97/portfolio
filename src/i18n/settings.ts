// src/i18n/settings.ts
export const languages = ['en', 'vi', 'ja'] as const;
export type Locale = typeof languages[number];

export const defaultLocale: Locale = 'ja';
export const defaultNS = 'common';

export function getOptions(lng = defaultLocale, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng: defaultLocale,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    interpolation: {
      escapeValue: false, // cần thiết để dùng với React
    },
    react: {
      useSuspense: false, // rất quan trọng với Next.js App Router
    },
  };
}
