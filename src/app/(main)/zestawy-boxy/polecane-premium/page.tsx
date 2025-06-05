"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Premium = (): React.ReactElement => {
  return (
    <>
      <div className="bg-[#0e0e0e] text-white px-6 py-20 font-serif min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-5xl md:text-6xl font-light tracking-wide text-white mb-16"
        >
          <span className="text-[#d6b46c]">Zestawy Premium</span> Boxów 2025
        </motion.h1>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 pb-20 border-b border-[#2c2c2c]">
          {/* Porsche Performance */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl font-semibold text-[#f5f5f5]">
              Porsche Performance
            </h2>
            <p className="text-gray-300 max-w-md mx-auto leading-relaxed text-sm">
              Ekskluzywny box dachowy zaprojektowany przez Porsche Design.
              <br />
              Wykończenie lakierem klasy premium, aerodynamiczny kształt,
              karbonowe detale.
              <br />
              Idealny do sportowych SUV-ów i coupe.
              <br />
              Pojemność: 520L.
            </p>
            <Image
              width={1000}
              height={1000}
              className="w-full max-w-md mx-auto rounded-3xl border border-[#3a3a3a] shadow-[0_0_30px_#00000088]"
              src="https://shop.porsche.com/_next/image?url=https%3A%2F%2Fassets-prod.porsche.com%2Fassets%2Ff05e6724-79b2-43e5-9eec-f5a4273dddfd.webp&w=2200&q=75"
              alt="Porsche Performance"
            />
            <span className="text-xs text-gray-500 italic">
              Źródło: shop.porsche.com
            </span>
          </motion.div>

          {/* Thule Vector Alpine */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl font-semibold text-[#f5f5f5]">
              Thule Vector Alpine
            </h2>
            <p className="text-gray-300 max-w-md mx-auto leading-relaxed text-sm">
              Najbardziej prestiżowy box od Thule – wyjątkowy wygląd i
              funkcjonalność.
              <br />
              Wnętrze z podświetleniem LED, wyściełane tkaniną premium.
              <br />
              Doskonały wybór do luksusowych aut rodzinnych i SUV-ów.
              <br />
              Pojemność: 430L.
            </p>
            <Image
              width={1000}
              height={1000}
              className="w-full max-w-md mx-auto rounded-3xl border border-[#3a3a3a] shadow-[0_0_30px_#00000088]"
              src="https://www.thule.com/-/p/ZqiEmuUg6P_EDFpoO7GMC_mpk01aUWX-f9UoXc_2Nac/rs:fit/f:avif/cb:1.2/q:80/h:1200/w:1200/plain/approved/std.lang.all/94/13/1389413.png"
              alt="Thule Vector Alpine"
            />
            <span className="text-xs text-gray-500 italic">
              Źródło: thule.com
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-[#f0f0f0] tracking-wide mb-4">
            Ceny zestawów:{" "}
            <span className="text-[#d6b46c]">7000 - 8000 zł</span>
          </p>
          <button className="mt-4 px-8 py-3 rounded-full bg-gradient-to-br from-[#d6b46c] to-[#c9a861] text-black font-medium shadow-xl hover:brightness-105 transition">
            Sprawdź dostępność
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Premium;
