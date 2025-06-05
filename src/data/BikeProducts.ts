import { Product } from "./ProductDatabase";

interface BikeProduct extends Product {
  maxWeight: number;
  maxBikes: number;
  path: string;
  supportedTypes: number[];
  expandable?: boolean;
  adapterUrl?: string;
  isAdapter?: boolean;
  forRack?: string;
  specialFrase?: string;
}

const atera1 = "https://www.strefakierowcy.pl/img/product/19053/kind/2.jpg";
const atera2 = "https://www.strefakierowcy.pl/img/product/19057/kind/2.jpg";

const thule1 = "https://www.strefakierowcy.pl/img/product/52544/kind/2.jpg";
const thule2 = "https://www.strefakierowcy.pl/img/product/52543/kind/2.jpg";

const interpack1 =
  "https://www.strefakierowcy.pl/img/product_gallery/53135_14/kind/0";
const interpack2 =
  "https://www.strefakierowcy.pl/img/product/100536/kind/2.jpg";
const interpack3 = "https://www.strefakierowcy.pl/img/product/53136/kind/2.jpg";

const adapterm1 = "https://www.strefakierowcy.pl/img/product/26698/kind/2.jpg";
const adaptert1 = "https://www.strefakierowcy.pl/img/product/41953/kind/2.jpg";

const freeride1 = "https://www.strefakierowcy.pl/img/product/3723/kind/2.jpg";

const proride1 = "https://www.strefakierowcy.pl/img/product/44191/kind/2.jpg";

const BikeProducts: BikeProduct[] = [
  // NA DACH
  {
    id: "thule-roof-bike-002",
    title: "Thule Proride 598",
    maxWeight: 20,
    maxBikes: 1,
    path: "/products/thule-roof-bike-002",
    supportedTypes: [1, 2, 3, 4, 5, 6, 7],
    image: proride1,
    images: [proride1, proride1],
    description: "Bagażnik na 1 rower na dach, 1 x 20kg max",
    secondDescription: "Bagażnik montowany na wsuwki",
    price: "829",
    available: "dostępny", // lub ""
    category: ["uchwyty rowerowe na dach"], // <- tablica kategorii
    newProduct: "Nowy", // Nowy | Używany | Odnowiony
  },
  {
    id: "thule-roof-bike-001",
    title: "Thule FreeRide 532",
    maxWeight: 17,
    maxBikes: 1,
    path: "/products/thule-roof-bike-001",
    supportedTypes: [2, 3, 4, 5, 6, 7],
    image: freeride1,
    images: [freeride1, freeride1],
    description: "Bagażnik na 1 rower na dach, 1 x 17kg max",
    secondDescription: "Bagażnik montowany na wsuwki lub cybanty",
    price: "439",
    available: "dostępny", // lub ""
    category: ["uchwyty rowerowe na dach"], // <- tablica kategorii
    newProduct: "Nowy", // Nowy | Używany | Odnowiony
  },
  {
    // ATERA
    id: "atera-001",
    title: "Atera Strada Sport M2",
    maxWeight: 30,
    maxBikes: 2,
    expandable: true,
    path: "/products/atera-001",
    adapterUrl: "/products/adapterm1",
    supportedTypes: [1, 2, 3, 4, 5, 6, 7],
    image: atera1,
    images: [atera1, atera1],
    description:
      "Bagażnik na 2 rowery elektryczne, mocowany na haku. 2x30kg max",
    price: "1929",
    available: "dostępny", // lub ""
    category: ["platformy rowerowe"], // <- tablica kategorii
    newProduct: "Nowy", // Nowy | Używany | Odnowiony
  },
  {
    id: "atera-002",
    title: "Atera Strada Sport M3",
    maxWeight: 30,
    maxBikes: 3,
    expandable: true,
    path: "/products/atera-002",
    adapterUrl: "/products/adapterm1",
    supportedTypes: [1, 2, 3, 4, 5, 6, 7],
    image: atera2,
    images: [atera2, atera2],
    description:
      "Bagażnik na 3 rowery elektryczne, mocowany na haku. 2x30kg max lub 3x20kg max",
    price: "2399",
    available: "dostępny", // lub ""
    category: ["platformy rowerowe"], // <- tablica kategorii
    newProduct: "Nowy", // Nowy | Używany | Odnowiony
  },
  {
    // THULE
    id: "thule-001",
    title: "Thule Easy Fold 2",
    maxWeight: 30,
    maxBikes: 2,
    path: "/products/thule-001",
    supportedTypes: [1, 2, 3, 4, 5, 6, 7],
    image: thule1,
    images: [thule1, thule1],
    description:
      "Bagażnik na 2 rowery elektryczne, mocowany na haku. 2x30kg max",
    price: "3789",
    available: "dostępny", // lub ""
    category: ["platformy rowerowe"], // <- tablica kategorii
    newProduct: "Nowy", // Nowy | Używany | Odnowiony
  },
  {
    id: "thule-002",
    title: "Thule Easy Fold 3",
    maxWeight: 30,
    maxBikes: 3,
    path: "/products/thule-002",
    supportedTypes: [1],
    image: thule2,
    images: [thule2, thule2],
    description: "Składany bagażnik na 3 rowery.",
    price: "4129",
    available: "dostępny", // lub ""
    category: ["platformy rowerowe"], // <- tablica kategorii
    newProduct: "Nowy", // Nowy | Używany | Odnowiony
  },
  {
    // INTER PACK
    id: "interpack-001",
    title: "Inter Pack Spider 2 PRO",
    maxWeight: 30,
    maxBikes: 2,
    path: "/products/interpack-001",
    supportedTypes: [1, 2, 3, 4, 5, 6, 7],
    image: interpack1,
    images: [interpack1, interpack1],
    description: "2x30kg max",
    price: "2079",
    available: "dostępny", // lub ""
    category: ["platformy rowerowe"], // <- tablica kategorii
    newProduct: "Nowy", // Nowy | Używany | Odnowiony
    specialFrase: "Nowość",
  },
  {
    id: "interpack-002",
    title: "Inter Pack Spider 3 LITE",
    maxWeight: 30,
    maxBikes: 3,
    path: "/products/interpack-002",
    supportedTypes: [1, 2, 3, 4, 5, 6, 7],
    image: interpack2,
    images: [interpack2, interpack2],
    description: "2x30kg max lub 3x20kg max",
    price: "1919",
    available: "dostępny", // lub ""
    category: ["platformy rowerowe"], // <- tablica kategorii
    newProduct: "Nowy", // Nowy | Używany | Odnowiony
    specialFrase: "Nowość",
  },
  {
    id: "interpack-003",
    title: "Inter Pack Spider 4",
    maxWeight: 20,
    maxBikes: 4,
    path: "/products/interpack-003",
    supportedTypes: [1, 2, 3, 4, 5, 6, 7],
    image: interpack3,
    images: [interpack3, interpack3],
    description: "3x20kg max lub 4x15kg max",
    price: "1999",
    available: "dostępny", // lub ""
    category: ["platformy rowerowe"], // <- tablica kategorii
    newProduct: "Nowy", // Nowy | Używany | Odnowiony
    specialFrase: "Nowość",
  },

  // Adaptery

  {
    id: "adapter1",
    title: "Adapter +1 Atera Strada",
    isAdapter: true,
    forRack: "Atera Strada Sport M3",
    image: adapterm1,
    images: [adapterm1, adapterm1],
    description:
      "Adapter umożliwiający montaż dodatkowego, trzeciego lub czwartego roweru do bagażników Atera Strada Sport M.",
    price: "599",
    path: "products/adapter1",
    available: "dostępny", // lub ""
    category: ["adaptery +1"], // <- tablica kategorii
    newProduct: "Nowy", // Nowy | Używany | Odnowiony
    maxWeight: 0,
    maxBikes: 0,
    supportedTypes: [],
  },
  {
    id: "adapter2",
    title: "Adapter +1 Thule Velospace",
    isAdapter: true,
    forRack: "TH Velospace",
    image: adaptert1,
    images: [adaptert1, adaptert1],
    description: "Adapter umożliwiający montaż czwartego roweru.",
    price: "699",
    path: "products/adapter2",
    available: "dostępny", // lub ""
    category: ["adaptery +1"], // <- tablica kategorii
    newProduct: "Nowy", // Nowy | Używany | Odnowiony
    maxWeight: 0,
    maxBikes: 0,
    supportedTypes: [],
  },
];

export default BikeProducts;
