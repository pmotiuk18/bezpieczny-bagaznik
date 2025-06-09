"use client";

import { formatPrice, useCart } from "@shophost/react-sdk";
import { LocalizedProduct } from "@shophost/rest-api/schemas";
import Link from "next/link";
import React, { useState } from "react";

import { useTranslation } from "../../lib/contexts/translation-context";
import { ProductImageCarousel } from "../product-image-carousel";

export interface ProductDetailsProps {
  product: LocalizedProduct;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { addProductToCart } = useCart();
  const [showCheckmark, setShowCheckmark] = useState(false);
  const { t, locale } = useTranslation();

  const price = product.discountedBasePrice ?? product.basePrice;
  const formattedPrice = formatPrice(price, "PLN", locale);
  const buttonText = t("product.addToCart");

  const handleAddToCart = () => {
    addProductToCart(product);

    // Only show the checkmark if product has no modifiers
    const hasNoModifiers =
      !product.modifierGroups || product.modifierGroups.length === 0;
    if (hasNoModifiers) {
      setShowCheckmark(true);

      // Reset back to original text after 1 second
      setTimeout(() => {
        setShowCheckmark(false);
      }, 1000);
    }
  };

  return (
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
            {formattedPrice}
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

        {/* Add to cart button */}
        <div className="mt-10">
          <button
            type="button"
            onClick={handleAddToCart}
            className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {showCheckmark ? "✓" : buttonText}
          </button>
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
  );
};
