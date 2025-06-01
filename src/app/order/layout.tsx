import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { getSession } from "@/lib/better-auth";

const CheckoutDetailsLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: session } = await getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });

  if (!session?.session) {
    return redirect("/auth/sign-in");
  }

  return <>{children}</>;
};

export default CheckoutDetailsLayout;
