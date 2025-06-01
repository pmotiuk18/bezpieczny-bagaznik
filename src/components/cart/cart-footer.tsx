import { useCart } from "@shophost/react-sdk";
import React from "react";

interface CartFooterProps {
  locale: "en" | "pl";
  variant?: "drawer" | "popover";
  viewCartButton?: React.ReactNode;
  onCheckoutClick: () => void;
}

export const CartFooter: React.FC<CartFooterProps> = ({
  locale,
  variant = "drawer",
  viewCartButton,
  onCheckoutClick,
}) => {
  const { itemCount, total } = useCart();

  return (
    <div
      className={`border-t border-slate-100 ${variant === "popover" ? "p-3" : "p-4"} bg-slate-50`}
    >
      <div className="flex justify-between items-center mb-2">
        <span
          className={`font-medium text-slate-700 ${variant === "popover" ? "text-sm" : ""}`}
        >
          Total Items:
        </span>
        <span
          className={`text-slate-700 ${variant === "popover" ? "text-sm" : ""}`}
        >
          {itemCount}
        </span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span
          className={`font-medium text-slate-700 ${variant === "popover" ? "text-sm" : ""}`}
        >
          Total Amount:
        </span>
        <span
          className={`font-bold text-slate-900 ${variant === "popover" ? "text-sm" : ""}`}
        >
          {new Intl.NumberFormat(locale === "pl" ? "pl-PL" : "en-US", {
            style: "currency",
            currency: "USD",
          }).format(total)}
        </span>
      </div>
      <div className="flex justify-end items-center space-x-2">
        {viewCartButton}
        <button
          type="button"
          onClick={onCheckoutClick}
          className={`${
            variant === "popover" ? "py-1.5 px-3 text-sm" : "py-2 px-4"
          } bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors font-medium`}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
