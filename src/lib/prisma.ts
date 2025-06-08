import { PrismaNeon } from "@prisma/adapter-neon";
import { pagination } from "prisma-extension-pagination";

import { PrismaClient } from "@/db";

const adapter = new PrismaNeon({
  connectionString: process.env.POSTGRES_PRISMA_URL,
});

export const prisma = new PrismaClient({
  adapter,
  log: ["info", "warn", "error"],
}).$extends(
  pagination({
    pages: {
      limit: 15,
      includePageCount: true,
    },
  })
);
