import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { SignInForm } from "@/components/forms/sign-in-form";
import { Head } from "@/components/head";
import { useSession } from "@/lib/better-auth";

const SignInPage = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (session && !isPending) {
      router.push("/checkout/details/address");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <>
      <Head
        title="Sign In - Madras Bistro, Authentic South Indian Cuisine"
        description="Sign in for an account at Madras Bistro"
      />
      <SignInForm />
    </>
  );
};

export default SignInPage;
