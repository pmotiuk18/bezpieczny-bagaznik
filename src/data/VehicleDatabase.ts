interface VehicleVersion {
  version: string;
  years: string;
  roof: string[];
}

interface VehicleModels {
  [model: string]: VehicleVersion[];
}

interface VehicleDatabaseType {
  [brand: string]: VehicleModels;
}

const vehicleDatabase: VehicleDatabaseType = {
  "Alfa Romeo": {
    Giulietta: [
      { version: "I", years: "2010-2020", roof: ["Dach standardowy"] },
    ],
  },
  BMW: {
    "Seria 3": [
      {
        version: "e46",
        years: "1998-2005",
        roof: ["Fix Point - gwinty w dachu"],
      },
    ],
    "Seria 5": [
      {
        version: "e34",
        years: "1988-1996",
        roof: ["Fix Point - gwinty w dachu"],
      },
      {
        version: "e39",
        years: "1997-2004",
        roof: ["Fix Point - gwinty w dachu"],
      },
    ],
    "Seria 7": [
      {
        version: "e38",
        years: "1994-2001",
        roof: ["Fix Point - gwinty w dachu"],
      },
    ],
  },
  Citroën: {
    C3: [
      { version: "III", years: "2016-2023", roof: ["Dach standardowy"] },
      { version: "IV", years: "2024-", roof: ["Dach standardowy"] },
    ],
    C4: [
      { version: "II", years: "2010-2020", roof: ["Dach standardowy", "FP"] },
    ],
    "C4-X": [{ version: "I", years: "2023-", roof: ["Dach standardowy"] }],
    "ë-C4": [{ version: "I", years: "2021-", roof: ["Dach standardowy"] }],
    "ë-C4-X": [{ version: "I", years: "2023-", roof: ["Dach standardowy"] }],
  },
  Fiat: {
    600: [{ version: "II", years: "2023-", roof: ["Dach standardowy"] }],
    Punto: [
      {
        version: "II",
        years: "1999-2010",
        roof: ["Fix Point - gwinty w dachu"],
      },
    ],
  },
  Ford: {
    "C-max": [
      { version: "II", years: "2010-2019", roof: ["Dach standardowy"] },
    ],
    Mondeo: [{ version: "IV", years: "2007-2014", roof: ["Dach standardowy"] }],
  },
  Lancia: {
    Delta: [{ version: "III", years: "2008-2014", roof: ["Dach standardowy"] }],
    Ypsilon: [
      { version: "III", years: "2011-2024", roof: ["Dach standardowy"] },
    ],
  },
  Opel: {
    Astra: [{ version: "K", years: "2015-2021", roof: ["Dach standardowy"] }],
    "Astra K": [{ version: "K", years: "2015", roof: ["Dach standardowy"] }],
    Insignia: [
      { version: "I", years: "2009-2017", roof: ["Dach standardowy"] },
    ],
    "Insignia Grand Sport": [
      { version: "II", years: "2017", roof: ["Dach standardowy"] },
    ],
  },
  Peugeot: {
    208: [{ version: "I", years: "2012-2019", roof: ["Dach standardowy"] }],
    508: [{ version: "I", years: "2011-2018", roof: ["Dach standardowy"] }],
  },
  Renault: {
    Arkana: [{ version: "I", years: "2020", roof: ["Dach standardowy"] }],
    Austral: [{ version: "I", years: "2022", roof: ["Dach standardowy"] }],
    "Grand Scenic": [
      { version: "III", years: "2009-2016", roof: ["Dach standardowy"] },
    ],
    "Megane III": [
      { version: "III", years: "2009-2016", roof: ["Dach standardowy"] },
    ],
    "Megane III Estate / Break": [
      { version: "III", years: "2009-2016", roof: ["Dach standardowy"] },
    ],
    "Scenic III": [
      { version: "III", years: "2009-2016", roof: ["Dach standardowy"] },
    ],
  },
  Seat: {
    Toledo: [{ version: "IV", years: "2012-2019", roof: ["Dach standardowy"] }],
  },
  Skoda: {
    Fabia: [{ version: "III", years: "2014-2020", roof: ["Dach standardowy"] }],
    "Fabia (MKII)": [
      { version: "II", years: "2007-2014", roof: ["Dach standardowy"] },
    ],
    "Fabia IV": [{ version: "IV", years: "2021", roof: ["Dach standardowy"] }],
    "Octavia II": [
      { version: "II", years: "2004-2013", roof: ["Dach standardowy"] },
    ],
    "Octavia III": [
      { version: "III", years: "2013-2020", roof: ["Dach standardowy"] },
    ],
    "Octavia IV": [
      { version: "IV", years: "2020", roof: ["Dach standardowy"] },
    ],
    Rapid: [{ version: "I", years: "2012", roof: ["Dach standardowy"] }],
    "Rapid Spaceback": [
      { version: "I", years: "2013", roof: ["Dach standardowy"] },
    ],
    Scala: [{ version: "I", years: "2019", roof: ["Dach standardowy"] }],
    "Superb III": [
      { version: "III", years: "2015-2023", roof: ["Dach standardowy"] },
    ],
    "Superb IV": [{ version: "IV", years: "2024", roof: ["Dach standardowy"] }],
  },
  Toyota: {
    "Rav 4": [
      {
        version: "V",
        years: "2019-",
        roof: ["Reling Zintegrowany (fix point)"],
      },
    ],
  },
  Volkswagen: {
    "Passat (B8)": [
      { version: "B8", years: "2014-", roof: ["Dach standardowy"] },
    ],
  },
  Volvo: {
    S60: [{ version: "II", years: "2011-2018", roof: ["Dach standardowy"] }],
    V50: [{ version: "I", years: "2004-2012", roof: ["Dach standardowy"] }],
  },
};

export default vehicleDatabase;
