"use client";

import { useAPI } from "@shophost/react-sdk";
import { Order } from "@shophost/rest-api/schemas";
import { useQuery } from "@tanstack/react-query";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useEffect } from "react";

import { CheckoutHeader } from "@/components/checkout-header";
import {
  TrackingStep,
  type TrackingStepProps,
} from "@/components/tracking-step";
import { useTranslation } from "@/lib/contexts/translation-context";

const LoadingShimmer = () => (
  <>
    <CheckoutHeader />
    <div className="flex flex-col md:flex-row h-screen w-screen relative">
      <div className="hidden md:flex items-center justify-end w-full md:w-1/2 h-full px-16 xl:px-24 bg-gray-900 md:overflow-y-auto">
        <div className="w-96 animate-fade">
          <div className="pl-6">
            <div className="px-7 pt-10 pb-0 md:pt-0 md:px-0">
              {/* Shimmer for items */}
              {[1, 2].map((index) => (
                <div
                  key={index}
                  className="flex items-center w-full mb-5 sm:mb-7"
                >
                  <div className="w-14 sm:w-32 h-10 sm:h-24 overflow-hidden rounded-lg bg-gray-700 animate-pulse"></div>
                  <div className="pl-3 md:pl-5 w-full">
                    <div className="h-4 bg-gray-700 rounded-sm w-3/4 mb-2 animate-pulse"></div>
                    <div className="h-3 bg-gray-700 rounded-sm w-1/2 mb-2 animate-pulse"></div>
                    <div className="h-3 bg-gray-700 rounded-sm w-1/4 animate-pulse"></div>
                  </div>
                </div>
              ))}
              <hr className="opacity-10 my-4 sm:my-4" />
              <div className="mt-3 flex items-center">
                <div className="h-3 bg-gray-700 rounded-sm w-20 animate-pulse"></div>
                <div className="h-3 bg-gray-700 rounded-sm w-16 ml-auto animate-pulse"></div>
              </div>
              <div className="mt-3 flex items-center">
                <div className="h-3 bg-gray-700 rounded-sm w-16 animate-pulse"></div>
                <div className="h-3 bg-gray-700 rounded-sm w-16 ml-auto animate-pulse"></div>
              </div>
              <hr className="opacity-10 my-4 sm:my-4" />
              <div className="mt-4 flex justify-between">
                <div className="h-5 bg-gray-700 rounded-sm w-16 animate-pulse"></div>
                <div className="h-5 bg-gray-700 rounded-sm w-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start 2xl:items-start w-full md:w-1/2 h-full px-6 sm:px-12 xl:px-24 py-8 md:overflow-y-auto relative">
        <div className="md:my-auto animate-fade w-full md:max-w-[432px]">
          <div className="h-8 bg-gray-200 rounded-sm w-64 mb-4 animate-pulse"></div>
          <div className="mb-8">
            <div className="h-4 bg-gray-200 rounded-sm w-48 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded-sm w-40 animate-pulse"></div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>

              {/* Shimmer for timeline steps */}
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="ml-9 mb-8 relative">
                  <div className="absolute -left-9 mt-1.5">
                    <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>
                  </div>
                  <div className="h-5 bg-gray-200 rounded-sm w-40 mb-2 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded-sm w-64 mb-2 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded-sm w-24 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default function CheckoutPage() {
  const { client } = useAPI();
  const params = useParams<{ orderId: string }>();
  const orderId = params?.orderId;
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation();

  useEffect(() => {
    if (searchParams?.get("clearCart") === "true" && pathname) {
      localStorage.removeItem("shophost-cart");

      // Create new URLSearchParams without clearCart
      const newSearchParams = new URLSearchParams(
        Array.from(searchParams.entries())
      );
      newSearchParams.delete("clearCart");

      // Construct new URL with remaining parameters
      const newUrl = newSearchParams.toString()
        ? `${pathname}?${newSearchParams.toString()}`
        : pathname;

      router.replace(newUrl);
    }
  }, [searchParams, router, pathname]);

  const { data, isLoading, error } = useQuery<Order>({
    queryKey: ["order", orderId],
    refetchInterval: ({ state }) => {
      if (
        state.data?.status !== "completed" &&
        state.data?.status !== "cancelled"
      ) {
        return 30 * 1000;
      }

      return false;
    },
    queryFn: async () => {
      const { status, body } = await client.order.getOrder({
        params: {
          id: orderId!, // Replace with the actual order ID
          organizationId: process.env.NEXT_PUBLIC_ORGANIZATION_ID!, // Organization ID from env
        },
      });

      if (status !== 200) {
        throw new Error("Failed to fetch shipping address");
      }

      return body;
    },
  });

  if (!data || isLoading) {
    return <LoadingShimmer />;
  }

  const { status } = data;

  const trackingSteps: TrackingStepProps[] = [
    {
      title: t("orderTracking.orderPlaced"),
      description: t("orderTracking.orderPlacedDesc"),
      date: new Date(data.expiresAt),
      active: false,
    },
    {
      title: t("orderTracking.orderAccepted"),
      description: t("orderTracking.orderAcceptedDesc"),
      date: data.acceptedAt,
      active: !data.acceptedAt,
    },
    {
      title: t("orderTracking.readyForDispatch"),
      description: t("orderTracking.readyForDispatchDesc"),
      date: data.readyForDispatchAt,
      active: status === "accepted",
    },
    {
      title: t("orderTracking.orderDispatched"),
      description: t("orderTracking.orderDispatchedDesc"),
      date: data.dispatchedAt,
      active: status === "ready-for-dispatch",
    },
    {
      title: t("orderTracking.orderDelivered"),
      description: t("orderTracking.orderDeliveredDesc"),
      date: data.completedAt,
      active: status === "dispatched",
      showConfetti: true,
    },
  ];

  // Add cancelled step if order is cancelled
  if (data.status === "cancelled") {
    trackingSteps.push({
      title: t("orderTracking.orderCancelled"),
      description: t("orderTracking.orderCancelledDesc"),
      date: data.cancelledAt,
      active: !!data.cancelledAt,
      cancelled: true,
    });
  }

  return (
    <>
      <CheckoutHeader totalOverride={data.payment.total} />
      <div>
        <div className="flex flex-col md:flex-row h-screen w-screen relative">
          <div className="hidden md:flex items-center justify-end w-full md:w-1/2 h-full px-16 xl:px-24 bg-gray-900 md:overflow-y-auto">
            <div className="w-96 animate-fade">
              <div className="pl-6">
                <div className="px-7 pt-10 pb-0 md:pt-0 md:px-0">
                  <div className="my-3 sm:my-6 sm:pb-1">
                    {data.items.map((item, index) => {
                      const translation = item.translations.find(
                        (t) => t.locale === "en"
                      );

                      return (
                        <div key={index}>
                          <div className="flex items-center w-full mb-5 sm:mb-7">
                            <div className="w-14 sm:w-32 h-10 sm:h-24 overflow-hidden rounded-lg">
                              <img
                                src={
                                  item.image?.url ||
                                  "https://via.placeholder.com/150"
                                }
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="pl-3 md:pl-5">
                              <div className="flex text-white text-xs sm:text-base font-black items-center font-red-hat-display">
                                {translation?.title}{" "}
                                <span className="text-white text-xs opacity-50 whitespace-nowrap hidden sm:flex items-center ml-1">
                                  (x {item.quantity})
                                </span>
                              </div>
                              {translation?.subtitle && (
                                <div className="text-white text-xs opacity-50">
                                  {translation.subtitle}
                                </div>
                              )}
                              <div className="text-white text-xs opacity-50 whitespace-nowrap sm:block hidden">
                                {t("orderTracking.price")}: PLN {item.unitPrice}
                              </div>
                              <div className="text-white text-sm font-black whitespace-nowrap mt-2 sm:block hidden font-red-hat-display">
                                PLN {item.unitPrice}
                              </div>
                            </div>
                            <div className="ml-auto pl-4 text-right sm:hidden">
                              <div className=" text-white text-sm font-semibold whitespace-nowrap">
                                PLN {item.totalPrice}
                              </div>
                              <div className="text-white text-xs opacity-50 whitespace-nowrap">
                                {t("orderTracking.quantity")}: {item.quantity}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <hr className="opacity-10 my-4 sm:my-4" />
                  <div className="mt-3 flex items-center">
                    <div className="text-sm text-white opacity-75">
                      {t("orderTracking.subtotal")}
                    </div>
                    <div className="text-sm text-white opacity-75 ml-auto">
                      PLN {data.payment.subtotal}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center">
                    <div className="text-sm text-white opacity-75">
                      {t("checkout.delivery")}
                    </div>
                    <div className="text-sm text-white opacity-75 ml-auto">
                      PLN {data.payment.shipping}
                    </div>
                  </div>
                  <hr className="opacity-10 my-4 sm:my-4" />
                  <div className="mt-4 flex justify-between">
                    <div className="text-lg text-white font-black font-red-hat-display">
                      {t("orderTracking.total")}
                    </div>
                    <div className="text-lg text-white font-black font-red-hat-display">
                      PLN {data.payment.total}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-14 w-full">
                  {t("orderTracking.poweredBy")}{" "}
                  <a
                    href="https://shophost.io"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400"
                  >
                    shophost.io
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start 2xl:items-start w-full md:w-1/2 h-full px-6 sm:px-12 xl:px-24 py-8 md:overflow-y-auto relative">
            <div className="md:my-auto animate-fade w-full md:max-w-[432px] pt-14 sm:pt-0">
              <h1 className="h3 mb-1 font-red-hat-display">
                {t("checkout.yourOrder")}
              </h1>
              <div className="mb-8">
                <p className="text-sm font-medium text-gray-500">
                  {t("orderTracking.reference")}: {data.referenceId}
                </p>
                <p className="text-sm font-medium text-gray-500">
                  {t("orderTracking.status")}:{" "}
                  <span
                    className={`capitalize font-semibold ${
                      data.status === "cancelled"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {data.status}
                  </span>
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="relative">
                  {/* Timeline track */}
                  <div
                    className="absolute left-4 top-0 w-0.5 bg-gray-200"
                    style={{
                      height: `calc(100% - ${
                        trackingSteps.length > 1 ? "4rem" : "0rem"
                      })`,
                    }}
                  ></div>

                  {/* Tracking steps */}
                  {trackingSteps.map((step, index) => (
                    <TrackingStep key={index} {...step} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
