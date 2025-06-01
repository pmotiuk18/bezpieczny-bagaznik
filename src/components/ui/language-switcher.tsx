"use client";

import React from "react";

import { useTranslation } from "../../lib/contexts/translation-context";

export const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`px-2 py-1 text-sm rounded-lg font-medium cursor-pointer ${
          locale === "en"
            ? "bg-teal-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <button
        className={`px-2 py-1 text-sm rounded-lg font-medium cursor-pointer ${
          locale === "pl"
            ? "bg-teal-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => setLocale("pl")}
      >
        PL
      </button>
    </div>
  );
};
