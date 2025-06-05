"use client";

import emailjs from "@emailjs/browser";
import React, { ChangeEvent, FormEvent, useState } from "react";

const brands: string[] = ["Toyota", "Volkswagen", "Ford", "BMW", "Audi"];
const models: string[] = ["Corolla", "Golf", "Focus", "3 Series", "A4"];
const years: string[] = ["2020", "2021", "2022", "2023", "2024"];
const tireSizes: string[] = [
  "175/65-14",
  "185/65-15",
  "195/60-15",
  "205/55-16",
  "215/55-17",
  "225/45-17",
  "225/50-17",
  "235/40-18",
  "245/40-18",
  "255/35-19",
];

interface FormState {
  brand: string;
  model: string;
  year: string;
  tireSize: string;
}

const ChainConfiguratorNew: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    brand: "",
    model: "",
    year: "",
    tireSize: "",
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      form as unknown as Record<string, unknown>,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
    );
    alert("Wysłano!");
  };

  const renderSelect = (
    name: keyof FormState,
    options: string[],
    label: string
  ): React.ReactElement => (
    <select
      name={name}
      onChange={handleChange}
      className="border px-2 py-1 rounded w-full"
      defaultValue=""
    >
      <option value="" disabled>
        {label}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Model Auta</h2>
      {renderSelect("brand", brands, "Wybierz markę pojazdu")}
      <h1>Dostepne wkrótce...</h1>
      {/* {renderSelect("model", models, "Wybierz model pojazdu")}
      {renderSelect("year", years, "Wybierz rok produkcji")}
      {renderSelect("tireSize", tireSizes, "Wybierz rozmiar opony")}
      <Button type="submit">Wyślij</Button> */}
    </form>
  );
};

export default ChainConfiguratorNew;
