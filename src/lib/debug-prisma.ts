// Debug utility for Prisma engine issues
import fs from "fs";
import path from "path";

export function debugPrismaEngine() {
  console.log("=== RUNTIME PRISMA DEBUG ===");

  // Environment info
  console.log("Platform:", process.platform, process.arch);
  console.log("Node version:", process.version);
  console.log("Working directory:", process.cwd());

  // Environment variables
  console.log(
    "PRISMA_QUERY_ENGINE_LIBRARY:",
    process.env.PRISMA_QUERY_ENGINE_LIBRARY
  );
  console.log(
    "PRISMA_QUERY_ENGINE_BINARY:",
    process.env.PRISMA_QUERY_ENGINE_BINARY
  );
  console.log("NODE_ENV:", process.env.NODE_ENV);

  // Check common paths where Prisma searches
  const searchPaths = [
    // Based on your error message
    "/vercel/path0/node_modules/.pnpm/@shophost+rest-api@0.1.17_@types+node@20.17.50_openapi3-ts@2.0.2_react-dom@19.1.0_react@19.1._tiaa5ve35fh7sjpi5uk2otfhei/node_modules/@shophost/rest-api/src/db/__generated__/client",
    "/vercel/path0/node_modules/.pnpm/@prisma+client@6.8.2_typescript@5.8.3/node_modules/@prisma/client",
    "/Users/ashaji/Repositories/Shophost/shophost/packages/rest-api/src/db/__generated__/client",
    "/vercel/path0/node_modules/.pnpm/@prisma+client@6.8.2_typescript@5.8.3/node_modules/.prisma/client",

    // Additional common paths
    "./node_modules/.prisma/client",
    "./node_modules/@prisma/client",
    "/tmp/prisma-engines",
    "./.next/server",
  ];

  console.log("Checking paths:");
  searchPaths.forEach((searchPath) => {
    try {
      if (fs.existsSync(searchPath)) {
        console.log(`✓ EXISTS: ${searchPath}`);
        try {
          const files = fs.readdirSync(searchPath);
          const engines = files.filter(
            (f) => f.includes("query_engine") || f.includes("libquery_engine")
          );
          if (engines.length > 0) {
            console.log(`  Engines found: ${engines.join(", ")}`);
          } else {
            console.log(`  No engines in directory`);
          }
        } catch (e) {
          console.log(`  Error reading directory: ${e}`);
        }
      } else {
        console.log(`✗ MISSING: ${searchPath}`);
      }
    } catch (e) {
      console.log(`✗ ERROR checking ${searchPath}: ${e}`);
    }
  });

  // Try to find any Prisma engines
  console.log("\nSearching for any Prisma engines in common locations...");
  const commonDirs = ["./node_modules", "./.next", "/vercel", "/tmp"];

  commonDirs.forEach((dir) => {
    if (fs.existsSync(dir)) {
      try {
        // Use a simple recursive search for engines
        findEnginesInDir(dir, 0);
      } catch (e) {
        console.log(`Error searching ${dir}: ${e}`);
      }
    }
  });

  console.log("=== END RUNTIME DEBUG ===");
}

function findEnginesInDir(dir: string, depth: number) {
  if (depth > 5) return; // Prevent infinite recursion

  try {
    const items = fs.readdirSync(dir);

    items.forEach((item) => {
      if (item.includes("libquery_engine") || item.includes("query_engine")) {
        console.log(`Found engine: ${path.join(dir, item)}`);
      }

      // Recursively search in subdirectories, but limit depth
      const itemPath = path.join(dir, item);
      try {
        const stat = fs.statSync(itemPath);
        if (
          stat.isDirectory() &&
          !item.startsWith(".") &&
          item !== "node_modules" &&
          depth < 3
        ) {
          findEnginesInDir(itemPath, depth + 1);
        }
      } catch (e) {
        // Ignore permission errors and continue
      }
    });
  } catch (e) {
    // Ignore permission errors and continue
  }
}
