"use client";

import { AuthPages } from "@shophost/react-sdk";
import { useParams } from "next/navigation";
import React from "react";

// export const metadata: Metadata = {
//   title: "Sign In - Bezpieczny Bagażnik, Authentic South Indian Cuisine",
//   description: "Sign in for an account at Bezpieczny Bagażnik",
// };

const Page = () => {
  const params = useParams();

  return <AuthPages />;
};

export default Page;
