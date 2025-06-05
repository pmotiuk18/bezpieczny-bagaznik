"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const imagesBefore = [
  "/images/20.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
  "/images/9.jpg",
];

const processImages = [
  {
    src: "/images/2.1.jpg",
    caption: "Rozpoczynamy regenerację bagażnika bazowego Mont Blanc",
  },
  {
    src: "/images/2.2.jpg",
    caption: "Krok 1 - Dokładne mycie plastikowych elementów",
    description:
      "Usunięcie brudu i kurzu to kluczowy pierwszy etap regeneracji.",
  },
  {
    src: "/images/1.1.jpg",
    caption: "Krok 2 - Kąpiel stalowych elementów w kwasie solnym",
    description:
      "Roztwór kwasu solnego rozpuszcza rdzę, odsłaniając metalową powierzchnię.",
  },
  {
    src: "/images/1.3.jpg",
    caption: "Efekt po dwóch godzinach",
    description: "Widoczna poprawa - rdza znika.",
  },
  {
    src: "/images/1.4.jpg",
    caption: "Dalsza obróbka chemiczna",
    description:
      "Zalewamy nowym roztworem i pozostawiamy na 10 godzin, by usunąć pozostałości rdzy.",
  },
  {
    src: "/images/1.6.jpg",
    caption: "Efekt czyszczenia",
    description:
      "Cała rdza została usunięta, pozostał lekki nalot po kwasie solnym.",
  },
  {
    src: "/images/1.7.jpg",
    caption: "Ocet i soda oczyszczona",
    description:
      "Potrzebujemy usunąć nalot pozostały po kwasie solnym, w tym celu robimy roztwór z octu i wsypujemy porządną porcję sody oczyszczonej - powinny pojawić się bąbelki.",
  },
  {
    src: "/images/1.9.jpg",
    caption: "Ostateczny efekt chemicznego oczyszczania",
    description:
      "Metal jest teraz gotowy do użytku i montażu z powrotem w stopach.",
  },
  {
    src: "/images/2.3.jpg",
    caption: "Oczyszczone zamki",
    description:
      "Po dwóch godzinach w kwasie solnym zamki wyglądają jak nowe - ze środka wypłynęło bardzo dużo brudu.",
  },
];

const finalResult = [
  { src: "/images/2.11.jpg", caption: "Efekt końcowy - bagażnik jak nowy" },
  {
    src: "/images/2.10.png",
    caption:
      "Regenerowane belki i stopy Mont Blanc - pełna funkcjonalność przywrócona",
  },
];

// Fade-in with blur component
const FadeImage = ({ src, alt, className = "" }: any) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<any>(null);

  // Auto-detect if already loaded from cache
  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <Image
      width={1000}
      height={1000}
      ref={imgRef}
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={`
        ${className}
        transition-all duration-700 ease-out
        ${loaded ? "blur-0 opacity-100 scale-100" : "blur-md opacity-0 scale-105"}
      `}
      loading="lazy"
    />
  );
};
const ImageGrid = ({ images }: any) => (
  <div className="grid grid-cols-3 gap-4 mt-8 pb-8">
    {images.map((src: any, index: number) => (
      <div key={index} className="relative">
        <FadeImage
          src={src}
          alt={`Zdjęcie ${index + 1}`}
          className="w-full rounded-lg max-h-[120px] sm:max-h-[200px] lg:max-h-[110px] object-cover"
        />
      </div>
    ))}
  </div>
);

const Regeneracja = () => {
  return (
    <>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 lg:mb-6 text-3xl md:text-4xl tracking-tight font-extrabold text-gray-900">
            Kompleksowa regeneracja bagażnika bazowego Mont Blanc na reling
            otwarty
          </h2>
          <p className="mb-4 text-gray-500">
            Zdjęcia przed rozpoczęciem procesu
          </p>
        </div>
        <ImageGrid images={imagesBefore} />
      </div>

      <div className="text-center">
        <FadeImage
          className="w-[900px] mx-auto rounded-xl object-cover p-2"
          src="/images/2.jpg"
          alt="Główne zdjęcie procesu"
        />
      </div>

      <div>
        {processImages.map((image, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center py-6 px-4"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 max-w-[600px] mx-auto">
              {image.caption}
            </h2>
            {image.description && (
              <p className="mb-4 text-gray-500">{image.description}</p>
            )}
            <FadeImage
              src={image.src}
              alt={`Proces krok ${index + 1}`}
              className="w-full sm:w-[900px] rounded-xl object-cover p-2"
            />
          </div>
        ))}

        {/* FINAL RESULT SECTION – styl premium/highlight */}
        <div className="bg-gradient-to-br from-gray-50 to-white border-y-4 border-gray-200 shadow-inner py-10 px-4 mt-12">
          <h2 className="text-4xl text-center font-extrabold text-green-700 mb-6">
            ✨ Efekt Końcowy ✨
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
            Zregenerowany bagażnik wygląda jak nowy – pełna funkcjonalność
            przywrócona, wygląd klasy premium.
          </p>
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            {finalResult.map((image, index) => (
              <div
                key={index}
                className="hover:scale-[1.02] transition-transform duration-500 ease-out"
              >
                <FadeImage
                  src={image.src}
                  alt={`Efekt końcowy krok ${index + 1}`}
                  className="rounded-2xl object-cover p-2 shadow-lg border border-gray-200"
                />
                <h3 className="text-xl font-semibold text-center mt-2 text-gray-700">
                  {image.caption}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Regeneracja;
