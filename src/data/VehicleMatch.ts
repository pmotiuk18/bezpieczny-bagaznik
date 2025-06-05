import { Product } from "./ProductDatabase";

interface VehicleCompatibility {
  brand: string;
  model: string;
  version: string;
  years: string;
  roof: string;
}

interface VehicleProduct extends Product {
  compatibleWith?: VehicleCompatibility[];
}

const VehicleMatch: VehicleProduct[] = [
  {
    id: "11",
    title: "Inter Pack Quiet XM CM",
    description: "Bagażnik bazowy montowany za krawędź dachu",
    image: "/images/bagazniki/xm-cm-1.jpg",
    price: "239",
    images: ["/images/bagazniki/xm-cm-1.jpg", "/images/bagazniki/xm-cm-1.jpg"],
    category: ["belki dachowe"],
    available: "dostępny",
    compatibleWith: [
      {
        brand: "Alfa Romeo",
        model: "Giulietta",
        version: "I",
        years: "2010-2020",
        roof: "Dach standardowy",
      },
      {
        brand: "Citroën",
        model: "C3",
        version: "III",
        years: "2016-2023",
        roof: "Dach standardowy",
      },
      {
        brand: "Citroën",
        model: "C3",
        version: "IV",
        years: "2024-",
        roof: "Dach standardowy",
      },
      {
        brand: "Citroën",
        model: "C4",
        version: "II",
        years: "2010-2020",
        roof: "Dach standardowy",
      },
      {
        brand: "Citroën",
        model: "C4-X",
        version: "I",
        years: "2023-",
        roof: "Dach standardowy",
      },
      {
        brand: "Citroën",
        model: "ë-C4",
        version: "I",
        years: "2021-",
        roof: "Dach standardowy",
      },
      {
        brand: "Citroën",
        model: "ë-C4-X",
        version: "I",
        years: "2023-",
        roof: "Dach standardowy",
      },
      {
        brand: "Fiat",
        model: "600",
        version: "II",
        years: "2023-",
        roof: "Dach standardowy",
      },
      {
        brand: "Ford",
        model: "C-max",
        version: "II",
        years: "2010-2019",
        roof: "Dach standardowy",
      },
      {
        brand: "Ford",
        model: "Mondeo",
        version: "IV",
        years: "2007-2014",
        roof: "Dach standardowy",
      },
      {
        brand: "Lancia",
        model: "Delta",
        version: "III",
        years: "2008-2014",
        roof: "Dach standardowy",
      },
      {
        brand: "Lancia",
        model: "Ypsilon",
        version: "III",
        years: "2011-2024",
        roof: "Dach standardowy",
      },
      {
        brand: "Opel",
        model: "Astra",
        version: "K",
        years: "2015-2021",
        roof: "Dach standardowy",
      },
      {
        brand: "Opel",
        model: "Insignia",
        version: "I",
        years: "2009-2017",
        roof: "Dach standardowy",
      },
      {
        brand: "Opel",
        model: "Insignia Grand Sport",
        version: "II",
        years: "2017",
        roof: "Dach standardowy",
      },
      {
        brand: "Peugeot",
        model: "208",
        version: "I",
        years: "2012-2019",
        roof: "Dach standardowy",
      },
      {
        brand: "Peugeot",
        model: "508",
        version: "I",
        years: "2011-2018",
        roof: "Dach standardowy",
      },
      {
        brand: "Renault",
        model: "Arkana",
        version: "I",
        years: "2020",
        roof: "Dach standardowy",
      },
      {
        brand: "Renault",
        model: "Austral",
        version: "I",
        years: "2022",
        roof: "Dach standardowy",
      },
      {
        brand: "Renault",
        model: "Grand Scenic",
        version: "III",
        years: "2009-2016",
        roof: "Dach standardowy",
      },
      {
        brand: "Renault",
        model: "Megane III",
        version: "III",
        years: "2009-2016",
        roof: "Dach standardowy",
      },
      {
        brand: "Renault",
        model: "Megane III Estate / Break",
        version: "III",
        years: "2009-2016",
        roof: "Dach standardowy",
      },
      {
        brand: "Renault",
        model: "Scenic III",
        version: "III",
        years: "2009-2016",
        roof: "Dach standardowy",
      },
      {
        brand: "Seat",
        model: "Toledo",
        version: "IV",
        years: "2012-2019",
        roof: "Dach standardowy",
      },
      {
        brand: "Skoda",
        model: "Fabia",
        version: "III",
        years: "2014-2020",
        roof: "Dach standardowy",
      },
      {
        brand: "Skoda",
        model: "Fabia (MKII)",
        version: "II",
        years: "2007-2014",
        roof: "Dach standardowy",
      },
      {
        brand: "Skoda",
        model: "Fabia IV",
        version: "IV",
        years: "2021",
        roof: "Dach standardowy",
      },
    ],
  },
  // Rest of the vehicle compatibility data would go here
];

export default VehicleMatch;
