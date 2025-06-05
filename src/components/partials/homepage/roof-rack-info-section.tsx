import Image from "next/image";

export const RoofRackInfoSection = () => {
  return (
    <section className="bg-white my-auto">
      <div className="xl:flex gap-16 items-start pt-2 pb-8 lg:py-0 px-4 mx-auto max-w-screen-xl xl:grid xl:grid-cols-2 lg:px-6">
        <div className="flex flex-col justify-center items-center text-center font-light text-gray-500 sm:text-lg">
          <h2 className="my-6 text-center text-lg tracking-tight font-extrabold text-gray-900">
            Montaż bagażników dachowych – prosty sposób na więcej przestrzeni i
            wygody
          </h2>
          <p className="text-sm">
            Posiadanie bagażnika dachowego to idealne rozwiązanie dla osób,
            które potrzebują dodatkowej przestrzeni na bagaże, sprzęt sportowy
            czy wakacyjny. W naszej firmie oferujemy profesjonalny montaż
            bagażników dachowych, który jest szybki i bezpieczny. Dzięki naszemu
            doświadczeniu oraz zastosowaniu nowoczesnych technologii, instalacja
            bagażnika odbywa się sprawnie i bezproblemowo.
          </p>
          <div className="flex gap-4 my-8">
            <Image
              width={1000}
              height={1000}
              className="w-screen sm:w-6/6 2xl:w-screen rounded-lg"
              src="https://images.pexels.com/photos/17507607/pexels-photo-17507607/free-photo-of-couple-standing-by-a-jeep-in-wet-flat-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="infoPicture1"
            />
          </div>
          <p className="text-xs">
            Dzięki bagażnikowi dachowemu zyskasz więcej miejsca wewnątrz
            samochodu i komfort podróżowania. Skontaktuj się z nami, a nasi
            specjaliści doradzą Ci w wyborze najlepszego bagażnika dachowego
            dopasowanego do Twojego auta.
          </p>
          <h1 className="text-black text-center items-center justify-center flex pt-8 text-4xl font-bold">
            576 430 114
          </h1>
          <a
            href="tel:+48576430114"
            className="flex justify-center items-center border-2 border-black rounded-full px-8 py-2 font-semibold my-8 hover:bg-white bg-black hover:text-black text-white text-xs w-[200px]"
          >
            Zadzwoń do Nas!
          </a>
        </div>

        <div className="flex flex-col justify-start font-light text-gray-500 sm:text-lg">
          <h2 className="my-6 text-lg tracking-tight font-extrabold text-gray-900">
            Rodzaje bagażników dachowych - porównanie pojemności i zastosowania
          </h2>
          <p className="py-0 lg:py-2 text-sm">
            Wybór odpowiedniego bagażnika dachowego zależy od Twoich potrzeb
            oraz rodzaju pojazdu. W celu zobrazowania możliwości, porównaliśmy
            najpopularniejsze typy bagażników pod kątem pojemności i
            przeznaczenia.
          </p>
          <h2 className="flex justify-center my-6 text-lg tracking-tight font-extrabold text-gray-900">
            Polecamy:
          </h2>
          <ul className="flex my-2 sm:justify-center xl:justify-normal">
            <li className="sm:text-center border-[2px] lg:border-none px-2 py-4 mx-0 mr-2 lg:min-w-[300px] rounded-2xl">
              <p className="py-2 text-gray-900 font-semibold border-b-2 mb-2 sm:text-sm">
                Wąski box dachowy (np. Thule Force Sport){" "}
              </p>
              <p className="font-medium sm:text-xs">Pojemność: 300 litrów</p>
              <p className="font-medium sm:text-xs">Szerokość - 63cm </p>
              <p className="font-medium sm:text-xs">
                Max obciążenie bagażnika: 75 kg{" "}
              </p>
              <span className="font-medium sm:text-xs">
                Wzmacniana podłoga: tak
              </span>
              <br />
              <span className="font-medium sm:text-xs">
                Trzypunktowy zamek: tak
              </span>
              <br />
              <span className="font-medium sm:text-xs">
                Pojemność nart: 3-5
              </span>
              <br />
              <span className="font-medium sm:text-xs">
                Maksymalna długość nart: 175cm
              </span>
              <br />
            </li>
            <li className="sm:text-center border-[2px] lg:border-none px-1 py-4 mx-0 lg:min-w-[300px] rounded-2xl">
              <p className="py-2 text-gray-900 font-semibold border-b-2 mb-2 sm:text-sm">
                Bagażnik bazowy (np. Thule WingBar){" "}
              </p>
              <p className="font-medium sm:text-xs">Typ montażu: na reling</p>
              <p className="font-medium sm:text-xs">
                Zastosowanie: przewóz boxów lub rowerów{" "}
              </p>
              <p className="font-medium sm:text-xs">
                Max obciążenie bagażnika: 75 kg{" "}
              </p>
              <span className="font-medium sm:text-xs">
                Materiał: aluminium
              </span>
              <br />
              <span className="font-medium sm:text-xs">
                Ciche i aerodunamiczne: tak
              </span>
              <br />
              <span className="font-medium sm:text-xs">
                Długość belki w zależności od szerokości dachu
              </span>
              <br />
              <span className="font-medium sm:text-xs">
                Szerokość belki - 8cm
              </span>
              <br />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
