import {
  LocalizedProduct,
  LocalizedProductCategory,
} from "@shophost/rest-api/schemas";
import React from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { MenuSection } from "@/components/partials/homepage/menu-section";
import { shophost } from "@/lib/shophost.lib";

const ProductsPage = async () => {
  const locale = "pl";

  const productCategories = await shophost.productCategory.getProductCategories(
    {
      params: {
        organizationId: process.env.NEXT_PUBLIC_ORGANIZATION_ID!,
      },
      query: {
        limit: 100,
        locale,
        published: true,
      },
    }
  );

  const data = await shophost.product.getProducts({
    params: {
      organizationId: process.env.NEXT_PUBLIC_ORGANIZATION_ID!,
    },
    query: {
      page: 1,
      limit: 1000,
      search: "",
      locale,
    },
  });

  if (data.status !== 200) {
    throw new Error("Error occured");
  }

  if (productCategories.status !== 200) {
    throw new Error("Failed to fetch product categories");
  }

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-6">
            <h2 className="h2 font-red-hat-display mb-3">Wszystkie produkty</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Wszystkie produkty
            </p>
          </div>
          <MenuSection
            productCategories={
              (productCategories.body.list as LocalizedProductCategory[]) || []
            }
            products={(data.body.list as LocalizedProduct[]) || []}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
