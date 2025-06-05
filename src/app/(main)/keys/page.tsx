"use client";

import React, { useState } from "react";

import keyDatabase from "@/data/KeyDatabase";

const KeyConfigurator = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [typedModel, setTypedModel] = useState("");
  const [selectedKey, setSelectedKey] = useState("");
  const [isAvailable, setIsAvailable] = useState(null);

  const brands = Object.keys(keyDatabase);

  let keys: any[] = [];

  if (selectedBrand) {
    const products = Object.keys(keyDatabase[selectedBrand]);
    keys = products.flatMap((product) =>
      Object.keys(keyDatabase[selectedBrand][product]).map((key) => ({
        key,
        product,
      }))
    );
  }

  const handleCheckAvailability = () => {
    if (!selectedBrand || !selectedKey) return;

    const found = keys.find((k: any) => k.key === selectedKey);
    const availability: any =
      keyDatabase[selectedBrand][found.product][found.key];

    setIsAvailable(availability);

    const subject = encodeURIComponent("Zapytanie o dostępność klucza");
    const body = encodeURIComponent(
      `
      Nr telefonu do kontaktu   .   .   . \n
      Marka: ${selectedBrand}\n
      Model wpisany przez użytkownika: ${typedModel || "(brak podanego modelu)"}\n
      Klucz: ${selectedKey}\n
      Dostępność: ${availability ? "Dostępny" : "Brak"}`
    );

    window.location.href = `mailto:bezpiecznybagaznik@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="p-6 my-4 sm:my-12 max-w-md mx-auto bg-white rounded-xl shadow-xl space-y-4">
        <h2 className="text-xl font-bold">
          Konfigurator kluczy do <br /> Thule i Atera - bagażniki <br /> na dach
          lub hak 🔑
        </h2>

        {/* Brand Select */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Wybierz markę bagażnika:
          </label>
          <select
            className="w-full border rounded p-2"
            value={selectedBrand}
            onChange={(e) => {
              setSelectedBrand(e.target.value);
              setTypedModel("");
              setSelectedKey("");
              setIsAvailable(null);
            }}
          >
            <option value="">-- Marka bagażnika --</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Model Input */}
        {selectedBrand && (
          <div>
            <label className="block text-sm font-medium mb-1">
              {`Podaj model bagażnika (niewymagane):`}
            </label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={typedModel}
              onChange={(e) => setTypedModel(e.target.value)}
              placeholder="np. EasyFold XT 2 lub Strada Evo 3"
            />
          </div>
        )}

        {/* Key Number Select */}
        {selectedBrand && keys.length > 0 && (
          <div>
            <label className="block text-sm font-medium mb-1">
              Wybierz nr klucza:
            </label>
            <select
              className="w-full border rounded p-2"
              value={selectedKey}
              onChange={(e) => {
                setSelectedKey(e.target.value);
                setIsAvailable(null);
              }}
            >
              <option value="">-- Nr klucza --</option>
              {keys.map(({ key, product }) => (
                <option key={key} value={key}>
                  {key} ({product})
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Check Button */}
        {selectedBrand && selectedKey && (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={handleCheckAvailability}
          >
            Sprawdź dostępność
          </button>
        )}

        {/* Result */}
        {isAvailable !== null && (
          <div
            className={`mt-3 px-4 py-2 rounded font-medium ${
              isAvailable
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {isAvailable
              ? "✅ Klucz dostępny, otworzyliśmy okno maila do zamówienia!"
              : "❌ Brak klucza w asortymencie sklepu, otworzyliśmy okno maila z zapytaniem."}
          </div>
        )}
      </div>
    </>
  );
};

export default KeyConfigurator;
