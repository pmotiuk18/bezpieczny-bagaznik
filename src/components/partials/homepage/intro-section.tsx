import Image from "next/image";

import { useTranslation } from "../../../lib/contexts/translation-context";

const IntroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gray-900 border-t border-transparent dark:border-gray-800">
      {/* Background gradient (dark version only) */}
      <div
        className="absolute inset-0 opacity-25 bg-linear-to-b from-gray-800 to-gray-900 pointer-events-none hidden dark:block"
        aria-hidden="true"
      ></div>
      {/* End background gradient (dark version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 items-start">
            {/* Left column - Text content */}
            <div className="text-left">
              <h2 className="h3 font-red-hat-display mb-4 text-gray-100">
                {t("introSection.title")}
              </h2>
              <p className="text-lg text-gray-400">
                {t("introSection.paragraph1")}
              </p>
              <p className="text-lg text-gray-400 mt-4">
                {t("introSection.paragraph2")}
              </p>
            </div>

            {/* Right column - Image grid */}
            <div className="div flex items-center h-full">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src="/images/2025-01-31.jpg"
                    alt="South Indian Dosa"
                    className="w-full h-full object-cover"
                    width={500}
                    height={667}
                  />
                </div>
                <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden translate-y-8">
                  <Image
                    src="/images/images285291634484998830082088.webp"
                    alt="South Indian Idli"
                    className="w-full h-full object-cover"
                    width={500}
                    height={667}
                  />
                </div>
                <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src="/images/image3-4.jpg"
                    alt="South Indian Sambar"
                    className="w-full h-full object-cover"
                    width={500}
                    height={667}
                  />
                </div>
                <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden translate-y-8">
                  <Image
                    src="/images/ixmmb8ufajq61.webp"
                    alt="South Indian Thali"
                    className="w-full h-full object-cover"
                    width={500}
                    height={667}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { IntroSection };
