"use client";

import { LocalizedProduct, PaginationMeta } from "@shophost/rest-api/schemas";
import { useQuery } from "@tanstack/react-query";
import React from "react";

import { shophost } from "../lib/shophost.lib";
import { ProductCard } from "./product-card";

export const ProductList = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const data = await shophost.product.getProducts({
        params: {
          organizationId: process.env.NEXT_PUBLIC_ORGANIZATION_ID!,
        },
        query: {
          page: 1,
          limit: 10,
          search: "",
          locale: "en",
        },
      });

      if (data.status !== 200) {
        throw new Error("Error ocfcured");
      }

      return data.body as {
        meta: PaginationMeta;
        list: LocalizedProduct[];
      };
    },
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs animate-pulse"
          >
            <div className="bg-slate-200 h-48"></div>
            <div className="p-4">
              <div className="h-5 bg-slate-200 rounded-sm w-3/4 mb-3"></div>
              <div className="h-4 bg-slate-200 rounded-sm w-full mb-2"></div>
              <div className="h-4 bg-slate-200 rounded-sm w-2/3"></div>
              <div className="mt-4 flex justify-between items-center">
                <div className="h-6 bg-slate-200 rounded-sm w-1/4"></div>
                <div className="h-8 bg-slate-200 rounded-sm w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products?.list.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
