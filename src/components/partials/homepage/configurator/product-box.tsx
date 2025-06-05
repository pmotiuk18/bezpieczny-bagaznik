"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import imgmissing from "../../../../../public/bazowy.png";

// lokalny fallback

interface ProductBoxProps {
  title: string;
  description: string;
  image?: string;
  path: string;
  price?: string | number;
  newProduct?: string;
  id?: string; // Adding id property since it's used in ProductGrid
}

export default function ProductBox({
  title,
  description,
  image,
  path,
  price,
  newProduct,
}: ProductBoxProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | typeof imgmissing>(
    image || imgmissing
  );

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      <Link href={path || "/"}>
        <div
          className="relative h-60 bg-gray-100 flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={typeof imgSrc === "string" ? imgSrc : imgSrc?.src}
            alt={title}
            onError={() => setImgSrc(imgmissing)}
            width={200}
            height={200}
            className="rounded-xl"
          />
          {newProduct && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow">
              {newProduct}
            </div>
          )}
        </div>
        <div className="p-4 text-center">
          <h2 className="text-lg font-semibold mb-1 text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {description}
          </p>
          <div className="flex justify-center gap-2 items-center">
            {price && (
              <span className="text-sm font-bold text-white bg-gray-800 px-3 py-1 rounded-full">
                Cena: {price} zł
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
