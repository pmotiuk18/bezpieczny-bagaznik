"use client";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

import { CartDetails } from "@/components/cart";

import Ig from "../../public/images/ig.png";
import Logo from "../../public/images/Logo-BB.png";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/o-nas", label: "O Nas" },
  { href: "/zestawy-rowery", label: "Polecane zestawy - rowery" },
  { href: "/zestawy-boxy", label: "Polecane zestawy - boxy" },
  { href: "/miejsca-pod-wypady", label: "Miejsca pod wypady" },
  { href: "/kontakt", label: "Kontakt" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const messages: string[] = ["🚚 Darmowa dostawa!", "⏳ 2-3 dni robocze!"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % messages.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-white shadow-md relative z-50 px-4">
      {pathname === "/products-all" && (
        <div className="bg-gray-900 text-center text-white py-[2px]">
          {messages[currentText]}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              <Image
                src={Logo}
                alt="Saferack Logo"
                width={60}
                height={60}
                className="p-2 object-cover rounded-full"
              />
            </Link>
          </div>

          <Link
            href="tel:+48576430114"
            className="text-black text-xs flex items-center gap-2"
          >
            <PhoneIcon />
            <span className="text-[9px] text-gray-700 font-semibold">
              576 430 114
            </span>
          </Link>

          <div className="hidden md:flex space-x-4 items-center text-xs">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-900 hover:text-white border-2 border-gray-900 hover:bg-gray-900 rounded-xl px-2"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile / icon section */}
          <div className="flex gap-2 items-center">
            <Link
              href="/blog"
              className="flex flex-col items-center text-[9px] text-center"
            >
              <img src="/images/blog.svg" alt="Blog" className="w-6 h-6" />
              <span>
                Blog
                <br />
                Aktualności
              </span>
            </Link>
            <Link
              href="/keys"
              className="flex flex-col items-center text-[9px] text-center"
            >
              <img src="/images/keys.png" alt="Klucze" className="w-6 h-6" />
              <span>
                Klucze
                <br />
                Zamki
              </span>
            </Link>
            <Link
              href="/serwis"
              className="flex flex-col items-center text-[9px] text-center"
            >
              <img
                src="/images/repair-kopia.png"
                alt="Serwis"
                className="w-6 h-6"
              />
              <span>
                Serwis
                <br />
                Wypożyczalnia
              </span>
            </Link>
            <Popover className="relative flex flex-col items-center text-[9px] text-center">
              <PopoverButton
                className="btn-sm cursor-pointer relative outline-none border-none"
                aria-label="Open cart popover"
              >
                <img
                  src="/images/shopping-cart.png"
                  alt="Sklep"
                  className="w-8 h-8"
                />
                <span>Cart</span>
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
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden text-gray-900 hover:text-red-700 focus:outline-none transition duration-300 ease-in-out"
              aria-label="Toggle menu"
            >
              <motion.svg
                initial={false}
                animate={isOpen ? "open" : "closed"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23 23"
                className="h-8 w-8 cursor-pointer"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  d="M 2 9.423 L 20 9.423"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      {/* 🚀 Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="h-screen flex flex-col space-y-4 px-4 mt-6 text-center bg-white py-6 shadow-inner"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="w-full flex justify-center items-center py-3 text-center text-gray-900 border-b hover:text-blue-500"
              >
                {label}
              </Link>
            ))}
            <div className="flex justify-center items-center gap-2 pt-6">
              <Image src={Ig} alt="Instagram" width={40} height={40} />
              <a
                href="https://www.instagram.com/saferack_pl/"
                className="text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                saferack_pl
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export { Navbar };
