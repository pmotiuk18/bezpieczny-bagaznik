export default function Kontakt() {
  return (
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
      <h2 className="text-center text-xs">lub napisz wiadomość</h2>
      <a
        href="mailto: bezpiecznybagaznik@gmail.com"
        className="flex justify-center items-center border-2 border-black rounded-full px-8 py-2 font-semibold my-8 text-black text-xs hover:bg-black bg-white hover:text-white"
      >
        Kontakt
      </a>
    </div>
  );
}
