import Image from "next/image";
import Link from "next/link";

export const ProductPromotionSection = () => {
  return (
    <section className="grid items-center justify-center">
      <span className="text-center text-gray-800 text-sm my-4 px-2 sm:px-16">
        Przygotowaliśmy najlepsze oferty platform dachowych oraz bagażników
        rowerowych, a już wkrótce możliwy będzie również zakup bagażników
        używanych lub odnowionych - o stanie przypominającym nowy
      </span>
      <Link
        href="/products"
        className="mx-auto bg-red-700 px-2 rounded-xl py-2 text-white"
      >
        Sprawdź
      </Link>
      <span className="text-sm text-center mt-4 flex justify-center items-center">
        Tu sprawdzisz dopasowanie do swojego auta uniwersalnych belek dachowych
        do montażu &quot;za krawędź dachu&quot;
      </span>
      <Link
        className="mx-auto mt-4 bg-blue-500 px-2 rounded-xl py-2 text-white"
        href="/sells/trophy"
      >
        Belki dachowe Trophybars
      </Link>
      <div>
        <a
          href="/zestawy"
          className="flex flex-col mx-auto mt-8 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <Image
            width={1000}
            height={1000}
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://images.pexels.com/photos/15838266/pexels-photo-15838266/free-photo-of-miasto-swiatla-noc-drzewa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              Najlepsze rozwiązania 2025
            </h5>
            <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
              Tu znajdziesz najbardziej optymalne rozwiązania na zimowe i letnie
              wyjazdy pod każdy typ montażu
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};
