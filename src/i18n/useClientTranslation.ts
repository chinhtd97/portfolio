// src/i18n/useClientTranslation.ts
'use client';

import { useTranslation as useReactI18nextTranslation } from 'react-i18next';

export function useClientTranslation(ns = 'common') {
  return useReactI18nextTranslation(ns);
}
