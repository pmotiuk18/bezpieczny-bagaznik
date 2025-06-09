import { LocalizedProduct } from "@shophost/rest-api/schemas";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

import { ProductDetails } from "@/components/partials/product-details";
import { shophost } from "@/lib/shophost.lib";

export const dynamic = "force-dynamic";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductPage = async ({ params: paramsPromise }: ProductPageProps) => {
  const params = await paramsPromise;
  const locale = "pl";

  // Fetch the product by ID
  const data: any = await shophost.product.getProduct({
    params: {
      organizationId: process.env.NEXT_PUBLIC_ORGANIZATION_ID!,
      id: params.id,
    },
    query: {
      locale,
    },
  });

  if (data.status !== 200 || !data.body) {
    notFound();
  }

  const product: LocalizedProduct = data.body;

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ProductDetails product={product} />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
