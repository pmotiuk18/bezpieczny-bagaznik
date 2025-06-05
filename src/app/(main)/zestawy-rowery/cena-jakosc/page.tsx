"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const DobraCena = () => {
  return (
    <>
      <div className="bg-gradient-to-tr from-black via-slate-900 to-slate-800 min-h-screen text-white px-4 sm:px-6 py-12 space-y-16 font-sans">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg"
        >
          🚴‍♂️ Najlepsze rowerowe rozwiązania 2025
        </motion.h1>

        <section className="max-w-6xl mx-auto space-y-10">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-center text-slate-100"
          >
            Jakość + Cena = 🚀
          </motion.h2>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="group relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-lime-300">
                  Inter Pack Virgo G2
                </h3>
                <div className="aspect-video overflow-hidden rounded-xl mb-5">
                  <Image
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://www.interpack.eu/hpeciai/a14b0149940b5bd5a8ccdf5f727a8646/pol_pl_Bagaznik-dachowy-Inter-Pack-Virgo-IR-120-G2-na-relingi-zintegrowane-10681_2.jpg"
                    alt="Inter Pack Virgo G2"
                  />
                </div>
                <p className="text-base text-slate-300 leading-relaxed">
                  Kompatybilność:
                  <br />• Reling otwarty (RR: 120cm, 135cm)
                  <br />• Reling zintegrowany (IR: 110cm, 120cm, 135cm)
                  <br />• Punkty dachowe (FP: 120cm, 135cm)
                </p>
              </div>
              <div className="mt-6">
                <strong className="block text-xl text-cyan-300">
                  Cena: 439–459 zł
                </strong>
                <span className="text-xs mt-1 block text-slate-500">
                  Źródło: interpack.eu
                </span>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="group relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-white/10"
            >
              <h3 className="text-2xl font-semibold mb-4 text-lime-300">
                Thule FreeRide 532
              </h3>
              <div className="aspect-video overflow-hidden rounded-xl mb-5">
                <Image
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://www.strefakierowcy.pl/img/product/3723/kind/2.jpg"
                  alt="Thule FreeRide 532"
                />
              </div>
              <p className="text-base text-slate-300 leading-relaxed">
                • Ładowność: 17 kg
                <br />
                • Wymiary: 149 × 21 × 8.4 cm
                <br />
                • Masa: 3.5 kg
                <br />
                • Max rozstaw osi: 1245 mm
                <br />• Koła: 16 - 29 cali
                <strong className="block mt-4 text-xl text-cyan-300">
                  Cena: 400 zł
                </strong>
              </p>
              <span className="text-xs mt-4 block text-slate-500">
                Źródło: interpack.eu
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center mt-10"
          >
            <p className="text-lg sm:text-xl text-lime-300 font-semibold">
              💰 Zestaw: ok. 800 zł + 400 zł za każdy dodatkowy uchwyt
            </p>
            <p className="text-sm text-slate-400 mt-2">
              * Najlepsza opcja dla 2–3 lub 4 rowerów na dachu
            </p>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default DobraCena;
