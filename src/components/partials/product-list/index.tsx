"use client";

import {
  LocalizedProduct,
  LocalizedProductCategory,
} from "@shophost/rest-api/schemas";
import React, { useMemo, useState, useTransition } from "react";

import { ProductCardSkeleton } from "../../ui/loading-shimmer";
import { ProductCard } from "./product-card";

interface MenuSectionProps {
  productCategories: LocalizedProductCategory[];
  products: LocalizedProduct[];
}

const MenuSection: React.FC<MenuSectionProps> = ({
  products,
  productCategories,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    productCategories[0]?.id || ""
  );
  const [isPending, startTransition] = useTransition();

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.categories.some((category) => selectedCategory === category.id)
    );
  }, [products, selectedCategory]);

  const handleCategoryChange = (categoryId: string) => {
    startTransition(() => {
      setSelectedCategory(categoryId);
    });
  };

  return (
    <section className="relative border-t border-transparent dark:border-gray-800">
      {/* Background gradient */}
      <div
        className="absolute inset-0 h-128 dark:opacity-25 bg-white dark:from-gray-800 dark:to-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      {/* End background gradient */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10">
        <div className="">
          {/* Section content */}
          <div className="mt-3">
            {/* Category tabs */}
            <div className="sticky top-0 bg-white dark:bg-gray-900 z-10">
              <div className="border-b border-gray-200 dark:border-gray-700 overflow-x-auto overflow-y-hidden scrollbar-hide">
                <nav
                  className="-mb-px flex space-x-4 md:space-x-8 justify-start sm:justify-center sm:px-0 md:w-full"
                  aria-label="Menu Categories"
                >
                  {productCategories.map((category, index) => (
                    <button
                      key={category.id}
                      className={`
                        whitespace-nowrap cursor-pointer pb-2 border-b-4 font-medium md:text-sm transition-colors duration-150 ease-in-out flex-shrink-0 relative
                        ${index === 0 ? "pl-0" : "pl-1"}
                        ${index === productCategories.length - 1 ? "pr-0" : "pr-1"}
                        ${
                          selectedCategory === category.id
                            ? "border-teal-500 text-teal-600 dark:border-teal-400 dark:text-teal-400"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600"
                        }
                        ${isPending ? "opacity-70" : ""}
                      `}
                      onClick={() => handleCategoryChange(category.id)}
                      role="tab"
                      aria-selected={selectedCategory === category.id}
                      aria-controls={`${category.id}-panel`}
                    >
                      {category.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 mb-10 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isPending ? (
              Array.from({ length: 6 }).map((_, i) => (
                <ProductCardSkeleton key={`skeleton-${i}`} />
              ))
            ) : filteredProducts?.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { MenuSection };
