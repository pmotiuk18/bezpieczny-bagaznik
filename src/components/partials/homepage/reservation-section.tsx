import Link from "next/link";
import React from "react";

import { useTranslation } from "../../../lib/contexts/translation-context";

export const ReservationSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gray-900 border-t border-transparent dark:border-gray-800">
      {/* Background gradient (dark version only) */}
      <div
        className="absolute inset-0 opacity-25 bg-linear-to-b from-gray-800 to-gray-900 pointer-events-none hidden dark:block"
        aria-hidden="true"
      ></div>
      {/* End background gradient (dark version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="h2 font-red-hat-display mb-4 text-gray-100">
            {t("reservationSection.title")}
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            {t("reservationSection.description")}
          </p>
          <Link
            href="/book-a-table"
            className="btn text-white bg-teal-500 hover:bg-teal-400 rounded-lg inline-flex items-center"
          >
            {t("common.makeReservation")}
          </Link>
        </div>
      </div>
    </section>
  );
};
