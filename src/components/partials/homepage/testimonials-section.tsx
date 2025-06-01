import Image from "next/image";
import React from "react";

import { useTranslation } from "../../../lib/contexts/translation-context";

type Testimonial = {
  name: string;
  company: string;
  companyUrl: string;
  text: string;
};

const Avatar = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-teal-300 text-white font-semibold text-xs mr-2">
      {initials}
    </div>
  );
};

const testimonials: Testimonial[] = [
  {
    name: "Konrad Górski",
    company: "Appy.com",
    companyUrl: "#0",
    text: "Warte odwiedzenia bistro dla fanów indyjskich smaków. Serwuje się tu kuchnię indyjską oraz z północy Sri Lanki. Zjadłem tu pyszny milk chicken z aromatycznym ryżem jeera. Bistro jest małe (3 stoliki) i skromne, ale można posłuchać hitów indyjskiej muzyki.",
  },
  {
    name: "Sophia Mackney",
    company: "Nobi Bank",
    companyUrl: "#0",
    text: "My husband and I chanced upon this restaurant last Thursday whilst on a short break to Krakow from the UK. This small eatery with just 2 or 3 tables is run by the very friendly and obliging owner/chef and is conveniently located facing Ghetto Heroes Square. The Masala Uttapam, Masala Dosa, Kerala Chicken Curry, Chicken Roast and Masala Chai that we had were absolutely delicious. I highly recommend this restaurant to any lovers of South Indian food.",
  },
  {
    name: "Sridevi Madbhavi",
    company: "Sync",
    companyUrl: "#0",
    text: "Absolutely mouthwatering food! The owner (also the chef) is extremely passionate about the customers experience, and you can feel his expertise in every bite. Highly recommend the ghee dosa (he made it extra crispy for us on request). It tastes like home, is SO authentic. The only downside is that I'll miss the food terribly when I leave Kraków!",
  },
  {
    name: "Bijeesh KB",
    company: "Appicu",
    companyUrl: "#0",
    text: "If you're looking for a place that serves real Malabar food, this is definitely the spot. Highly recommended for anyone craving a taste of home!",
  },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-18">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-6">
            <h2 className="h2 font-red-hat-display mb-4">
              {t("testimonialsSection.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t("testimonialsSection.description")}
            </p>
          </div>
          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-1 lg:gap-12 items-start sm:max-w-none md:max-w-2xl lg:max-w-none md:mt-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-left">
                <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                  "{testimonial.text}"
                </blockquote>
                <div className="font-red-hat-display font-bold mt-3 flex items-center">
                  <Avatar name={testimonial.name} />
                  <cite className="not-italic">{testimonial.name}</cite>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection };
