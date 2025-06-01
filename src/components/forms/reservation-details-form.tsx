"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, InputGroup, useCart } from "@shophost/react-sdk";
import {
  CreateReservation,
  CreateReservationSchema,
} from "@shophost/rest-api/schemas";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { shophost } from "../../lib/shophost.lib";

interface ShippingAddressFormProps {
  initialData: {
    firstname: string;
    lastname: string;
  };
  onSuccess?: (data: any) => void;
}

export const ReservationDetailsForm: React.FC<ShippingAddressFormProps> = ({
  initialData,
}) => {
  const { itemCount } = useCart();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(CreateReservationSchema),
    reValidateMode: "onChange",
    defaultValues: {
      firstname: initialData.firstname,
      lastname: initialData.lastname,
    },
  });

  const createReservationMutation = useMutation({
    mutationFn: async (data: CreateReservation) => {
      const { status, body } = await shophost.reservation.createReservation({
        body: data,
        params: {
          organizationId: process.env.NEXT_PUBLIC_ORGANIZATION_ID!,
        },
      });

      if (status !== 201) {
        throw new Error("Failed to create shipping address");
      }

      return body;
    },
    onSuccess: (data) => {
      router.push(`/reservations/${data.id}`);
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit((data) =>
            createReservationMutation.mutate(data)
          )}
        >
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
            <InputGroup
              name="guests"
              label="Number of Guests"
              type="number"
              className="col-span-4"
              placeholder="e.g. 2"
            />
            <InputGroup
              name="date"
              type="week-time"
              className="col-span-4 -mt-4"
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
              isLoading={createReservationMutation.isPending}
              disabled={itemCount === 0}
              loadingText="Saving..."
            >
              Send Request
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ReservationDetailsForm;
