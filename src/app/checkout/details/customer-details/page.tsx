import { CustomerDetailsPage } from "@shophost/react-sdk";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Customer Details",
  description: "Choose your shipping and payment methods",
};

const Page = () => (
  <>
    <CustomerDetailsPage shippingAndPaymentPageUrl="/checkout/details/shipping-and-payment" />
  </>
);

export default Page;
