"use client";

import Image from "next/image";
import { useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
// Import Swiper modules
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import CarouselImage04 from "../../../../public/images/2025-01-31.jpg";
import CarouselImage01 from "../../../../public/images/image2-3-1024x684.jpg";
import CarouselImage02 from "../../../../public/images/image3-4.jpg";
import CarouselImage03 from "../../../../public/images/medu-vada-or-sambar-vada-a-popular-south-indian-food-served-with-different-chutney-700-249187728.jpg";

const carouselImages = [
  {
    image: CarouselImage01,
    alt: "Carousel item 01",
    category: "Creative Services",
  },
  {
    image: CarouselImage02,
    alt: "Carousel item 02",
    category: "Creative Services",
  },
  {
    image: CarouselImage03,
    alt: "Carousel item 03",
    category: "Creative Services",
  },
  {
    image: CarouselImage04,
    alt: "Carousel item 04",
    category: "Creative Services",
  },
];

const Gallery = () => {
  return (
    <section className="border-t border-gray-200 dark:border-gray-800">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 font-red-hat-display mb-4">
              Savor the Authentic Flavors of South India
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Indulge in a culinary journey to the heart of South India, where
              tradition meets taste. At Madras Bistro, we serve authentic South
              Indian delicacies crafted with passion and perfected over
              generations. From the spicy and aromatic sambar to the crispy and
              delightful dosas, our menu is a vibrant celebration of regional
              flavors.
            </p>
          </div>
        </div>

        {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
        {/* * Custom styles in src/css/additional-styles/theme.scss */}
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView="auto"
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          initialSlide={1}
          spaceBetween={24}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".carousel-next",
            prevEl: ".carousel-prev",
          }}
          className="carousel"
        >
          {/* Carousel items */}
          {carouselImages.map((item, index) => (
            <SwiperSlide key={index} className="max-w-lg">
              <Image
                className="transition-opacity duration-300"
                src={item.image}
                width={540}
                height={460}
                alt={item.alt}
              />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex grow">
                  <a
                    className="inline-flex btn-sm text-white bg-teal-500 hover:bg-teal-400 mx-auto self-center"
                    href="#0"
                  >
                    Learn more
                  </a>
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <a
                    className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900/50 hover:bg-gray-900 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    {item.category}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mt-12 md:mt-16">
            <button className="carousel-prev relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500/25 shadow-xl transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500/25 shadow-xl transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery };
