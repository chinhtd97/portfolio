// src/i18n/client.ts
'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getOptions, defaultLocale, type Locale } from './settings';
import resourcesToBackend from 'i18next-resources-to-backend';

function detectLocaleFromPath(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  const lang = window.location.pathname.split('/')[1];
  return ['en', 'vi', 'ja'].includes(lang) ? (lang as Locale) : defaultLocale;
}

if (!i18next.isInitialized) {
  i18next
    .use(initReactI18next)
    .use(
      resourcesToBackend((lng: Locale, ns: string) =>
        import(`../../public/locales/${lng}/${ns}.json`)
      )
    )
    .init(getOptions(detectLocaleFromPath()));
}

export { i18next };
