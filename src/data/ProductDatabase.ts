import uzywane1 from "../../../public/boxy/uzywane/1.jpg";
import uzywane2 from "../../../public/boxy/uzywane/2.jpg";
import uzywane3 from "../../../public/boxy/uzywane/3.jpg";
import uzywane4 from "../../../public/boxy/uzywane/4.jpg";
import uzywane5 from "../../../public/boxy/uzywane/5.jpg";
import uzywane6 from "../../../public/boxy/uzywane/6.jpg";
import uzywane7 from "../../../public/boxy/uzywane/7.jpg";
import uzywane8 from "../../../public/boxy/uzywane/8.jpg";
import uzywane9 from "../../../public/boxy/uzywane/9.jpg";
import uzywane10 from "../../../public/boxy/uzywane/10.jpg";
import uzywane11 from "../../../public/boxy/uzywane/11.jpg";
import uzywane12 from "../../../public/boxy/uzywane/12.jpg";
import uzywane13 from "../../../public/boxy/uzywane/13.jpg";
import uzywane14 from "../../../public/boxy/uzywane/14.jpg";
import ruta1 from "../../../public/images/bagazniki/1.1.jpg";
import ruta2 from "../../../public/images/bagazniki/1.2.jpg";
import ruta3 from "../../../public/images/bagazniki/1.3.jpg";
import ruta4 from "../../../public/images/bagazniki/1.4.jpg";
import altura2 from "../../../public/images/bagazniki/2.2.jpg";
import altura9 from "../../../public/images/bagazniki/2.3-2.jpg";
import altura4 from "../../../public/images/bagazniki/2.4.jpg";
import altura6 from "../../../public/images/bagazniki/2.6.jpg";
import altura7 from "../../../public/images/bagazniki/2.7.jpg";
import altura8 from "../../../public/images/bagazniki/2.8.jpg";
import venturo3 from "../../../public/images/bagazniki/2.jpg";
import nimbus2 from "../../../public/images/bagazniki/3.2.jpg";
import nimbus3 from "../../../public/images/bagazniki/3.3.jpg";
import venturo4 from "../../../public/images/bagazniki/3.jpg";
import venturo1 from "../../../public/images/bagazniki/4(1).jpg";
import audi1 from "../../../public/images/bagazniki/audi1.png";
import audi2 from "../../../public/images/bagazniki/audi2.png";
import audi3 from "../../../public/images/bagazniki/audi3.png";
import audi4 from "../../../public/images/bagazniki/audi4.png";
import audi5 from "../../../public/images/bagazniki/audi5.png";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string | number;
  image: string;
  images?: string[];
  secondDescription?: string;
  phoneNr?: string;
  dimensions?: string;
  newProduct?: string;
  available?: string;
  category?: string[];
  color?: string;
  specialFrase?: string;
}

const products: Product[] = [
  {
    // AKCESORIA
    id: "accessories-007",
    title: "Nimbus - Sięgnij Wyżej, Bez Wysiłku",
    description: "Twój Mobilny Schodek – Wygodny Dostęp do Dachu",
    image: nimbus2.src,
    price: "59",
    images: [nimbus2.src, nimbus3.src],
    secondDescription:
      "Masz problem z sięganiem po bagaż na dachu swojego auta? Nimbus to solidny, kompaktowy schodek montowany za zawias drzwi samochodowych, który ułatwia dostęp do bagażnika dachowego. Dzięki niemu szybko i bezpiecznie załadujesz sprzęt, uporządkujesz bagaż lub zamocujesz namiot dachowy.",
    phoneNr: "+48576430114",
    newProduct: "Nowy", // Nowy | Używany | Odnowiony
    available: "dostępny",
    category: ["akcesoria"], // <- tablica kategorii
    specialFrase: "E-bike",
  },
  // BOXY MATERIAŁOWE
  {
    id: "box-soft-001",
    title: "Ruta - bagażnik dachowy materiałowy",
    description: "Box na dach - kompatybilny z platformą Altura",
    image: ruta1.src,
    price: "289",
    images: [ruta1.src, ruta3.src, ruta4.src],
    secondDescription:
      "Box dachowy wykonany z wytrzymałego materiału, w którym zmieścisz swój podręczny bagaż i nie tylko...",
    phoneNr: "+48576430114",
    dimensions: "Wymiary: 145cm x 80cm x 45cm",
    newProduct: "Nowy", // Nowy | Używany | Odnowiony
    available: "dostępny",
    category: ["boxy materiałowe"], // <- tablica kategorii
  },
  {
    id: "box-soft-002",
    title: "Venturo - bagażnik dachowy materiałowy",
    description: "Wodoodporny box na dach, kompatybilny z platformą Altura",
    image: venturo1.src,
    price: "259",
    images: [venturo1.src, venturo3.src, venturo4.src],
    secondDescription:
      "Wodoodporny box dachowy wykonany z wytrzymałego materiału, w którym zmieścisz swój podręczny bagaż i nie tylko...",
    phoneNr: "+48576430114",
    dimensions: "Wymiary: 112cm x 87cm x 44cm",
    newProduct: "Nowy produkt!",
    available: "dostępny",
    category: ["boxy materiałowe"], // <- tablica kategorii
  },
  {
    // KRATY DACHOWE
    id: "roof-platform-001",
    title: "Altura - uniwersalna platforma dachowa",
    description: "Platforma na dach - mocowana na belkach dachowych",
    image: altura9.src,
    price: "399",
    images: [altura2.src, altura4.src, altura6.src, altura7.src, altura8.src],
    secondDescription:
      "Platforma dachowa - służąca do przewozu bagażów gabarytowych lub bagażników dachowych. Świetnie sprawdza się w połączeniu z bagażnikiem dachowym Ruta lub Venturo.",
    phoneNr: "+48576430114",
    dimensions: "Wymiary: 140cm x 100cm/135cm x 13cm",
    newProduct: "Nowy", // Nowy | Używany | Odnowiony
    available: "dostępny",
    category: ["kraty dachowe"], // <- tablica kategorii
  },
  {
    // PLATFORMY NA HAK
    id: "bike-platform-001",
    title: "Bagażnik rowerowy Audi",
    description:
      "Bagażnik na dwa rowery z możliwością dostawienia dokładki na trzeci rower.",
    price: "1680",
    image: audi1.src,
    images: [audi1.src, audi2.src, audi3.src, audi4.src],
    secondDescription: "Max waga roweru - 30kg",
    phoneNr: "+48576430114",
    dimensions: "Wymiary: 115cm x 77cm x 65cm",
    newProduct: "Używany", // Nowy | Używany | Odnowiony
    available: "dostępny",
    category: ["platformy rowerowe"], // <- tablica kategorii
  },
  // BOXY DACHOWE
  {
    id: "roof-box-used-001",
    title: "Box dachowy szary błyszczący",
    description: "Duży box dachowy",
    price: "1000",
    image: uzywane1.src,
    images: [uzywane1.src, uzywane1.src],
    secondDescription: "",
    phoneNr: "+48576430114",
    dimensions: "Wymiary: 228 x 88 x 31",
    newProduct: "Używany", // Nowy | Używany | Odnowiony
    available: "dostępny", // lub ""
    color: "szary",
    category: ["boxy używane"], // <- tablica kategorii
  },
  {
    id: "roof-box-used-002",
    title: "Box dachowy szary błyszczący",
    description: "Duży box dachowy",
    price: "-",
    image: uzywane2.src,
    images: [uzywane2.src, uzywane2.src],
    secondDescription: "",
    phoneNr: "+48576430114",
    dimensions: "Wymiary: -",
    newProduct: "Używany", // Nowy | Używany | Odnowiony
    available: "dostępny", // lub ""
    color: "szary",
    category: ["boxy używane"], // <- tablica kategorii
  },
  {
    id: "roof-box-used-003",
    title: "Box dachowy czarny błyszczący",
    description: "Duży box dachowy",
    price: "2500",
    image: uzywane3.src,
    images: [uzywane3.src, uzywane3.src],
    secondDescription: "",
    phoneNr: "+48576430114",
    dimensions: "Wymiary: 225 x 90 x 28",
    newProduct: "Używany", // Nowy | Używany | Odnowiony
    available: "dostępny", // lub ""
    color: "czarny",
    category: ["boxy używane"], // <- tablica kategorii
  },
  {
    id: "roof-box-used-004",
    title: "Box dachowy czarny błyszczący",
    description: "Box dachowy",
    price: "1200",
    image: uzywane5.src,
    images: [uzywane5.src, uzywane5.src],
    secondDescription: "",
    phoneNr: "+48576430114",
    dimensions: "Wymiary: 210 x 90 x 27",
    newProduct: "Używany", // Nowy | Używany | Odnowiony
    available: "dostępny", // lub ""
    color: "czarny",
    category: ["boxy używane"], // <- tablica kategorii
  },
  {
    id: "roof-box-used-005",
    title: "Box dachowy biały",
    description: "Box dachowy",
    price: "-",
    image: uzywane6.src,
    images: [uzywane6.src, uzywane6.src],
    secondDescription: "",
    phoneNr: "+48576430114",
    dimensions: "Wymiary: -",
    newProduct: "Używany", // Nowy | Używany | Odnowiony
    available: "dostępny", // lub ""
    color: "biały",
    category: ["boxy używane"], // <- tablica kategorii
  },
  {
    id: "roof-box-used-006",
    title: "Box dachowy czarny błyszczący",
    description: "Box dachowy",
    price: "1250",
    image: uzywane7.src,
    images: [uzywane7.src, uzywane7.src],
    secondDescription: "",
    phoneNr: "+48576430114",
    dimensions: "Wymiary: 210 x 90 x 25",
    newProduct: "Używany", // Nowy | Używany | Odnowiony
    available: "dostępny", // lub ""
    color: "czarny",
    category: ["boxy używane"], // <- tablica kategorii
  },
  // ... and so on for other products
];

export default products;
