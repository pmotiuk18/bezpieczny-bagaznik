"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Najnizsze = (): React.ReactElement => {
  return (
    <>
      <div className="bg-gradient-to-br from-indigo-900 to-slate-800 min-h-screen text-white px-4 sm:px-6 py-10 sm:py-14 space-y-12">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-lime-300 to-emerald-400 bg-clip-text text-transparent"
        >
          🚀 Najlepsze Rozwiązania 2025
        </motion.h1>

        <section className="max-w-6xl mx-auto space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-semibold text-center text-fuchsia-200 border-b border-fuchsia-500 pb-4"
          >
            🔻 Najniższe zestawy – Bagażnik + Box
          </motion.h2>

          <div className="grid gap-10 sm:grid-cols-2">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:scale-[1.02] transition-all space-y-4 text-center"
            >
              <h3 className="text-2xl font-bold text-lime-300">
                Thule Wingbar Edge
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Bagażnik dachowy na:
                <br />
                • Reling otwarty (kit ...04)
                <br />
                • Pod uszczelkę drzwi (kit ...05)
                <br />
                • Reling zintegrowany (kit ...06)
                <br />
                • Punkty dachowe (kit ...07)
                <br />
                <strong className="block mt-3 text-lg text-lime-300 drop-shadow-neon">
                  Cena: ok. 1600 zł
                </strong>
              </p>
              <div className="rounded-xl overflow-hidden aspect-[4/3] border border-lime-300/30">
                <Image
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                  src="https://www.thule.com/-/p/itWM6lT5uihTCUuJzxUi4DcOKcUrDaYXfkUgMym0yBM/rs:fit/f:avif/cb:2.3/q:80/h:1200/w:1200/plain/approved/std.lang.all/55/47/1385547.png"
                  alt="Thule Wingbar Edge"
                />
              </div>
              <span className="text-xs opacity-50">Źródło: thule.com</span>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:scale-[1.02] transition-all space-y-4 text-center"
            >
              <h3 className="text-2xl font-bold text-cyan-300">
                Inter Pack Skugga
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                • Rozmiar L (203cm dł. zewn.)
                <br />
                • Max dł. nart: 180cm
                <br />
                • Ładowność: 75kg
                <br />
                • 3-punktowy zamek, wzmacniany spód
                <br />
                • Szybki montaż, produkcja: Japonia
                <br />
                <strong className="block mt-3 text-lg text-cyan-300 drop-shadow-neon">
                  Cena: ok. 2999 zł
                </strong>
              </p>
              <div className="rounded-xl overflow-hidden aspect-[4/3] border border-cyan-300/30">
                <Image
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                  src="https://www.interpack.eu/hpeciai/f40c5e8b7067d57009cb05fc594adfa2/pol_pm_Box-dachowy-Inter-Pack-Skugga-L-660-czarny-polysk-6573_1.jpg"
                  alt="Inter Pack Skugga"
                />
              </div>
              <span className="text-xs opacity-50">Źródło: interpack.eu</span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center text-xl font-semibold text-emerald-300 mt-8 drop-shadow-neon"
          >
            💰 Cena zestawu: ok. 4600 zł
          </motion.p>
        </section>
      </div>
    </>
  );
};

export default Najnizsze;
