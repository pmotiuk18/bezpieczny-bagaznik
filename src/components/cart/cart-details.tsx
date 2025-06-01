import { CartItems, useCart } from "@shophost/react-sdk";
import cx from "classnames";
import Link from "next/link";
import React, { useRef, useState } from "react";

import { CancelIcon } from "../tracking-icons";
import { CartItem } from "./cart-item";

interface CartDetailsProps {
  onClose?: () => void;
}

export const CartDetails: React.FC<CartDetailsProps> = ({ onClose }) => {
  const { total, itemCount } = useCart();
  const cartRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Required minimum distance for a swipe (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchEnd - touchStart;
    const isDownSwipe = distance > minSwipeDistance;

    if (isDownSwipe && onClose) {
      onClose();
    }

    // Reset touch states
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="bg-white shadow-xl rounded-lg overflow-hidden h-full flex flex-col"
      ref={cartRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="py-3 px-3 border-b border-slate-100 flex justify-between items-center bg-teal-500">
        <h3 className="text-lg font-black font-red-hat-display text-white">
          Shopping bag
        </h3>
        {onClose && (
          <button
            onClick={onClose}
            className="text-white p-1 rounded-full hover:bg-teal-400 transition-colors"
            aria-label="Close cart"
          >
            <CancelIcon className="h-5 w-5" />
          </button>
        )}
      </div>
      <div className="max-h-80 md:max-h-[550px] overflow-y-auto p-4 md:p-3 space-y-3 h-full">
        <CartItems
          renderItem={(props) => <CartItem {...props} />}
          loadingComponent={
            <div className="flex items-center justify-center h-32">
              <svg
                aria-hidden="true"
                className="text-gray-200 animate-spin dark:text-gray-600 fill-teal-600 h-8 w-8"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          }
          emptyCartComponent={
            <div className="text-center py-4 text-sm text-slate-500 flex flex-col items-center">
              <div className="bg-slate-100 p-2 rounded-full mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <p className="font-medium">Your cart is empty</p>
            </div>
          }
        />
      </div>
      {itemCount > 0 && (
        <div className="flex items-center px-4 py-4 border-t border-t-slate-200 mt-auto w-full">
          <div className="w-[125px] font-medium h-[45px] rounded-lg flex items-center text-sm justify-center border border-slate-200 dark:border-slate-700 whitespace-nowrap mr-2">
            PLN {total}
          </div>
          <Link
            href="/checkout/details/customer-details"
            className={cx(
              "btn text-sm text-white bg-teal-500 hover:bg-teal-400 rounded-lg w-full",
              {
                "opacity-50 cursor-not-allowed": itemCount === 0,
              }
            )}
            onClick={(e) => {
              if (itemCount === 0) {
                e.preventDefault();
              }
            }}
          >
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
};
