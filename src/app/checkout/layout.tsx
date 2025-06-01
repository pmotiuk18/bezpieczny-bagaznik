"use client";

import { useCart, useOrganization } from "@shophost/react-sdk";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { CheckoutHeader } from "@/components/checkout-header";
import { CartSummary } from "@/components/checkout-header/cart-summary";

import { useSession } from "../../lib/better-auth";

interface CheckoutLayoutProps {
  children: React.ReactNode;
}

const CheckoutLayout: React.FC<CheckoutLayoutProps> = ({ children }) => {
  const { organization, loading: isOrganizationLoading } = useOrganization();
  const { loading: isCartLoading } = useCart();
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!session?.session && !isPending) {
      router.push(`/auth/sign-in?redirect=${pathname}`);
    }
  }, [isPending, pathname, router, session]);

  if (isOrganizationLoading || isCartLoading || isPending) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900">
        <div className="mb-4">
          <div className="animate-spin rounded-full h-18 w-18 border-b-2 border-teal-500"></div>
        </div>
        <h1 className="h1 font-black font-red-hat-display text-white mt-5 text-center">
          Madras Bistro
        </h1>
        <p className="text-gray-100 mt-2 text-lg">
          Authentic South Indian Food
        </p>
      </div>
    );
  }

  if (!organization) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900">
        <h1 className="text-2xl font-bold">Organization not found</h1>
      </div>
    );
  }

  if (
    !organization.configuration.isAcceptingOrders ||
    !organization.configuration.isOpen
  ) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900 text-center animate-fade-in">
        {organization.configuration.isOpen ? (
          <div className="relative z-10 max-w-[800px] px-10">
            <h1 className="text-2xl sm:text-3xl font-black font-red-hat-display text-white">
              Unfortunately, We&apos;re currently not accepting online orders.
            </h1>
            <p className="text-gray-100 font-medium mt-3 text-lg mt-">
              Please contact us directly for any inquiries. <br /> +48 729 333
              644 <br /> contact@madrasbistro.pl
            </p>
            <Link
              className="btn-sm mt-6 text-white bg-teal-500 hover:bg-teal-400 rounded-lg shrink-0"
              href="/"
            >
              Back to Homepage
            </Link>
          </div>
        ) : (
          <div className="relative z-10">
            <h1 className="text-2xl sm:text-3xl font-black font-red-hat-display text-white">
              Sorry, we&apos;re currently closed
            </h1>
            <p className="text-gray-100 font-medium mt-3 text-lg mt-">
              Please contact us directly for any inquiries. <br /> +48 729 333
              644 <br /> contact@madrasbistro.pl
            </p>
            <Link
              className="btn-sm mt-6 text-white bg-teal-500 hover:bg-teal-400 rounded-lg shrink-0"
              href="/"
            >
              Back to Homepage
            </Link>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <CheckoutHeader />
      <div>
        <div className="flex flex-col md:flex-row h-screen w-screen relative">
          <div className="hidden md:flex items-center justify-end w-full md:w-1/2 h-full px-16 xl:px-24  bg-gray-900 md:overflow-y-auto">
            <div className="w-96 animate-fade">
              <div className="pl-6">
                <CartSummary />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-14 w-full">
                Powered by{" "}
                <a
                  href="https://shophost.io"
                  className="text-teal-500 hover:text-teal-600 dark:text-blue-500 dark:hover:text-blue-400"
                >
                  shophost.io
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start 2xl:items-start w-full md:w-1/2 h-full px-6 sm:px-12 xl:px-24 py-8 md:overflow-y-auto relative">
            <div className="py-10 xl:py-24 md:my-auto animate-fade w-full md:max-w-[432px]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutLayout;
