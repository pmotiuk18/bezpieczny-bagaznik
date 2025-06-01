import NextHead from "next/head";
import { usePathname } from "next/navigation";
import React from "react";

import { useTranslation } from "../lib/contexts/translation-context";

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  keywords?: string;
  author?: string;
}

export const Head: React.FC<HeadProps> = ({
  title = "Madras Bistro - Authentic South Indian Food",
  description = "Madras Bistro is a restaurant that serves authentic South Indian food in Krakow, Poland. We offer a wide range of dishes from the South Indian region, including curries, rice dishes, and more.",
  image = "/images/image3-4.jpg",
  type = "website",
  keywords = "madras, bistro, south indian, food, restaurant, krakow, poland",
  author,
}) => {
  const pathname = usePathname();
  const { locale } = useTranslation();
  const canonicalUrl = `https://madrasbistro.pl${pathname}`;

  // Alternative URLs for other locales
  const alternateUrls = {
    en: `https://madrasbistro.pl${pathname}`,
    pl: `https://madrasbistro.pl/pl${pathname}`,
  };

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      {author && <meta name="author" content={author} />}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content="index, follow" />

      {/* Language meta tags */}
      <meta httpEquiv="content-language" content={locale} />
      <meta name="language" content={locale} />

      {/* Alternate language versions */}
      <link rel="alternate" hrefLang="en" href={alternateUrls.en} />
      <link rel="alternate" hrefLang="pl" href={alternateUrls.pl} />
      <link rel="alternate" hrefLang="x-default" href={alternateUrls.en} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="Madras Bistro" />
      <meta property="og:locale" content={locale} />
      <meta
        property="og:locale:alternate"
        content={locale === "en" ? "pl" : "en"}
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </NextHead>
  );
};
