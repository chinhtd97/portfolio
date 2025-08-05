// src/i18n/server.ts
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from './settings';

import type { Locale } from './settings';

export async function serverTranslation(locale: Locale, ns: string[] = ['common']) {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend((lng: string, ns: string) =>
        import(`../../public/locales/${lng}/${ns}.json`)
      )
    )
    .init({
      ...getOptions(locale),
      lng: locale,
      ns,
    });

  return {
    t: i18nInstance.getFixedT(locale, ns),
  };
}
