import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { useCart } from "@shophost/react-sdk";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";

import { useTranslation } from "../../lib/contexts/translation-context";
import { CartDetails } from "../cart";
import { LanguageSwitcher } from "./language-switcher";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";

interface HeaderProps {
  isCartOpen: boolean;
  openCart: () => void;
}

const Header = ({ isCartOpen, openCart }: HeaderProps) => {
  const { itemCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-30 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-slate-100"
            : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-5">
              <Link href="/" className="block" aria-label="Cruip">
                <Logo />
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">
              {/* Desktop menu links */}
              <ul className="flex flex-wrap items-center font-medium ml-auto">
                <li>
                  <Link
                    href="/our-story"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  >
                    {t("common.ourStory")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  >
                    {t("common.menu")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/order-online"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  >
                    {t("common.orderOnline")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/book-a-table"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  >
                    {t("common.reservations")}
                  </Link>
                </li>
                {/*<li>*/}
                {/*  <Link*/}
                {/*    href="/blogs"*/}
                {/*    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"*/}
                {/*  >*/}
                {/*    Blogs*/}
                {/*  </Link>*/}
                {/*</li>*/}
              </ul>
              <ul className="flex justify-end flex-wrap items-center">
                <li className="mr-3">
                  <LanguageSwitcher />
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
            <MobileMenu isCartOpen={isCartOpen} openCart={openCart} />
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
