import { Locale } from "@shophost/rest-api/schemas";

import { enTranslations } from "./en";
import { plTranslations } from "./pl";

export type TranslationKeys = typeof enTranslations;

export const translations: Partial<Record<Locale, TranslationKeys>> = {
  en: enTranslations,
  pl: plTranslations,
};
