const Serwis = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="p-4">
        <div className="p-4 grid border-2 mb-8">
          <span className="flex font-semibold items-center justify-center ">
            Wypożyczalnia: bagażnik rowerowy
          </span>
          <span className="text-center py-2">
            Platforma rowerowa na dwa rowery UEBLER P22S. Jest możliwość
            dostawienia dokładki na 3 rower
          </span>
          <span className="text-center py-2">
            Bagażnik rowerowy na 2 lub 3 rowery <br /> - bagażnik jest uchylany,
            dzięki czemu otworzymy tylną klapę w aucie.
          </span>
          <span className="text-center py-2 font-semibold text-sm">
            Max udźwig jednego roweru - 30kg
          </span>
          <span className="text-center py-2 font-semibold text-sm">
            Max rozstaw osi - 120cm
          </span>
          <span className="text-center py-2 font-semibold text-sm">
            Waga platformy - 14kg
          </span>
          <span className="text-center py-2 font-semibold text-sm">
            13 PIN - tak
          </span>
          <span className="text-center py-2 font-semibold text-sm">
            Wymiary - 115 x 77 x 65
          </span>
          <span className="font-semibold py-2">Cennik: </span>
          <span>Pierwszy dzień - 60zł</span>
          <span>Drugi oraz trzeci dzień - po 30zł</span>
          <span>Czwarty i kolejne dni - 20zł</span>
          <span className="py-2 font-semibold">
            Montaż bagażnika jest w cenie wynajmu
          </span>
          {/* <span>Kaucja zwrotna - 500zł</span> */}
        </div>
        <div className="p-4 grid border-2 ">
          <span className="flex font-semibold items-center justify-center">
            Wypożyczalnia: bagażniki bazowe na dach
          </span>
          <span className="p-2 font-semibold">
            Mont Blanc AMC belki 49` 125cm +
            <br />
            Mont Blanc AMC stopy montażowe 5400{" "}
          </span>
          <span className="pl-8">
            Belki dachowe pod każdy typ relingu otwartego
          </span>
          <span className="font-semibold py-2 text-center">Cennik: </span>
          <span className="text-center border-b-2 w-56 mx-auto">
            30zł / dzień
          </span>
          <span className="p-2 font-semibold">
            Mont Blanc AMC belki 49` 125cm +
            <br />
            Mont Blanc AMC stopy montażowe 5002{" "}
          </span>
          <span className="pl-8">
            Belki dachowe pod większość aut z montażem za krawędź dachu{" "}
          </span>
          <span className="font-semibold py-2 text-center">Cennik: </span>
          <span className="text-center border-b-2 w-56 mx-auto">
            30zł / dzień
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="grid gap-2 p-4 border-2 ">
          <h1 className="p-2 font-semibold">Oferta napraw:</h1>
          <span className="">Spawanie pękniętych boxów dachowych</span>
          <span className="">Polerowanie boxów</span>
          <span className="">Wymiana klap górnych w boxach</span>
          <span className="">Wymiana zamków</span>
          <span className="">Wymiana siłowników</span>
          <span className="">Dorabianie kluczyków, również bez kluczyka</span>
          <span className="">Montaż namiotów dachowych</span>
          <span className="">
            Montaż adapterów do szerszych belek dachowych
          </span>
          <span className="">Montaż bagażników dachowych oraz na hak</span>
          <span className="">
            Przygotowanie bagażnika do użytku - smarowanie, czyszczenie,
            sprawdzenie pod względem usterek
          </span>
          <span>Doradztwo w wyborze bagażników dachowych</span>
        </div>
        <div className="my-2 grid justify-center text-sm">
          <h1 className="text-black justify-center flex pt-8 text-sm font-bold">
            576 430 114
          </h1>
          <a
            href="tel:+48576430114"
            className="flex justify-center items-center border-2 border-green-700 rounded-full px-8 py-2 font-semibold my-8 hover:bg-white bg-green-700 hover:text-black text-white text-xs"
          >
            Zadzwoń do Nas!
          </a>
          <h2 className="text-center text-sm">lub napisz wiadomość</h2>
          <span className="text-xs text-center">
            W celu sprawnego rozwiązania problemu prosimy o przesłanie zdjęć
            oraz szczegółowego opisu problemu na nasz adres e-mail
          </span>
          <a
            href="mailto: bezpiecznybagaznik@gmail.com"
            className="flex justify-center items-center border-2 border-black rounded-full px-8 py-2 font-semibold my-8 text-black text-xs hover:bg-white bg-white hover:text-white"
          >
            Kontakt
          </a>
        </div>
      </div>
    </div>
  );
};

export default Serwis;
