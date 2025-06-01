"use client";

import { formatPrice, SliderOver, useCart } from "@shophost/react-sdk";
import { useOrganization } from "@shophost/react-sdk";
import { ChevronLeft, ShoppingBasketIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { CartSummary } from "./cart-summary";
import { UserProfile } from "./user-profile";

interface CheckoutHeaderProps {
  showCart?: boolean;
  totalOverride?: number;
  hideCart?: boolean;
}

const CheckoutHeader = ({
  showCart = true,
  totalOverride,
}: CheckoutHeaderProps) => {
  const { organization } = useOrganization();
  let { total } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  if (totalOverride) {
    total = totalOverride;
  }

  return (
    <>
      <header className="fixed flex justify-between px-2 md:px-6 py-4 md:py-12 z-50 bg-gray-900 md:bg-transparent w-full">
        <Link href="/" className="flex items-center">
          <span>
            <ChevronLeft className="w-5 h-5 text-white" />
          </span>
          {organization?.logoFile ? (
            <span className="ml-1.5 w-7 xl:w-8 h-7 xl:h-8 overflow-hidden rounded-full">
              <img src={organization?.logoFile.url} className="w-full h-full" />
            </span>
          ) : (
            <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full text-white text-sm uppercase font-semibold">
              <span>
                {organization?.name[0]}
                {organization?.name[1]}
              </span>
            </div>
          )}
          <span className="xl:text-lg font-black text-white ml-2 font-red-hat-display">
            {organization?.name}
          </span>
        </Link>
        <div className="flex items-center">
          <div className="mr-6">
            <UserProfile />
          </div>
          {showCart && (
            <div className="flex md:hidden">
              {isOpen ? (
                <button
                  className="flex items-center text-white mr-2 animate-fade"
                  onClick={() => setIsOpen(false)}
                  key={1}
                >
                  <XIcon className="w-5 h-5" />
                </button>
              ) : (
                <button
                  className="flex items-center text-white mr-2 animate-fade"
                  onClick={() => setIsOpen(true)}
                  key={2}
                >
                  <span className="text-xs text-white font-semibold mr-1.5">
                    {formatPrice(
                      total,
                      organization?.configuration.defaultCurrency
                    )}
                  </span>
                  <ShoppingBasketIcon className="w-5 h-5" />
                </button>
              )}
            </div>
          )}
        </div>
      </header>
      <SliderOver isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CartSummary />
      </SliderOver>
    </>
  );
};

export { CheckoutHeader };
