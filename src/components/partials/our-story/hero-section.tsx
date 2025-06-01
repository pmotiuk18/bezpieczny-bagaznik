import Image from "next/image";
import Link from "next/link";

import HeroBg from "../../../../public/images/2025-01-31.jpg";
import { useTranslation } from "../../../lib/contexts/translation-context";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content z-10">
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          src={HeroBg}
          width={1440}
          height={577}
          priority
          alt="Testimonials"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-white dark:from-gray-900"
          aria-hidden="true"
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-20 animate-fade-in">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <article className="max-w-3xl mx-auto">
            <header className="mb-8">
              {/* Title and excerpt */}
              <div className="text-center md:text-left">
                <h1 className="h1 font-red-hat-display mb-4">
                  {t("ourStory.title")}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 italic">
                  {t("ourStory.subtitle")}
                </p>
              </div>
              {/* Article meta */}
              <div className="md:flex md:items-center md:justify-between mt-5">
                {/* Author meta */}
                <div className="flex items-center justify-center">
                  {/*{post.metadata.authorImg && (*/}
                  {/*  <a href="#0">*/}
                  {/*    <Image*/}
                  {/*      className="rounded-full shrink-0 mr-3"*/}
                  {/*      src={post.metadata.authorImg}*/}
                  {/*      width={32}*/}
                  {/*      height={32}*/}
                  {/*      alt={post.metadata.author}*/}
                  {/*    />*/}
                  {/*  </a>*/}
                  {/*)}*/}
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">
                      {t("ourStory.by")}{" "}
                    </span>
                    <a
                      className="font-medium text-gray-800 dark:text-gray-300 hover:underline"
                      href="#0"
                    >
                      Livin Victor
                    </a>
                    <span className="text-gray-600 dark:text-gray-400">
                      {" "}
                      · 12.04.2020
                    </span>
                  </div>
                </div>
              </div>
            </header>
            <hr className="w-5 h-px pt-px bg-gray-400 dark:bg-gray-500 border-0 mb-8" />
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t("ourStory.paragraph1")}
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
              {t("ourStory.paragraph2")}
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
              {t("ourStory.paragraph3")}
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
              {t("ourStory.paragraph4")}
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
              {t("ourStory.paragraph5")}
            </p>{" "}
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
              {t("ourStory.paragraph6")}
            </p>
            <p className="font-medium text-gray-800 dark:text-gray-300 hover:underline text-lg italic mt-6">
              {t("ourStory.signature")}
            </p>
            <div className="mt-8">
              <Link
                className="btn text-white bg-teal-500 hover:bg-teal-400"
                href="/order-online"
              >
                {t("common.checkOurMenu")}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
