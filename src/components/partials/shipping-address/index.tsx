"use client";

import { useAPI } from "@shophost/react-sdk";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

import ShippingAddressForm from "@/components/forms/shipping-address-form";
import { LoadingShimmer } from "@/components/partials/shipping-address/loading-shimmer";

const ShippingDetails = () => {
  const router = useRouter();
  const { client } = useAPI();

  const {
    data: shippingAddress,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["shippingAddress"],
    queryFn: async () => {
      const { status, body } = await client.shipping.getShippingAddress();

      if (status !== 200) {
        throw new Error("Failed to fetch shipping address");
      }

      return body;
    },
  });

  const handleSuccess = () => {
    router.push("/checkout/details/shipping-methods");
  };

  if (isLoading) {
    return <LoadingShimmer />;
  }

  if (error)
    return (
      <div className="p-4 rounded-lg bg-red-50 text-red-700">
        <p className="font-semibold">Failed to load shipping address</p>
        <p className="text-xs">
          Please try refreshing the page or contact support if the issue
          persists.
        </p>
      </div>
    );

  return (
    <>
      <div className="flex flex-col gap-4 animate-fade-in">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-[32px] font-red-hat-display font-black  dark:text-blue-500">
            Shipping Details
          </h1>
          <p className="text-gray-500">
            Please fill in the your shipping details to continue.
          </p>
        </div>
        <ShippingAddressForm
          key={shippingAddress?.id}
          initialData={shippingAddress ?? null}
          onSuccess={handleSuccess}
        />
      </div>
    </>
  );
};

export { ShippingDetails };
