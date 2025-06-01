import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { SignUpForm } from "@/components/forms/sign-up-form";
import { Head } from "@/components/head";
import { useSession } from "@/lib/better-auth";

const SignUpPage = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (session && !isPending) {
      router.push("/checkout/details/customer-details");
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
        title="Sign Up - Madras Bistro, Authentic South Indian Cuisine"
        description="Sign up for an account at Madras Bistro"
      />
      <SignUpForm />
    </>
  );
};

export default SignUpPage;
