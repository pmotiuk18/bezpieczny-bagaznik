"use client";

import { Locale } from "@shophost/rest-api/schemas";
import { usePathname } from "next/navigation";
import { useRouter as useAppRouter } from "next/navigation";
import { useRouter as usePageRouter } from "next/router";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { TranslationKeys, translations } from "../translations";

// Re-export the Locale type for easier imports

type TranslationContextType = {
  locale: Locale;
  translations: typeof translations.en;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

// Base translation provider with common functionality
const BaseTranslationProvider = ({
  children,
  locale,
  setLocale,
}: {
  children: React.ReactNode;
  locale: Locale;
  setLocale: (newLocale: Locale) => void;
}) => {
  const t = useCallback(
    (key: string) => {
      const keys = key.split(".");
      let value: any = translations[locale];

      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = value[k];
        } else {
          return key; // Return the key if translation is not found
        }
      }

      return typeof value === "string" ? value : key;
    },
    [locale]
  );

  const contextValue: TranslationContextType = {
    locale,
    translations: translations[locale],
    setLocale,
    t,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};

// Props for both provider types
interface TranslationProviderProps {
  children: React.ReactNode;
  initialLocale?: Locale;
}

// App Router specific translation provider
export const AppTranslationProvider = ({
  children,
  initialLocale,
}: TranslationProviderProps) => {
  const router = useAppRouter();
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>(
    initialLocale || ("en" as Locale)
  );

  // If initialLocale is provided and changes, update the state
  useEffect(() => {
    if (initialLocale) {
      setLocaleState(initialLocale);
    }
  }, [initialLocale]);

  const setLocale = useCallback(
    (newLocale: Locale) => {
      setLocaleState(newLocale);

      // App router navigation (this doesn't support locale in the router directly)
      // You would typically handle locale in the URL structure manually
      if (pathname) {
        // This is simplified - in a real app you might need to manipulate the path
        // to include the locale, or use another strategy
        router.push(pathname);
      }
    },
    [router, pathname]
  );

  return (
    <BaseTranslationProvider locale={locale} setLocale={setLocale}>
      {children}
    </BaseTranslationProvider>
  );
};

// Pages Router specific translation provider
export const PageTranslationProvider = ({
  children,
  initialLocale,
}: TranslationProviderProps) => {
  const router = usePageRouter();
  const [locale, setLocaleState] = useState<Locale>(
    (initialLocale || router.locale || router.defaultLocale || "en") as Locale
  );

  useEffect(() => {
    if (router.locale) {
      setLocaleState(router.locale as Locale);
    }
  }, [router.locale]);

  // If initialLocale is provided and changes, update the state
  useEffect(() => {
    if (initialLocale) {
      setLocaleState(initialLocale);
    }
  }, [initialLocale]);

  const setLocale = useCallback(
    (newLocale: Locale) => {
      setLocaleState(newLocale);

      // Pages router navigation with locale
      if (router.pathname) {
        const { pathname, asPath, query } = router;
        router.push({ pathname, query }, asPath, { locale: newLocale });
      }
    },
    [router]
  );

  return (
    <BaseTranslationProvider locale={locale} setLocale={setLocale}>
      {children}
    </BaseTranslationProvider>
  );
};

// Backwards compatibility for existing code
export const TranslationProvider = AppTranslationProvider;

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
