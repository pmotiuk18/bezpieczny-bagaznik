import { UploadedFile } from "@shophost/rest-api/schemas";
import cx from "classnames";
import Image from "next/image";
import React from "react";

interface CartItemProps {
  title: string;
  subtitle?: (string | null)[];
  image?: UploadedFile;
  price: string;
  quantity: number;
  remove: () => void;
  updateQuantity: (quantity: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  title,
  subtitle,
  image,
  price,
  quantity,
  remove,
  updateQuantity,
}) => {
  return (
    <div className={cx("p-1 mb-3 transition-shadow")}>
      <div className="grid grid-cols-5">
        {image && (
          <div className="shrink-0 w-full h-full mr-3 rounded-md overflow-hidden col-span-2">
            <Image
              width={100}
              height={100}
              src={image.url}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex-1 min-w-0 pl-4 col-span-3">
          <div>
            <h3 className="font-black text-slate-800 font-red-hat-display text-lg leading-tight text-left">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs font-medium text-gray-600 dark:text-gray-400 text-left">
                {subtitle}
              </p>
            )}
            <p className="text-xs font-medium text-gray-600 dark:text-gray-400 text-left">
              {price}
            </p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <button
                type="button"
                className="cursor-pointer w-7 h-6 flex items-center justify-center text-white bg-teal-500 hover:bg-teal-400 rounded-l-md text-sm transition-colors"
                onClick={() => {
                  if (quantity <= 1) {
                    return remove();
                  }

                  return updateQuantity(Math.max(1, quantity - 1));
                }}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="mx-2 text-xs font-medium text-gray-600 dark:text-gray-400">
                {quantity}
              </span>
              <button
                type="button"
                className="cursor-pointer w-7 h-6 flex items-center justify-center rounded-r-md text-sm text-white bg-teal-500 hover:bg-teal-400 transition-colors"
                onClick={() => updateQuantity(quantity + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
