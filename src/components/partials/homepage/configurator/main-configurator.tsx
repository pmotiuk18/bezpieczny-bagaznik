"use client";

import { Bike, Settings, Snowflake } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import BaseConfigurator from "./base-configurator";
import BikeConfigurator from "./bike-configurator";
import ChainConfiguratorNew from "./chain-configurator-new";
import ChainConfiguratorUsed from "./chain-configurator-used";

type ConfiguratorType = "base" | "bike" | "chain";
type SubChainType = "new" | "used";

const MainConfigurator: React.FC = () => {
  const [configuratorType, setConfiguratorType] =
    useState<ConfiguratorType>("base");
  const [subChainType, setSubChainType] = useState<SubChainType>("new");

  return (
    <div className="space-y-4 mx-1">
      {/* Główna nawigacja */}
      <div className="flex justify-center gap-2 flex-wrap px-2 pt-4">
        <Button
          size="sm"
          variant={configuratorType === "base" ? "default" : "outline"}
          onClick={() => setConfiguratorType("base")}
          className="flex items-center gap-1 text-xs"
        >
          <Settings className="w-3 h-3" /> Bazowy
        </Button>
        <Button
          size="sm"
          variant={configuratorType === "bike" ? "default" : "outline"}
          onClick={() => setConfiguratorType("bike")}
          className="flex items-center gap-1 text-xs"
        >
          <Bike className="w-3 h-3" /> Rowerowy
        </Button>
        <Button
          size="sm"
          variant={configuratorType === "chain" ? "default" : "outline"}
          onClick={() => setConfiguratorType("chain")}
          className="flex items-center gap-1 text-xs"
        >
          <Snowflake className="w-3 h-3" /> Łańcuchy
        </Button>
      </div>

      {configuratorType === "base" && <BaseConfigurator />}
      {configuratorType === "bike" && <BikeConfigurator />}

      {configuratorType === "chain" && (
        <div className="text-center space-y-4 p-2 max-w-3xl mx-auto">
          <div className="flex gap-2">
            <Button
              onClick={() => setSubChainType("new")}
              className={subChainType === "new" ? "font-bold underline" : ""}
            >
              Opony fabryczne
            </Button>
            <button
              onClick={() => setSubChainType("used")}
              className={subChainType === "used" ? "font-bold underline" : ""}
            >
              Inny rozmiar opony
            </button>
          </div>
          {subChainType === "new" && <ChainConfiguratorNew />}
          {subChainType === "used" && <ChainConfiguratorUsed />}
        </div>
      )}
    </div>
  );
};

export { MainConfigurator };
