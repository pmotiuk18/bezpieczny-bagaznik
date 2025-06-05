"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Pojemne = (): React.ReactElement => {
  return (
    <>
      <div className="bg-gradient-to-br from-black via-[#111133] to-black min-h-screen text-white px-4 py-12 font-mono">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] mb-10"
        >
          Pojemne Zestawy 2025
        </motion.h1>

        <section className="max-w-6xl mx-auto space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl text-center font-bold text-[#ff66cc] border-b-2 border-pink-500 pb-4 shadow-md"
          >
            Długie i Pojemne Boxy Dachowe <br /> 📦
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-12">
            {/* Atera Casar XL */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-[#1f1f3d]/80 border-2 border-cyan-400 rounded-2xl shadow-2xl p-6 space-y-5 text-center hover:scale-[1.03] transition-all"
            >
              <h3 className="text-2xl font-bold text-cyan-300">
                Atera Casar XL
              </h3>
              <p className="text-sm text-slate-100 leading-relaxed">
                • Pojemność: 540L
                <br />
                • Długość zewnętrzna: 205 cm
                <br />
                • Ładowność: 75 kg
                <br />
                • Dwustronne otwieranie
                <br />
                • Wzmocnione zawiasy i szybki montaż
                <br />
                <strong className="block mt-3 text-lg text-cyan-200">
                  Cena: ~3000 zł
                </strong>
              </p>
              <Image
                width={1000}
                height={1000}
                className="w-full object-cover rounded-xl border border-cyan-300"
                src="https://www.interpack.eu/hpeciai/c25e7874735421003505bf72df3baeeb/pol_pm_Box-dachowy-Atera-Casar-XL-czarny-metalik-10052_6.jpg"
                alt="Atera Casar XL"
              />
              <span className="text-xs text-gray-400">
                Źródło: strefakierowcy.pl
              </span>
            </motion.div>

            {/* Inter Pack Traxer 8.6 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#1f1f3d]/80 border-2 border-purple-400 rounded-2xl shadow-2xl p-6 space-y-5 text-center hover:scale-[1.03] transition-all"
            >
              <h3 className="text-2xl font-bold text-purple-300">
                Inter Pack Traxer 8.6
              </h3>
              <p className="text-sm text-slate-100 leading-relaxed">
                • Pojemność: 510L
                <br />
                • Długość: 220 cm
                <br />
                • Max. dł. nart: 200 cm
                <br />
                • Ładowność: 75 kg
                <br />
                • Dwustronne otwieranie, szybki montaż
                <br />
                <strong className="block mt-3 text-lg text-purple-200">
                  Cena: ~3000 zł
                </strong>
              </p>
              <Image
                width={1000}
                height={1000}
                className="w-full object-cover rounded-xl border border-purple-300"
                src="https://www.interpack.eu/hpeciai/0d7c79dae13117774be9fde23cf696a1/pol_pm_Box-dachowy-Inter-Pack-Traxer-8-6-antracyt-7774_1.jpg"
                alt="Inter Pack Traxer 8.6"
              />
              <span className="text-xs text-gray-400">
                Źródło: interpack.eu
              </span>
            </motion.div>
          </div>

          {/* CENA & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12 space-y-4"
          >
            <p className="text-2xl font-bold text-lime-300 drop-shadow-[0_0_5px_lime]">
              💰 Cena każdego boxa: ok. 3000 zł
            </p>
            <button className="bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 text-white text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105 border-2 border-white/20">
              🚀 ZAMÓW TERAZ
            </button>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Pojemne;
