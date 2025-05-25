import { ApiReference } from "@scalar/nextjs-api-reference";
import { generateOpenApiSpec } from "@shophost/rest-api";

export const GET = async () => {
  const openApiDocument = generateOpenApiSpec();

  return ApiReference({
    content: openApiDocument,
    theme: "elysiajs",
    layout: "modern",
    metaData: {
      title: "Organization API Reference | Shophost",
      description: "API documentation for Shophost Organization",
    },
    operationsSorter: "alpha",
  })();
};
