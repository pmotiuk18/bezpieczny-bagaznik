import {
  Badge,
  Button,
  RadioCardGroup,
  RadioCardGroupIndicator,
  RadioCardItem,
  useAPI,
  useCart,
} from "@shophost/react-sdk";
import { ShippingMethod } from "@shophost/rest-api/schemas";
import { PaymentMethodDetails } from "@shophost/rest-api/schemas";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { cx } from "../../lib/utils";

interface ShippingAndPaymentFormProps {
  shippingMethods: ShippingMethod[];
  paymentMethods: PaymentMethodDetails[];
}

const ShippingAndPaymentForm: React.FC<ShippingAndPaymentFormProps> = ({
  shippingMethods,
  paymentMethods,
}) => {
  const router = useRouter();
  const { client } = useAPI();
  const {
    items,
    shippingMethod,
    paymentMethod,
    setPaymentMethod,
    setShippingMethod,
  } = useCart();

  const createOrder = useMutation({
    mutationFn: async () => {
      if (!shippingMethod) {
        throw new Error("Please select a shipping method");
      }

      if (!paymentMethod) {
        throw new Error("Please select a payment method");
      }

      const { body, status } = await client.order.createOrder({
        params: {
          organizationId: process.env.NEXT_PUBLIC_ORGANIZATION_ID!,
        },
        body: {
          items,
          shippingMethodId: shippingMethod?.id,
          fulfilmentMethod: "delivery",
          payment: {
            provider: paymentMethod.provider,
            method: paymentMethod.method,
          },
          checkoutBaseUrl: `${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
        },
      });

      if (status !== 201) {
        throw new Error("Failed to fetch shipping methods");
      }

      if (body.redirectUrl) {
        window.location.href = body.redirectUrl;
      }

      return body;
    },
  });

  const handleConfirmClick = () => {
    createOrder.mutate();
  };

  useEffect(() => {
    if (shippingMethods.length === 1) {
      setShippingMethod(shippingMethods[0]);
    }
  }, [setShippingMethod, shippingMethods]);

  return (
    <>
      <div className="flex flex-col gap-1">
        <h2 className="text-[32px] font-red-hat-display font-black">
          Shipping Method
        </h2>
        <p className="text-gray-500">Select a shipping method</p>
      </div>
      <RadioCardGroup
        className="flex flex-col gap-2"
        value={shippingMethod?.id}
      >
        {shippingMethods.map((sm) => (
          <RadioCardItem
            key={sm.id}
            value={sm.id}
            disabled={!sm.eligibleShippingZone}
            onClick={() => setShippingMethod(sm)}
          >
            <div
              className={cx("flex items-center gap-3", {
                "opacity-60 cursor-not-allowed": !sm.eligibleShippingZone,
              })}
            >
              <RadioCardGroupIndicator />
              <div>
                <div>
                  <div className="flex items-center">
                    <span className="leading-5 font-red-hat-display font-black mr-2">
                      {sm.title} ({sm.providerName})
                    </span>
                    {!sm.eligibleShippingZone && (
                      <Badge variant="error">Not Available</Badge>
                    )}
                  </div>
                  {sm.eligibleShippingZone && (
                    <p className="text-xs font-medium text-gray-500 mt-0.5">
                      Shipping Fee: {sm.eligibleShippingZone.price} zł <br />
                      ETA: {sm.eligibleShippingZone.eta}
                    </p>
                  )}
                  {!sm.eligibleShippingZone && (
                    <p className="mt-0.5 text-xs text-gray-500">
                      Sorry, this address is too far for delivery <br /> from
                      our store.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </RadioCardItem>
        ))}
      </RadioCardGroup>
      <div className="flex flex-col gap-1 mt-3">
        <h2 className="text-[32px] font-red-hat-display font-black">
          Payment Method
        </h2>
        <p className="text-gray-500">Select a payment method</p>
      </div>
      <RadioCardGroup className="flex flex-col gap-3" value={paymentMethod?.id}>
        {paymentMethods.map((pm) => (
          <RadioCardItem
            key={pm.id}
            value={pm.id}
            onClick={() => setPaymentMethod(pm)}
          >
            <div className={cx("flex items-center gap-3")}>
              <RadioCardGroupIndicator />
              <div>
                <p className="font-red-hat-display font-black mr-2 capitalize">
                  {pm.method}
                </p>
                <p className="text-xs font-medium text-gray-500 capitalize">
                  {pm.provider} • {pm.description}
                </p>
              </div>
            </div>
          </RadioCardItem>
        ))}
      </RadioCardGroup>
      {createOrder.error && (
        <div className="p-4 mt-2 rounded-lg bg-red-50 text-red-700">
          <p className="text-sm">{createOrder.error.message}</p>
        </div>
      )}
      <div>
        <p className="text-sm text-gray-500 mt-2 block">
          By confirming this order you agree to our{" "}
          <Link href="/terms-and-conditions" className="text-teal-500 mr-1">
            Terms & Conditions
          </Link>
          and{" "}
          <Link href="/privacy-policy" className="text-teal-500 mr-1">
            Privacy Policy
          </Link>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-2 w-full mt-3">
        <Button
          variant="secondary"
          className="shadow-none"
          onClick={() => router.push("/checkout/details/address")}
        >
          Back
        </Button>
        <Button
          className="shadow-none bg-teal-500 hover:bg-teal-400 text-white"
          onClick={handleConfirmClick}
          isLoading={createOrder.isPending}
        >
          Pay & Confirm
        </Button>
      </div>
    </>
  );
};

export { ShippingAndPaymentForm };
