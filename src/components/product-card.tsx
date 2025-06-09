"use client";

import { formatPrice, useCart } from "@shophost/react-sdk";
import { LocalizedProduct } from "@shophost/rest-api/schemas";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { useTranslation } from "../lib/contexts/translation-context";

export interface ProductCardProps {
  product: LocalizedProduct;
  className?: string;
  imageClassName?: string;
  nameClassName?: string;
  descriptionClassName?: string;
  priceClassName?: string;
  addToCartButtonClassName?: string;
  addToCartButtonText?: string;
  showImage?: boolean;
  showDescription?: boolean;
  imageRenderer?: (product: any) => React.ReactNode;
  onAddToCart?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = "",
  imageClassName = "",
  nameClassName = "",
  descriptionClassName = "",
  priceClassName = "",
  addToCartButtonClassName = "",
  addToCartButtonText,
  showImage = true,
  showDescription = true,
  imageRenderer,
  onAddToCart,
}) => {
  const router = useRouter();
  const { addProductToCart } = useCart();
  const [showCheckmark, setShowCheckmark] = useState(false);
  const { t, locale } = useTranslation();

  const productName = product.title || "";
  const productDescription = product.description || "";
  const price = product.discountedBasePrice ?? product.basePrice;
  const formattedPrice = formatPrice(price, "PLN", locale);
  const buttonText = addToCartButtonText || t("product.addToCart");

  // Default image renderer
  const defaultImageRenderer = () => {
    if (!product.images || product.images.length === 0) {
      return (
        <Link
          href={`/products/${product.id}`}
          className={`${imageClassName || "bg-slate-100 h-48 rounded-t-lg"} flex items-center justify-center`}
        >
          <span className="text-slate-400">No image</span>
        </Link>
      );
    }

    return (
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.images[0].url}
          width={500}
          height={500}
          alt={productName}
          className={imageClassName || "w-full h-48 object-cover rounded-lg"}
        />
      </Link>
    );
  };

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

    // Call the onAddToCart callback if provided
    if (onAddToCart) onAddToCart();
  };

  return (
    <div className={className || "bg-white overflow-hidden duration-200"}>
      {/* Product Image */}
      {showImage &&
        (imageRenderer ? imageRenderer(product) : defaultImageRenderer())}

      {/* Product Details */}
      <div className="pt-4 mb-2">
        <div className="flex justify-between items-center">
          <Link href={`/products/${product.id}`}>
            <h3
              className={
                nameClassName ||
                "h4 text-lg text-slate-800 font-red-hat-display hover:text-indigo-600 cursor-pointer"
              }
            >
              {productName}
            </h3>
          </Link>
          <span
            className={
              priceClassName || "h4 font-red-hat-display text-slate-900 text-lg"
            }
          >
            {formattedPrice}
          </span>
        </div>

        {showDescription && productDescription && (
          <p
            className={descriptionClassName || "text-slate-600 mt-0.5 text-sm"}
          >
            {productDescription}
          </p>
        )}
        <button
          type="button"
          onClick={handleAddToCart}
          className={
            addToCartButtonClassName ||
            "btn btn-sm py-1 min-w-[100px] rounded text-sm bg-teal-500 hover:bg-teal-400 text-white mt-3"
          }
        >
          {showCheckmark ? "✓" : buttonText}
        </button>
      </div>
    </div>
  );
};
