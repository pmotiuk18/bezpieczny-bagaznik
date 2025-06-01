"use client";

import { ShophostProvider } from "@shophost/react-sdk";
import { Locale } from "@shophost/rest-api/schemas";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import React from "react";

import { AppTranslationProvider } from "@/lib/contexts/translation-context";
import { queryClient } from "@/lib/react-query.lib";

interface AppProviderProps {
  locale: Locale;
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children, locale }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
      <QueryClientProvider client={queryClient}>
        <AppTranslationProvider initialLocale={locale}>
          <ShophostProvider
            baseUrl={process.env.NEXT_PUBLIC_APP_DOMAIN!}
            locale={locale}
            organizationId={process.env.NEXT_PUBLIC_ORGANIZATION_ID!}
          >
            {children}
          </ShophostProvider>
        </AppTranslationProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export { AppProvider };
