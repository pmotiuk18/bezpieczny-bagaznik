"use client";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { useCart } from "@shophost/react-sdk";
import { ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { CartDetails } from "@/components/cart";

export const Header = () => {
  const { itemCount } = useCart();

  return (
    <header className="w-full py-4 px-8 flex justify-between items-center border-b border-gray-200">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/next.svg"
            alt="Logo"
            width={100}
            height={24}
            className="dark:invert"
            priority
          />
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-500">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-500">
              Contact
            </Link>
          </li>
          <li>
            <Popover className="relative">
              <PopoverButton
                className="btn-sm cursor-pointer text-white bg-teal-500 hover:bg-teal-400 ml-6 rounded-full relative"
                aria-label="Open cart popover"
              >
                <ShoppingBagIcon className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </PopoverButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel className="absolute z-50 right-0 mt-2 w-90">
                  <CartDetails />
                </PopoverPanel>
              </Transition>
            </Popover>
          </li>
        </ul>
      </nav>
    </header>
  );
};
