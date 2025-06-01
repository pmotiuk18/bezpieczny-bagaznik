import Link from "next/link";

import Logo from "./logo";

const Footer = () => (
  <footer className="relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px">
        {/* Footer illustration */}
        <div className="pointer-events-none -z-1" aria-hidden="true">
          <svg
            className="absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40"
            width="800"
            height="264"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="400"
              cy="400"
              r="400"
              fill="url(#footerglow_paint0_radial)"
              fillOpacity=".4"
            />
            <defs>
              <radialGradient
                id="footerglow_paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(90 0 400) scale(315.089)"
              >
                <stop stopColor="#3ABAB4" />
                <stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Top area: Blocks */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
          {/* 1st block */}
          <div className="md:col-span-2 lg:col-span-3">
            {/* Logo */}
            <Link className="inline-block" href="/" aria-label="Madras Bistro">
              <Logo />
            </Link>
          </div>

          {/* 2nd, 3rd, and 4th blocks */}
          <div className="md:col-span-10 lg:col-span-9 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Navigation Links */}
            <div className="text-sm">
              <h6 className="mb-2 font-red-hat-display font-black text-xl">
                Navigation
              </h6>
              <ul>
                <li className="mb-1">
                  <Link
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="/our-story"
                  >
                    Our Story
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="/menu"
                  >
                    Menu
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="/OnlineOrderPage"
                  >
                    Order Online
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="text-sm">
              <h6 className="mb-2 font-red-hat-display font-black text-xl">
                Contact
              </h6>
              <ul>
                <li className="mb-1">
                  <p className="text-gray-600 dark:text-gray-400">
                    Plac Bohaterów Getta 2<br />
                    30-547 Kraków
                  </p>
                </li>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="tel:+48729333644"
                  >
                    +48 729 333 644
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                    href="mailto:contact@madrasbistro.pl"
                  >
                    contact@madrasbistro.pl
                  </a>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="text-sm">
              <h6 className="mb-2 font-red-hat-display font-black text-xl">
                Opening Hours
              </h6>
              <ul>
                <li className="mb-1 text-gray-600 dark:text-gray-400">
                  Monday - Closed
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-400">
                  Tuesday: 11:00 - 22:00
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-400">
                  Wednesday: 11:00 - 22:00
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-400">
                  Thursday: 11:00 - 22:00
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-400">
                  Friday: 11:00 - 22:00
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-400">
                  Saturday: 11:00 - 22:00
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-400">
                  Sunday: 11:00 - 22:00
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between">
          {/* Social links */}
          <ul className="flex mb-4 md:order-2 md:ml-4 md:mb-0">
            <li className="ml-4">
              <a
                className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                href="https://www.facebook.com/madrasBistro"
                aria-label="Facebook"
                target="_blank"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                href="https://www.instagram.com/madrasbistro/"
                aria-label="Instagram"
                target="_blank"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.145" cy="11.892" r="1" />
                  <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                  <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Middle links */}
          <div className="text-sm md:order-1 text-gray-700 mb-2 md:mb-0">
            <Link
              className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
              href="/terms-and-conditions"
            >
              Terms and Conditions
            </Link>{" "}
            ·{" "}
            <Link
              className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* Attribution bar */}
    <div className="bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-3 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} THE MADRAS SPÓŁKA Z OGRANICZONĄ
            ODPOWIEDZIALNOŚCIĄ. All rights reserved.
          </div>
          <p className="text-sm text-gray-400 text-center sm:text-left">
            Made with ❤️ by{" "}
            <a
              href="https://abhishek.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-400 transition duration-150 ease-in-out"
            >
              Abhishek
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export { Footer };
