"use client";

import * as RadixSlider from "@radix-ui/react-slider";
import React from "react";

interface SliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
}) => {
  return (
    <RadixSlider.Root
      className="relative flex items-center w-full h-5"
      value={value}
      onValueChange={onValueChange}
      min={min}
      max={max}
      step={step}
    >
      <RadixSlider.Track className="bg-gray-200 relative grow rounded-full h-1">
        <RadixSlider.Range className="absolute bg-blue-500 rounded-full h-full" />
      </RadixSlider.Track>
      <RadixSlider.Thumb className="block w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-sm" />
    </RadixSlider.Root>
  );
};
