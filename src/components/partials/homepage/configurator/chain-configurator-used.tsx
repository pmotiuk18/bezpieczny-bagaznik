"use client";

import emailjs from "@emailjs/browser";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface FormState {
  vehicleType: string;
  tireSize: string;
}

const ChainConfiguratorUsed: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    vehicleType: "",
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Rozmiar opony</h2>
      <select
        name="vehicleType"
        onChange={handleChange}
        className="border px-2 py-1 rounded w-full"
        defaultValue=""
      >
        <option value="" disabled>
          Wybierz typ pojazdu
        </option>
        <option value="suv">SUV</option>
        <option value="van">Dostawcze</option>
        <option value="car">Osobowe</option>
      </select>
      <h1>Dostepne wkrótce...</h1>
      {/* <select
        name="tireSize"
        onChange={handleChange}
        className="border px-2 py-1 rounded w-full"
        defaultValue=""
      >
        <option value="" disabled>Wybierz rozmiar opony</option>
        {tireSizes.map((size) => (
          <option key={size} value={size}>{size}</option>
        ))}
      </select>
      <Button type="submit">Wyślij</Button> */}
    </form>
  );
};

export default ChainConfiguratorUsed;
