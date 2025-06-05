"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Mouse from "@/components/icons/mouse";

const Blog = () => {
  return (
    <main className="bg-[#f9f9f9] min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-3xl overflow-hidden p-6 md:p-10 flex flex-col items-center gap-6"
        >
          <Link
            href="/blog/r"
            className="flex flex-col items-center text-center gap-6"
          >
            <Mouse />
            <div className="text-lg md:text-2xl text-gray-800 font-serif font-light">
              Temat: <br />
              <span className="underline underline-offset-4 text-black font-medium">
                Regeneracja bagażnika bazowego Mont Blanc na reling otwarty
              </span>
            </div>
            <h2 className="text-xl font-semibold text-gray-600 mt-2">
              Przed vs. Po
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <Image
                width={1000}
                height={1000}
                src="/images/18.png"
                alt="Przed regeneracją"
                className="rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200"
              />
              <Image
                width={1000}
                height={1000}
                src="/images/2.10.png"
                alt="Po regeneracji"
                className="rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200"
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default Blog;
