import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "../../../lib/contexts/translation-context";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="md:min-h-[700px] flex items-center justify-center pt-24 md:pt-0">
          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h1 text-4xl lg:text-5xl mb-4 font-red-hat-display font-black">
                {t("hero.title")}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {t("hero.subtitle")}
              </p>
              {/* CTA form */}
              <form className="mt-6">
                <div className="flex flex-col sm:flex-row max-w-sm mx-auto sm:max-w-md md:mx-0">
                  <Link
                    className="btn text-white bg-teal-500 hover:bg-teal-400 rounded-lg shrink-0"
                    href="/order-online"
                  >
                    {t("common.orderNow")}
                  </Link>
                </div>
                {/* Success message */}
                {/* <p className="text-center md:text-left mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
              </form>
            </div>

            {/* Mobile mockup */}
            <div className="md:col-span-5 lg:col-span-5 text-center md:text-right md:-mt-20">
              <Image
                src="/images/masala-dosa.png"
                alt="Masala Dosa"
                width={600}
                height={600}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
