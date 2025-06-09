"use client";

import React from "react";

interface LoadingShimmerProps {
  className?: string;
}

// Base shimmer effect
export const Shimmer: React.FC<LoadingShimmerProps> = ({ className = "" }) => (
  <div
    className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%] ${className}`}
    style={{
      animation: "shimmer 2s infinite linear",
    }}
  />
);

// Product card shimmer
export const ProductCardSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 overflow-hidden duration-200 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
    <Shimmer className="w-full h-48 rounded-lg mb-4" />
    <div className="space-y-3">
      <div className="flex justify-between items-start">
        <Shimmer className="h-6 w-3/4 rounded" />
        <Shimmer className="h-6 w-16 rounded" />
      </div>
      <Shimmer className="h-4 w-full rounded" />
      <Shimmer className="h-4 w-2/3 rounded" />
      <Shimmer className="h-8 w-24 rounded" />
    </div>
  </div>
);

// Products page shimmer
export const ProductsPageSkeleton: React.FC = () => (
  <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header skeleton */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-6">
          <Shimmer className="h-8 w-64 mx-auto rounded mb-3" />
          <Shimmer className="h-6 w-32 mx-auto rounded" />
        </div>

        {/* Category tabs skeleton */}
        <div className="flex gap-4 mb-8 overflow-x-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <Shimmer key={i} className="h-10 w-24 rounded-full flex-shrink-0" />
          ))}
        </div>

        {/* Products grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </main>
  </div>
);

// Individual product page shimmer
export const ProductPageSkeleton: React.FC = () => (
  <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Product images skeleton */}
          <div className="flex flex-col-reverse">
            <div className="space-y-4">
              <Shimmer className="w-full h-96 rounded-lg" />
              <div className="flex gap-2 overflow-x-auto">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Shimmer
                    key={i}
                    className="w-20 h-20 rounded-lg flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product info skeleton */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <Shimmer className="h-8 w-3/4 rounded mb-4" />
            <Shimmer className="h-8 w-32 rounded mb-6" />

            <div className="space-y-3 mb-6">
              <Shimmer className="h-4 w-full rounded" />
              <Shimmer className="h-4 w-full rounded" />
              <Shimmer className="h-4 w-3/4 rounded" />
              <Shimmer className="h-4 w-5/6 rounded" />
              <Shimmer className="h-4 w-2/3 rounded" />
            </div>

            <Shimmer className="h-12 w-full rounded mb-6" />
            <Shimmer className="h-6 w-32 mx-auto rounded" />
          </div>
        </div>
      </div>
    </main>
  </div>
);

// CSS for shimmer animation (add to your global CSS)
export const shimmerStyles = `
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
`;
