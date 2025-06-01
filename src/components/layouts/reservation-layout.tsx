import { useOrganization } from "@shophost/react-sdk";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { useSession } from "../../lib/better-auth";
import { CheckoutHeader } from "../checkout-header";

interface ReservationLayoutProps {
  children: React.ReactNode;
}

export const ReservationLayout: React.FC<ReservationLayoutProps> = ({
  children,
}) => {
  const router = useRouter();
  const { organization, loading: isOrganizationLoading } = useOrganization();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!session?.session && !isPending) {
      router.push(`/auth/sign-in?redirect=${router.asPath}`);
    }
  }, [isPending, router, session]);

  if (isOrganizationLoading || isPending) {
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

  if (!organization?.configuration.isAcceptingOrders) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900 text-center animate-fade-in">
        <div className="relative z-10 max-w-[800px] px-10">
          <h1 className="text-2xl sm:text-3xl font-black font-red-hat-display text-white">
            Unfortunately, We&apos;re currently not taking online reservations.
          </h1>
          <p className="text-gray-100 font-medium mt-3 text-lg mt-">
            Please contact us directly for any inquiries. <br /> +48 729 333 644{" "}
            <br /> contact@madrasbistro.pl
          </p>
          <Link
            className="btn-sm mt-6 text-white bg-teal-500 hover:bg-teal-400 rounded-lg shrink-0"
            href="/"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <CheckoutHeader showCart={false} />
      <div>
        <div className="flex flex-col md:flex-row h-screen w-screen relative">
          <div className="hidden md:flex items-center justify-end w-full md:w-1/2 h-full px-16 xl:px-24 relative">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/1475.jpg"
                alt="Reservation background"
                fill
                className="object-cover brightness-50"
                priority
              />
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
