import { PrismaNeon } from "@prisma/adapter-neon";
import { createNextHandler } from "@shophost/rest-api/next";

const adapter = new PrismaNeon({
  connectionString: process.env.POSTGRES_PRISMA_URL,
});

const handler = createNextHandler({
  database: {
    adapter,
    log: ["info", "warn", "error"],
  },
  maps: {
    google: {
      key: process.env.GOOGLE_PLACES_API_KEY!,
    },
  },
  auth: {
    domain: new URL(process.env.NEXT_PUBLIC_API_BASE_URL!).hostname
      .split(".")
      .slice(-2)
      .join("."),
    trustedOrigins: [
      "http://localhost:3000",
      "https://staging.madrasbistro.pl",
      "https://madrasbistro.pl",
    ],
    socialProviders: {
      google: {
        clientId: process.env.AUTH_GOOGLE_ID!,
        clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      },
    },
  },
  payment: {
    stripe: {
      secretKey: process.env.STRIPE_SECRET_KEY!,
      webhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
      resendApiKey: process.env.RESEND_API_KEY!,
      paymentMethods: ["card", "blik"],
    },
  },
});

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
  handler as OPTIONS,
};
