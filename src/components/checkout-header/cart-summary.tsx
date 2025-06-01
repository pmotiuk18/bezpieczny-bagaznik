import {
  CartItems,
  formatPrice,
  useCart,
  useOrganization,
} from "@shophost/react-sdk";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartItemShimmer = () => (
  <div className="animate-pulse">
    {[1, 2].map((index) => (
      <div key={index} className="flex items-center w-full mb-5 sm:mb-7">
        <div className="w-14 sm:w-32 h-10 sm:h-24 overflow-hidden rounded-lg bg-white/10" />
        <div className="pl-3 md:pl-5 flex-1">
          <div className="h-4 bg-white/10 rounded-sm w-3/4 mb-2" />
          <div className="h-3 bg-white/10 rounded-sm w-1/2 mb-2" />
          <div className="text-white text-xs opacity-50 whitespace-nowrap sm:block hidden">
            <div className="h-3 bg-white/10 rounded-sm w-24 mb-2" />
          </div>
          <div className="text-white text-sm font-semibold whitespace-nowrap mt-2 sm:block hidden">
            <div className="h-4 bg-white/10 rounded-sm w-16" />
          </div>
        </div>
        <div className="ml-auto pl-4 text-right sm:hidden">
          <div className="h-4 bg-white/10 rounded-sm w-16 mb-2" />
          <div className="h-3 bg-white/10 rounded-sm w-20" />
        </div>
      </div>
    ))}
  </div>
);

const CartSummary = () => {
  const { total, subtotal, shipping, itemCount } = useCart();
  const { organization } = useOrganization();

  return (
    <div className="px-7 pt-10 pb-0 md:pt-0 md:px-0">
      <div className="my-3 sm:my-6 sm:pb-1">
        <CartItems
          emptyCartComponent={
            <div className="text-center py-6">
              <p className="text-white font-red-hat-display text-xl font-black mb-4">
                Your shopping cart is empty. Add some products to get started.
              </p>
              <Link
                href="/"
                className="text-white hover:text-white/80 underline text-sm"
              >
                View products
              </Link>
            </div>
          }
          loadingComponent={<CartItemShimmer />}
          renderItem={({
            title,
            subtitle,
            unitPrice,
            price,
            quantity,
            image,
          }) => (
            <div>
              <div className="flex items-center w-full mb-5 sm:mb-7">
                <div className="w-14 sm:w-32 h-10 sm:h-24 overflow-hidden rounded-lg">
                  <Image
                    width={100}
                    height={100}
                    src={image?.url || "https://via.placeholder.com/150"}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pl-3 md:pl-5">
                  <div className="flex font-red-hat-display h4 text-white text-sm sm:text-lg items-center">
                    {title}{" "}
                    <span className="text-white text-xs opacity-50 whitespace-nowrap hidden sm:flex items-center ml-1">
                      (x {quantity})
                    </span>
                  </div>
                  {subtitle &&
                    subtitle.map((text, index) => (
                      <div
                        className="text-white text-xs opacity-50"
                        key={index}
                      >
                        {text}
                      </div>
                    ))}
                  <div className="text-white text-xs opacity-50 whitespace-nowrap sm:block hidden">
                    Price: {unitPrice}
                  </div>
                  <div className="font-red-hat-display h4 text-white text-sm text-sm whitespace-nowrap mt-2 sm:block hidden">
                    {price}
                  </div>
                </div>
                <div className="ml-auto pl-4 text-right sm:hidden">
                  <div className="font-red-hat-display h4 text-white text-sm whitespace-nowrap">
                    {price}
                  </div>
                  <div className="text-white text-xs opacity-50 whitespace-nowrap">
                    Quantity: {quantity}
                  </div>
                </div>
              </div>
            </div>
          )}
        />
      </div>
      {itemCount !== 0 && (
        <>
          <hr className=" md:flex opacity-10 my-4 sm:my-4" />
          {organization ? (
            <>
              {typeof shipping === "number" && (
                <div className="mt-3 flex items-center">
                  <h2 className="text-xs xl:text-sm text-white opacity-40 font-red-hat-display">
                    Shipping
                  </h2>
                  <h3 className="text-xs xl:text-sm text-white opacity-40 ml-auto font-red-hat-display">
                    {formatPrice(
                      shipping,
                      organization.configuration.defaultCurrency
                    )}
                  </h3>
                </div>
              )}
              <div className="mt-3 flex items-center">
                <h2 className="text-xs xl:text-sm text-white opacity-40 font-red-hat-display">
                  Subtotal
                </h2>
                <h3 className="text-xs xl:text-sm text-white opacity-40 ml-auto font-red-hat-display">
                  {formatPrice(
                    subtotal,
                    organization.configuration.defaultCurrency
                  )}
                </h3>
              </div>
              {/* {discount ? (
            <div className="mt-3 flex items-center">
              <h2 className="text-xs xl:text-sm text-white opacity-40">Discount</h2>
              <h3 className="text-xs xl:text-sm text-white opacity-40 ml-auto">
                -{discount / 100} PLN
              </h3>
            </div>
          ) : null} */}
              <hr className=" md:flex opacity-10 my-4 sm:my-4" />
              <div className="mt-4 flex justify-between">
                <h2 className="text-sm xl:text-lg text-white font-black font-red-hat-display">
                  Total
                </h2>
                <h3 className="xl:text-lg text-white font-black font-red-hat-display">
                  {/*{discountedTotal < total && (*/}
                  {/*  <s className="opacity-50 mr-3">{total / 100} PLN</s>*/}
                  {/*)}*/}
                  {formatPrice(
                    total,
                    organization.configuration.defaultCurrency
                  )}
                </h3>
              </div>
            </>
          ) : (
            <>
              <div className="mt-3 flex items-center">
                <div className="h-4 w-20 bg-white/10 rounded-sm animate-pulse"></div>
                <div className="h-4 w-16 bg-white/10 rounded-sm animate-pulse ml-auto"></div>
              </div>
              <div className="mt-3 flex items-center">
                <div className="h-4 w-20 bg-white/10 rounded-sm animate-pulse"></div>
                <div className="h-4 w-16 bg-white/10 rounded-sm animate-pulse ml-auto"></div>
              </div>
              <hr className=" md:flex opacity-10 my-4 sm:my-4" />
              <div className="mt-4 flex justify-between">
                <div className="h-5 w-16 bg-white/10 rounded-sm animate-pulse"></div>
                <div className="h-5 w-24 bg-white/10 rounded-sm animate-pulse"></div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export { CartSummary };
