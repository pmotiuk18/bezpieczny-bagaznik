import { ShippingAndPaymentPage } from "@shophost/react-sdk";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Shipping Methods",
  description: "Choose your shipping and payment methods",
};

const CheckoutAddressPage = () => {
  return (
    <>
      <ShippingAndPaymentPage customerDetailsPageUrl="/checkout/details/customer-details" />
    </>
  );
};

export default CheckoutAddressPage;
