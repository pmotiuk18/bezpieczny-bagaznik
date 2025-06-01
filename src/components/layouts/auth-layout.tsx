import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { useSession } from "../../lib/better-auth";
import { CheckoutHeader } from "../checkout-header";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (session?.session && !isPending) {
      const redirectPath = router.query.redirect as string | undefined;

      router.push(redirectPath ?? "/checkout/details/address");
    }
  }, [isPending, router, session]);

  return (
    <>
      <CheckoutHeader showCart={false} />
      <div>
        <div className="flex flex-col md:flex-row h-screen w-screen relative">
          <div className="hidden md:flex items-center justify-end w-full md:w-1/2 h-full px-16 xl:px-24 relative">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/15750.jpg"
                alt="Authentication background"
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
