"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const DobraCena = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 to-slate-700 min-h-screen text-white px-4 sm:px-6 py-10 sm:py-14 space-y-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center leading-tight">
          🚀 Najlepsze Rozwiązania 2025
        </h1>

        <section className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-semibold border-b border-slate-400 pb-3 text-center">
            💎 Najlepszy stosunek ceny do jakości
          </h2>

          <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Inter Pack Virgo G2
              </h3>
              <div className="overflow-hidden rounded-xl aspect-[4/3] mb-4">
                <Image
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                  src="https://www.interpack.eu/hpeciai/a14b0149940b5bd5a8ccdf5f727a8646/pol_pl_Bagaznik-dachowy-Inter-Pack-Virgo-IR-120-G2-na-relingi-zintegrowane-10681_2.jpg"
                  alt="Inter Pack Virgo G2"
                />
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed space-y-1">
                Bagażnik dachowy na: <br />
                • Reling otwarty (RR: 120cm, 135cm)
                <br />
                • Reling zintegrowany (IR: 110cm, 120cm, 135cm)
                <br />• Punkty dachowe (FP: 120cm, 135cm)
                <strong className="block mt-3 text-lg text-lime-400">
                  Cena: 439–459 zł
                </strong>
              </p>
              <span className="text-xs mt-3 block opacity-50">
                Źródło: interpack.eu
              </span>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Inter Pack Monsun
              </h3>
              <div className="overflow-hidden rounded-xl aspect-[4/3] mb-4">
                <Image
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                  src="https://www.interpack.eu/hpeciai/002b7c43954890513b8ea19897f20252/pol_pl_Box-dachowy-Inter-Pack-Monsun-L-czarny-metalik-10138_2.jpg"
                  alt="Inter Pack Monsun"
                />
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed space-y-1">
                Rozmiar M: 186cm / 470L
                <br />
                Rozmiar L: 206cm / 550L
                <br />
                Maks. dł. nart: M - 165cm, L - 185cm
                <br />
                Ładowność: 75kg
                <br />
                3-punktowy zamek, wzmacniany spód
                <strong className="block mt-3 text-lg text-lime-400">
                  Cena: 1700–1800 zł
                </strong>
              </p>
              <span className="text-xs mt-3 block opacity-50">
                Źródło: interpack.eu
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-lg sm:text-xl font-semibold text-lime-300 pt-6"
          >
            💰 Cena zestawu: ok. 2250 zł
          </motion.p>
        </section>
      </div>
    </>
  );
};

export default DobraCena;
