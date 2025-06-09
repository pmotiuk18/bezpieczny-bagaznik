import { LocalizedProduct } from "@shophost/rest-api/schemas";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

import { ProductCard } from "@/components/product-card";
import { ProductImageCarousel } from "@/components/product-image-carousel";
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

  console.log(product);

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Product images carousel */}
            <div className="flex flex-col-reverse">
              <ProductImageCarousel
                images={product.images || []}
                productTitle={product.title || "Product"}
              />
            </div>

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h1>

              <div className="mt-3">
                <p className="text-3xl tracking-tight text-gray-900 dark:text-white">
                  PLN{" "}
                  {(product.discountedBasePrice ?? product.basePrice).toFixed(
                    2
                  )}
                </p>
              </div>

              {product.description && (
                <div className="mt-6">
                  <h3 className="sr-only">Description</h3>
                  <div
                    className="text-base text-gray-700 dark:text-gray-300 space-y-6"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>
              )}

              {/* Use ProductCard component for cart functionality */}
              <div className="mt-10">
                <ProductCard
                  product={product}
                  showImage={false}
                  showDescription={false}
                  className="bg-transparent"
                  nameClassName="hidden"
                  priceClassName="hidden"
                  addToCartButtonClassName="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                />
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/products"
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  ← Back to all products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
