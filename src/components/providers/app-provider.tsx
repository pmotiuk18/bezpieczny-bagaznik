"use client";

import { ShophostProvider } from "@shophost/react-sdk";
import { Locale } from "@shophost/rest-api/schemas";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";

import { queryClient } from "../../lib/react-query.lib";

interface AppProviderProps {
  locale: Locale;
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children, locale }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ShophostProvider
        baseUrl={process.env.NEXT_PUBLIC_APP_DOMAIN!}
        locale={locale}
        organizationId={process.env.NEXT_PUBLIC_ORGANIZATION_ID!}
      >
        {children}
      </ShophostProvider>
    </QueryClientProvider>
  );
};

export { AppProvider };
