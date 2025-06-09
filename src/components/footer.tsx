"use client";

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full py-6 px-8 border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">© 2023 My Shop. All rights reserved.</p>
          </div>
          <div className="flex gap-[24px] flex-wrap items-center justify-center">
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="/about"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              About Us
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="/terms"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Terms
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="/privacy"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};