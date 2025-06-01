import {
  inferAdditionalFields,
  organizationClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

if (!process.env.NEXT_PUBLIC_APP_DOMAIN) {
  throw new Error("NEXT_PUBLIC_APP_DOMAIN is required");
}

export const {
  useSession,
  signIn,
  signUp,
  signOut,
  organization,
  getSession,
  useListOrganizations,
} = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_DOMAIN,
  plugins: [
    inferAdditionalFields<{
      user: {
        additionalFields: {
          firstname: {
            type: "string";
            required: true;
          };
          lastname: {
            type: "string";
            required: true;
          };
        };
      };
    }>(),
    organizationClient(),
  ],
});
