"use client";

import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Car, Layers3, PanelTop, Settings2 } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/data/ProductDatabase";
import VehicleDatabase from "@/data/VehicleDatabase";
import VehicleMatch from "@/data/VehicleMatch";

import ProductBox from "./product-box";

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

interface Image {
  src: string;
  label: string;
  imgClass: string;
}

interface FormData {
  brand: string;
  model: string;
  year: string;
  mounting: string;
  email: string;
  phone: string;
}

interface FormField {
  name: keyof FormData;
  placeholder: string;
  type: string;
  required: boolean;
}

interface VehicleVersion {
  version: string;
  years: string;
  roof: string[];
}

export default function ProductConfigurator() {
  const images: Image[] = [
    { src: "/open3.jpeg", label: "Reling Otwarty", imgClass: "w-12 lg:w-16" },
    {
      src: "/integrated3.jpeg",
      label: "Reling Zintegrowany",
      imgClass: "w-12 lg:w-16",
    },
    { src: "/fix-point.jpeg", label: "Fix point", imgClass: "w-12 lg:w-16" },
    {
      src: "/standard2.jpeg",
      label: "Dach Standardowy",
      imgClass: "w-12 lg:w-16",
    },
  ];

  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedVersion, setSelectedVersion] = useState<string>("");
  const [selectedRoof, setSelectedRoof] = useState<string>("");
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const [availableVersions, setAvailableVersions] = useState<VehicleVersion[]>(
    []
  );
  const [availableRoofs, setAvailableRoofs] = useState<string[]>([]);
  const [productAvailable, setProductAvailable] = useState<boolean>(false);
  const [availableProducts, setAvailableProducts] = useState<VehicleProduct[]>(
    []
  );

  useEffect(() => {
    if (selectedBrand) {
      const models = Object.keys(VehicleDatabase[selectedBrand] || {});
      setAvailableModels(models);
      setSelectedModel("");
      setSelectedVersion("");
      setSelectedRoof("");
      setAvailableVersions([]);
      setAvailableRoofs([]);
      setAvailableProducts([]);
      setProductAvailable(false);
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedBrand && selectedModel) {
      const versions = VehicleDatabase[selectedBrand][selectedModel] || [];
      setAvailableVersions(versions);
      setSelectedVersion("");
      setSelectedRoof("");
      setAvailableRoofs([]);
      setAvailableProducts([]);
      setProductAvailable(false);
    }
  }, [selectedModel]);

  useEffect(() => {
    if (selectedBrand && selectedModel && selectedVersion) {
      const versionData = (
        VehicleDatabase[selectedBrand][selectedModel] || []
      ).find((v) => v.version === selectedVersion);
      if (versionData) {
        setAvailableRoofs(versionData.roof);
        setSelectedRoof("");
        setAvailableProducts([]);
        setProductAvailable(false);
      }
    }
  }, [selectedVersion]);

  useEffect(() => {
    if (selectedBrand && selectedModel && selectedVersion && selectedRoof) {
      const matchingProducts = Array.isArray(VehicleMatch)
        ? VehicleMatch.filter(
            (product) =>
              Array.isArray(product.compatibleWith) &&
              product.compatibleWith.some(
                (entry) =>
                  entry.brand === selectedBrand &&
                  entry.model === selectedModel &&
                  entry.version === selectedVersion &&
                  entry.roof === selectedRoof
              )
          )
        : [];
      setAvailableProducts(matchingProducts);
      setProductAvailable(matchingProducts.length > 0);
    }
  }, [selectedRoof]);

  const [formData, setFormData] = useState<FormData>({
    brand: "",
    model: "",
    year: "",
    mounting: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          brand: formData.brand,
          model: formData.model,
          year: formData.year,
          mount_type: formData.mounting,
          user_email: formData.email,
          user_phone: formData.phone || "nie podano",
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
      )
      .then(
        (result) => {
          alert("Wiadomość została wysłana ✅");
          setFormData({
            brand: "",
            model: "",
            year: "",
            mounting: "",
            email: "",
            phone: "",
          });
        },
        (error) => {
          alert("Wystąpił błąd ❌ Spróbuj ponownie później.");
        }
      );
  };

  const formFields: FormField[] = [
    { name: "brand", placeholder: "Marka", type: "text", required: true },
    { name: "model", placeholder: "Model", type: "text", required: true },
    {
      name: "year",
      placeholder: "Rok produkcji",
      type: "text",
      required: true,
    },
    {
      name: "mounting",
      placeholder: "Typ montażu (np. reling otwarty)",
      type: "text",
      required: true,
    },
    {
      name: "email",
      placeholder: "Twój e-mail",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      placeholder: "Numer telefonu (opcjonalnie)",
      type: "text",
      required: false,
    },
  ];

  const [formStep, setFormStep] = useState<number>(0);

  const handleStepChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Jeśli wpisano coś i jesteśmy na aktualnym kroku, przejdź dalej
    if (
      value.trim() !== "" &&
      formStep === formFields.findIndex((f) => f.name === name)
    ) {
      setTimeout(() => setFormStep((prev) => prev + 1), 200); // delay dla UX
    }
  };

  return (
    <div className="flex justify-center items-center flex-col gap-8 p-4 sm:p-8 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-2 w-full sm:w-1/2">
        <h1 className="text-center">
          Typy bagażników bazowych: <br />
          <span className="text-[9px] sm:text-xs">
            Podział ze względu na na typ montażu
          </span>
        </h1>
        <div className="flex justify-center items-center w-full gap-6">
          {images.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <motion.img
                className={`${item.imgClass} rounded-2xl cursor-pointer`}
                src={item.src}
                onClick={() =>
                  setClickedIndex(index === clickedIndex ? null : index)
                }
                animate={
                  clickedIndex === index
                    ? {
                        rotateY: 180,
                        scale: 2.4,
                        boxShadow: "0px 0px 25px rgba(0, 150, 255, 0.4)",
                        transition: { duration: 0.1, ease: "easeInOut" },
                      }
                    : {
                        rotateY: 0,
                        scale: 1,
                        boxShadow: "0px 0px 0px rgba(0,0,0,0)",
                      }
                }
                initial={true}
                whileTap={{ scale: 0.95 }}
              />
              <span className="text-[8px] sm:text-xs font-semibold text-gray-700 pt-2">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2"
        >
          <Car className="text-gray-600" />
          <Select onValueChange={setSelectedBrand}>
            <SelectTrigger>
              <SelectValue placeholder="Wybierz markę 🚗" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(VehicleDatabase).map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>
        {/* MODEL */}
        {availableModels.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <Layers3 className="text-gray-600" />
            <Select onValueChange={setSelectedModel}>
              <SelectTrigger>
                <SelectValue placeholder="Wybierz model 🚙" />
              </SelectTrigger>
              <SelectContent>
                {availableModels.map((model) => (
                  <SelectItem key={model} value={model}>
                    {model}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
        )}
        {/* VERSION */}
        {availableVersions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Settings2 className="text-gray-600" />
            <Select
              onValueChange={setSelectedVersion}
              disabled={selectedVersion !== ""}
            >
              <SelectTrigger>
                <SelectValue placeholder="Wybierz wersję 🛠️" />
              </SelectTrigger>
              <SelectContent>
                {availableVersions.map((ver) => (
                  <SelectItem key={ver.version} value={ver.version}>
                    {ver.version} ({ver.years})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
        )}
        {/* ROOF */}
        {availableRoofs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center gap-2"
          >
            <PanelTop className="text-gray-600" />
            <Select onValueChange={setSelectedRoof}>
              <SelectTrigger>
                <SelectValue placeholder="Wybierz typ dachu 🌤️" />
              </SelectTrigger>
              <SelectContent>
                {availableRoofs.map((roof) => (
                  <SelectItem key={roof} value={roof}>
                    {roof}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
        )}
        {/* PRODUCT MATCH */}
        {selectedRoof && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 px-4 sm:px-16"
          >
            {productAvailable && availableProducts.length > 0 ? (
              <motion.div
                className="grid gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {availableProducts.map((product) => (
                  <ProductBox
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    path={`/products/${product.id}`}
                    price={product.price}
                    newProduct="belki dachowe"
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="bg-red-100 p-4 rounded-xl text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p>❌ Żadne z produktów nie pasują do wybranego pojazdu.</p>
                <a
                  href={`mailto:bezpiecznybagaznik@gmail.com?subject=Zapytanie o dopasowanie produktu&body=Marka: ${selectedBrand}%0DModel: ${selectedModel}%0DWersja: ${selectedVersion}%0DRodzaj dachu: ${selectedRoof}`}
                  className="mt-2 inline-block text-blue-600 underline"
                >
                  📧 Napisz do nas
                </a>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
      {/* FORM */}
      <motion.div
        className="w-full sm:w-1/2"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="p-4 border rounded-xl h-full">
          <h3 className="font-semibold mb-2">🚘 Nie widzisz swojego auta?</h3>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            {formFields.map((field, index) =>
              index <= formStep ? (
                <input
                  key={field.name}
                  className="border p-2 rounded transition-all duration-300"
                  placeholder={field.placeholder}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleStepChange}
                  required={field.required}
                />
              ) : null
            )}
            {formStep >= formFields.length && (
              <Button type="submit">Wyślij zapytanie</Button>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
}
