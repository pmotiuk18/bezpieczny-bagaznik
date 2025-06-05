"use client";

import emailjs from "@emailjs/browser";
import React, { ChangeEvent, FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
// Import BikeProducts but define the type locally to avoid conflicts
import BikeProductsData from "@/data/BikeProducts";
import { Product } from "@/data/ProductDatabase";

import ProductBox from "./product-box";

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

interface FormData {
  weight: number;
  bikeType: string;
  style: string[];
  name: string;
  wheelbase: number;
  email: string;
  bikeCount: number;
}

const BikeConfigurator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    weight: 15,
    bikeType: "1",
    style: [],
    name: "",
    wheelbase: 70,
    email: "",
    bikeCount: 1,
  });

  // Use the locally defined BikeProduct interface
  const [matchingRacks, setMatchingRacks] = useState<BikeProduct[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [renderingMessage, setRenderingMessage] = useState<string>("");

  const handleOfferSend = async (): Promise<void> => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!formData.email || !emailValid) {
      const emailInput = document.querySelector("#emailInput");
      if (emailInput) {
        emailInput.classList.add("border-red-500");
      }
      alert("Nie podałeś adresu e-mail");
      return;
    }

    setLoading(true);
    setRenderingMessage("Renderowanie oferty...");

    setTimeout(async () => {
      // Cast BikeProductsData to the local BikeProduct type
      const products = BikeProductsData as unknown as BikeProduct[];
      const matches = products.filter((p) => {
        if (p.isAdapter) return false;
        const isWeightOk = formData.weight <= p.maxWeight;
        const isTypeOk =
          formData.bikeType !== "1" || p.supportedTypes.includes(1);
        const directMatch = formData.bikeCount === p.maxBikes;
        const expandableMatch =
          p.expandable && formData.bikeCount === p.maxBikes + 1;
        return isWeightOk && isTypeOk && (directMatch || expandableMatch);
      });

      try {
        await fetch("/api/send-offer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            bikeData: formData,
            matchedProducts: matches,
          }),
        });

        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          {
            bike_weight: formData.weight,
            bike_type: formData.bikeType,
            bike_style: formData.style.join(", "),
            bike_name: formData.name || "Nie podano",
            bike_wheelbase: formData.wheelbase || "Nie podano",
            bike_count: formData.bikeCount,
            user_email: formData.email,
          },
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
        );

        setRenderingMessage("");
        alert("Oferta została wysłana na podany adres e-mail");
      } catch (err: any) {
        console.error("Błąd przy wysyłaniu:", err);
        setRenderingMessage("");

        if (err?.status === 426) {
          alert(
            "Oferta została wysłana. Natomiast z powodu dużego zainteresowania dopasowaniem - nie otrzymaliśmy kopii zwrotnej - prosimy o kontakt w celu zakupu."
          );
        } else {
          alert("Wystąpił błąd przy wysyłaniu e-maila");
        }
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  const handleChange = (field: keyof FormData, value: any): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (["bikeCount", "bikeType", "weight"].includes(field)) {
      setMatchingRacks([]);
      setSubmitted(false);
    }
  };

  const handleCheckboxChange = (value: string, checked: boolean): void => {
    setFormData((prev) => {
      const updatedStyles = checked
        ? [...prev.style, value]
        : prev.style.filter((style) => style !== value);
      return { ...prev, style: updatedStyles };
    });
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    // Filter products based on criteria
    // Cast BikeProductsData to the local BikeProduct type
    const products = BikeProductsData as unknown as BikeProduct[];
    const matches = products.filter((p) => {
      if (p.isAdapter) return false;
      const isWeightOk = formData.weight <= p.maxWeight;
      const isTypeOk =
        formData.bikeType !== "1" || p.supportedTypes.includes(1);
      const directMatch = formData.bikeCount === p.maxBikes;
      const expandableMatch =
        p.expandable && formData.bikeCount === p.maxBikes + 1;
      return isWeightOk && isTypeOk && (directMatch || expandableMatch);
    });

    setMatchingRacks(matches);
    setSubmitted(true);
  };

  return (
    <div className="sm:max-w-4xl sm:mx-auto m-2 px-6 py-12 bg-gradient-to-b from-blue-50 via-white to-yellow-100 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
        🚲 Letni Konfigurator Bagażników
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Ilość rowerów:
            </label>
            <Slider
              min={1}
              max={4}
              step={1}
              value={[formData.bikeCount]}
              onValueChange={(val) => handleChange("bikeCount", val[0])}
            />
            <input
              type="number"
              min="1"
              max="4"
              value={formData.bikeCount.toString()}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("bikeCount", parseInt(e.target.value))
              }
              className="mt-2 w-full border rounded p-2"
            />
            <small className="text-gray-500">1 - dach | 2-4 - hak</small>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Maksymalna waga roweru (kg):
            </label>
            <Slider
              min={1}
              max={30}
              step={1}
              value={[formData.weight]}
              onValueChange={(val) => handleChange("weight", val[0])}
            />
            <input
              type="number"
              min="1"
              max="30"
              value={formData.weight.toString()}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("weight", parseInt(e.target.value))
              }
              className="mt-2 w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Typ największego roweru:
            </label>
            <select
              value={formData.bikeType}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                handleChange("bikeType", e.target.value)
              }
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="1">1 – Elektryczny</option>
              <option value="2">2 – Miejski</option>
              <option value="3">3 – Górski (MTB)</option>
              <option value="4">4 – Szosowy</option>
              <option value="5">5 – Trekkingowy</option>
              <option value="6">6 – Gravel</option>
              <option value="7">7 – Nieistotne</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Rodzaje rowerów:
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.style.includes("dziecięcy")}
                  onChange={(e) =>
                    handleCheckboxChange("dziecięcy", e.target.checked)
                  }
                  className="mr-2"
                />
                Dziecięcy
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.style.includes("damski")}
                  onChange={(e) =>
                    handleCheckboxChange("damski", e.target.checked)
                  }
                  className="mr-2"
                />
                Damski
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.style.includes("męski")}
                  onChange={(e) =>
                    handleCheckboxChange("męski", e.target.checked)
                  }
                  className="mr-2"
                />
                Męski
              </label>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Marka/model roweru (opcjonalnie):
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("name", e.target.value)
              }
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Maksymalny rozstaw osi (cm):
            </label>
            <Slider
              min={30}
              max={150}
              step={1}
              value={[formData.wheelbase]}
              onValueChange={(val) => handleChange("wheelbase", val[0])}
            />
            <input
              type="number"
              min="30"
              max="150"
              value={formData.wheelbase.toString()}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("wheelbase", parseInt(e.target.value))
              }
              className="mt-2 w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Twój adres e-mail:
            </label>
            <input
              id="emailInput"
              type="email"
              required
              value={formData.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("email", e.target.value)
              }
              className="w-full border rounded p-2"
              placeholder="np. jan@kowalski.pl"
            />
            <small className="text-gray-500">
              E-mail potrzebny do wysłania oferty
            </small>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition"
          >
            Pokaż pasujące bagażniki
          </Button>
          <Button
            type="button"
            onClick={handleOfferSend}
            disabled={loading}
            className={`bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? renderingMessage : "Wyślij ofertę na e-mail"}
          </Button>
        </div>
      </form>

      {submitted && (
        <div className="mt-8 space-y-6">
          <h3 className="text-2xl font-bold text-center text-blue-900">
            Dopasowane produkty:
          </h3>

          {matchingRacks.length === 0 ? (
            <div className="bg-red-50 border border-red-200 p-4 rounded-md text-center">
              <p className="text-red-600 font-medium">
                {/* Cast BikeProductsData to the local BikeProduct type */}
                {(BikeProductsData as unknown as BikeProduct[]).every(
                  (p) => formData.weight > p.maxWeight
                )
                  ? "Brak produktów spełniających podane kryteria wagowe. Spróbuj zmienić wagę roweru."
                  : (BikeProductsData as unknown as BikeProduct[]).every(
                        (p) => formData.bikeCount > p.maxBikes
                      )
                    ? "Brak produktów dla wybranej liczby rowerów. Spróbuj zmienić liczbę rowerów."
                    : "Brak produktów spełniających podane kryteria. Spróbuj zmienić parametry."}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {matchingRacks.map((rack) => (
                <div key={rack.id}>
                  {rack.expandable &&
                    formData.bikeCount === rack.maxBikes + 1 &&
                    rack.adapterUrl && (
                      <div className="mt-3 bg-yellow-50 border border-yellow-200 p-3 rounded-md mb-2">
                        <p className="text-sm text-yellow-800">
                          Ten bagażnik obsługuje {rack.maxBikes} rowery, ale
                          może być rozbudowany do {formData.bikeCount} dzięki
                          adapterowi.
                        </p>
                        <a
                          href={rack.adapterUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 px-3 py-1 text-xs bg-yellow-300 hover:bg-yellow-400 text-yellow-900 rounded transition"
                        >
                          🔧 Zobacz adapter +1
                        </a>
                      </div>
                    )}
                  <ProductBox
                    title={rack.title}
                    description={rack.description}
                    image={rack.image}
                    path={rack.path}
                    price={rack.price}
                    newProduct={
                      parseInt(formData.bikeType) === 1
                        ? "E-bike"
                        : rack.newProduct
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BikeConfigurator;
