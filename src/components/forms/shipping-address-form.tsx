"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  InputGroup,
  Label,
  LocationInput,
  useAPI,
  useCart,
} from "@shophost/react-sdk";
import {
  CreateShippingAddressInput,
  CreateShippingAddressSchema,
  ShippingAddress,
  UpdateShippingAddressInput,
} from "@shophost/rest-api/schemas";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface ShippingAddressFormProps {
  initialData: ShippingAddress | null;
  onSuccess?: (data: any) => void;
}

export const ShippingAddressForm: React.FC<ShippingAddressFormProps> = ({
  initialData,
}) => {
  const { itemCount } = useCart();
  const router = useRouter();
  const { client } = useAPI();

  const form = useForm({
    resolver: zodResolver(CreateShippingAddressSchema),
    reValidateMode: "onChange",
    defaultValues: initialData
      ? {
          firstname: initialData.firstname,
          lastname: initialData.lastname,
          phone: initialData.phone,
          addressLineOne: initialData.addressLineOne,
          placeId: initialData.placeId,
          doorNumber: initialData.doorNumber,
          zipCode: initialData.zipCode,
          city: initialData.city,
          country: initialData.country,
          deliveryInstructions: initialData.deliveryInstructions,
        }
      : undefined,
  });

  const placeIdValue = form.watch("placeId");
  const addressLineOneValue = form.watch("addressLineOne");

  useEffect(() => {
    (async () => {
      if (placeIdValue) {
        const { status, body } = await client.location.getPlaceDetails({
          params: {
            placeId: placeIdValue,
          },
        });

        if (status === 401) {
          return router.push("/auth/sign-in");
        }

        if (status !== 200) {
          throw new Error("Failed to fetch place details");
        }

        form.setValue("zipCode", body.zipCode, {
          shouldValidate: true,
          shouldDirty: true,
        });
        form.setValue("city", body.city, {
          shouldValidate: true,
          shouldDirty: true,
        });
        form.setValue("country", body.country, {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    })();
  }, [form, placeIdValue]);

  const createShippingAddressMutation = useMutation({
    mutationFn: async (data: CreateShippingAddressInput) => {
      const { status, body } = await client.shipping.createShippingAddress({
        body: data,
      });

      if (status !== 201) {
        throw new Error("Failed to create shipping address");
      }

      return body;
    },
    onSuccess: () => {
      router.push("/checkout/details/shipping-methods");
    },
  });

  const updateShippingAddressMutation = useMutation({
    mutationFn: async (data: UpdateShippingAddressInput) => {
      const { status, body } = await client.shipping.updateShippingAddress({
        body: data,
      });

      if (status !== 200) {
        throw new Error("Failed to update shipping address");
      }

      return body;
    },
    onSuccess: () => {
      return router.push("/checkout/details/shipping-methods");
    },
  });

  const handleSubmit = (
    data: CreateShippingAddressInput | UpdateShippingAddressInput
  ) => {
    if (initialData && !form.formState.isDirty) {
      return router.push("/checkout/details/shipping-methods");
    }

    const mutation = initialData
      ? updateShippingAddressMutation
      : createShippingAddressMutation;

    mutation.mutate(data as any);
  };

  return (
    <div className="flex flex-col gap-4">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="grid grid-cols-4 gap-x-4 gap-y-4 mt-3">
            <InputGroup
              name="firstname"
              label="First Name"
              type="text"
              className="col-span-2"
              placeholder="e.g. John"
            />
            <InputGroup
              name="lastname"
              label="Last Name"
              type="text"
              className="col-span-2"
              placeholder="e.g. Doe"
            />
            <InputGroup
              name="phone"
              label="Phone"
              type="phone-number"
              className="col-span-4"
              placeholder="e.g. +48 123 456 789"
            />
            <div className="col-span-4 md:col-span-3 text-sm text-gray-500">
              <Label
                htmlFor="address.addressLineOne"
                className="font-medium flex items-center justify-between"
              >
                Street Address
              </Label>
              <LocationInput
                onChange={(data) => {
                  form.setValue("addressLineOne", data.addressLineOne, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                  form.setValue("placeId", data.placeId, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }}
                value={addressLineOneValue}
              />
              {form.formState.errors.addressLineOne && (
                <p className="mt-1 text-sm text-red-500">
                  {form.formState.errors.addressLineOne.message}
                </p>
              )}
            </div>
            <InputGroup
              name="doorNumber"
              label="Door Number"
              type="text"
              className="md:col-span-1 col-span-2"
              placeholder="e.g. 123"
            />
            <InputGroup
              name="zipCode"
              label="Postal Code"
              type="text"
              className="col-span-2"
              placeholder="e.g. 12345"
            />
            <InputGroup
              name="city"
              label="City"
              type="text"
              className="col-span-2"
              placeholder="e.g. Kraków"
            />
            <InputGroup
              name="country"
              label="Country"
              type="country"
              className="col-span-2 md:col-span-4"
              disabled
            />
            <InputGroup
              name="deliveryInstructions"
              label="Notes / Instructions"
              type="textarea"
              className="col-span-4"
              placeholder="e.g. 4th floor, code 12345"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-2 w-full mt-8">
            <Button
              variant="secondary"
              className="shadow-none"
              type="button"
              onClick={() => router.push("/")}
            >
              Back
            </Button>
            <Button
              type="submit"
              className="shadow-none bg-teal-500 hover:bg-teal-400 text-white"
              isLoading={
                createShippingAddressMutation.isPending ||
                updateShippingAddressMutation.isPending
              }
              disabled={itemCount === 0}
              loadingText="Saving..."
            >
              Save & Continue
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ShippingAddressForm;
