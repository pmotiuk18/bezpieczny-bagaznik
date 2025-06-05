# Vercel Environment Variables for Prisma Engine Debug

Add these environment variables to your Vercel project to help debug and potentially fix the Prisma engine issue:

## Environment Variables to Add:

1. **PRISMA_CLI_BINARY_TARGETS**

   - Value: `rhel-openssl-3.0.x`
   - Description: Forces Prisma to generate the correct binary target for Vercel

2. **PRISMA_QUERY_ENGINE_LIBRARY** (Try if the above doesn't work)

   - Value: `/vercel/path0/node_modules/.pnpm/@shophost+rest-api@0.1.17_@types+node@20.17.50_openapi3-ts@2.0.2_react-dom@19.1.0_react@19.1._tiaa5ve35fh7sjpi5uk2otfhei/node_modules/@shophost/rest-api/src/db/__generated__/client/libquery_engine-rhel-openssl-3.0.x.so.node`
   - Description: Explicitly tells Prisma where to find the query engine

3. **DEBUG_PRISMA**
   - Value: `true`
   - Description: Enables additional logging

## How to Add in Vercel:

1. Go to your project in Vercel Dashboard
2. Navigate to Settings > Environment Variables
3. Add each variable for all environments (Production, Preview, Development)
4. Redeploy your project

## Build Logs to Look For:

After adding the debug scripts, look for these sections in your build logs:

- `=== DEBUGGING PRISMA SETUP ===`
- `=== COPYING PRISMA ENGINE ===`
- `=== POST-INSTALL DEBUGGING ===`
- `=== RUNTIME PRISMA DEBUG ===`

These will help identify where the engines are located and whether our fixes are working.
