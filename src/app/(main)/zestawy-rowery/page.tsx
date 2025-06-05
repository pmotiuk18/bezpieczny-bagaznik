import Image from "next/image";
import Link from "next/link";

interface BicycleItem {
  title: string;
  href: string;
  img: string;
}

export default function ZestawyRowery() {
  const bicycle: BicycleItem[] = [
    {
      title: "Najlepszy stosunek ceny do jakości",
      href: "/zestawy-rowery/cena-jakosc",
      img: "https://images.pexels.com/photos/17081749/pexels-photo-17081749/free-photo-of-krajobraz-gory-natura-panorama.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      title: "Uchwyty pod rowery elektryczne",
      href: "/zestawy-rowery/rowery-elektryczne",
      img: "https://images.pexels.com/photos/1553406/pexels-photo-1553406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      title: "Wąskie uchwyty (4 rowery lub box + rowery)",
      href: "/zestawy-rowery/waskie-uchwyty",
      img: "https://images.pexels.com/photos/16473051/pexels-photo-16473051/free-photo-of-droga-krajobraz-gory-natura.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      title: "Uchwyty pod rowery karbonowe",
      href: "/zestawy-rowery/uchwyty-pod-rowery-karbonowe",
      img: "https://images.pexels.com/photos/27694029/pexels-photo-27694029/free-photo-of-islandia-krajobraz-gory-natura.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 mt-10 px-4">
        {bicycle.map(({ title, href, img }, i) => (
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
}
