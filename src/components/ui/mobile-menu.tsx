"use client";

import { Transition } from "@headlessui/react";
import { useCart } from "@shophost/react-sdk";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { useTranslation } from "../../lib/contexts/translation-context";
import { LanguageSwitcher } from "./language-switcher";
import Logo from "./logo";

interface MobileMenuProps {
  isCartOpen: boolean;
  openCart: () => void;
}

export default function MobileMenu({ isCartOpen, openCart }: MobileMenuProps) {
  const { itemCount } = useCart();
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="inline-flex md:hidden">
      {/* Mobile lights switch */}
      <button
        className="cursor-pointer text-gray-900 rounded-full relative mr-4"
        aria-label="Open cart popover"
        onClick={openCart}
      >
        <ShoppingBagIcon className="h-6 w-6" strokeWidth="2.5px" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/* Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg no-scrollbar transform transition ease-out duration-200 data-enter:data-closed:-translate-x-full data-closed:opacity-0"
        >
          <div className="py-6 pr-4 pl-20 h-full">
            {/* Logo */}
            <Link
              href="/"
              className="inline-block mb-4"
              aria-label="Cruip"
              onClick={() => setMobileNavOpen(false)}
            >
              <Logo />
            </Link>

            {/* Language Switcher */}
            <div className="mb-4">
              <LanguageSwitcher />
            </div>

            {/* Links */}
            <ul className="flex flex-col h-full">
              <li>
                <Link
                  href="/our-story"
                  className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {t("common.ourStory")}
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {t("common.menu")}
                </Link>
              </li>
              <li>
                <Link
                  href="/book-a-table"
                  className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {t("common.reservations")}
                </Link>
              </li>
              <hr className="my-2 border-gray-200 dark:border-gray-700" />
              <li>
                <Link
                  href="/order-online"
                  className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {t("common.orderOnline")}
                </Link>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  );
}
