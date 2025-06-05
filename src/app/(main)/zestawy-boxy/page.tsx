import Image from "next/image";
import Link from "next/link";

const ZestawyBoxy = () => {
  const boxes = [
    {
      title: "Najlepsze zestawy w Dobrej Cenie",
      href: "/zestawy-boxy/polecane-w-dobrej-cenie",
      img: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      title: "Najniższe Zestawy",
      href: "/zestawy-boxy/polecane-najnizsze",
      img: "https://images.pexels.com/photos/12875/pexels-photo-12875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      title: "Pojemne Boxy",
      href: "/zestawy-boxy/polecane-pojemne",
      img: "https://images.pexels.com/photos/27680489/pexels-photo-27680489/free-photo-of-lodowiec-islandia-snieg-krajobraz.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      title: "Bagażniki Premium",
      href: "/zestawy-boxy/polecane-premium",
      img: "https://images.pexels.com/photos/20259218/pexels-photo-20259218/free-photo-of-przeziebienie-zimny-snieg-krajobraz.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 mt-10 px-4">
        {boxes.map(({ title, href, img }, i) => (
          <Link key={i} href={href} className="group w-80 sm:w-96">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                width={1000}
                height={1000}
                src={img}
                alt={title}
                className="w-full h-52 sm:h-60 object-cover rounded-2xl transform transition duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <h1 className="text-center text-xl sm:text-2xl font-semibold mt-3">
              {title}
            </h1>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ZestawyBoxy;
