import { initClient } from "@shophost/rest-api/contract";

if (!process.env.NEXT_PUBLIC_APP_DOMAIN) {
  throw new Error("NEXT_PUBLIC_APP_DOMAIN is not set");
}

// For server side fetching only
export const shophost = initClient({
  baseUrl: process.env.NEXT_PUBLIC_APP_DOMAIN,
  throwOnUnknownStatus: true,
  baseHeaders: {},
  credentials: "include",
});
