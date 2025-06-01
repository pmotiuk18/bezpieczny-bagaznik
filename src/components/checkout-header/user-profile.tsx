"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@shophost/react-sdk";
import { CircleChevronRightIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { signOut, useSession } from "../../lib/better-auth";

export const UserProfile = () => {
  const router = useRouter();
  const { data } = useSession();

  // Function to get user initials from name
  const getUserInitials = () => {
    if (!data?.user?.name) return "";

    const nameParts = data.user.name.split(" ");
    if (nameParts.length === 1) return nameParts[0].charAt(0);

    return `${nameParts[0].charAt(0)}${nameParts[nameParts.length - 1].charAt(0)}`;
  };

  const handleLogoutClick = async () => {
    await signOut();
    router.push("/auth/sign-in");
  };

  return (
    <div className="hidden md:block">
      <Popover>
        <PopoverTrigger className="flex items-center focus:outline-hidden group">
          {data?.user ? (
            <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-blue-500 text-white relative transition-transform duration-200 group-hover:scale-110 group-hover:ring-2 group-hover:ring-white/50 group-hover:ring-offset-1 group-hover:cursor-pointer">
              {data.user.image ? (
                <img
                  src={data.user.image}
                  alt={data.user.name || "User"}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="font-medium text-sm">{getUserInitials()}</span>
              )}
            </div>
          ) : (
            <div className="flex items-center text-white group-hover:text-blue-300 transition-colors duration-200">
              <UserIcon className="w-5 h-5 mr-1 group-hover:scale-110 transition-transform duration-200" />
              <span>Guest</span>
            </div>
          )}
        </PopoverTrigger>
        <PopoverContent
          className="w-32 min-w-32 p-0 py-1 data-[state=open]:animate-slideDownAndFade z-50"
          align="end"
          sideOffset={5}
          forceMount
        >
          {/* <a
            href="/orders"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Orders List
          </a> */}
          <button
            onClick={handleLogoutClick}
            className="block w-full z-50 text-center px-4 cursor-pointer py-1 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-center font-medium"
          >
            Logout
            <CircleChevronRightIcon className="w-4 h-4 ml-1" />
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
};
