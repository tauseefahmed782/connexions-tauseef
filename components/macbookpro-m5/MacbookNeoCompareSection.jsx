"use client";

import { useMemo, useState } from "react";
import CommonImage from "../common/CommonImage";
import NeoHeroImage from "@/public/assets/macbook-new.svg";
import MacBookAirImage from "@/public/assets/apple-macbook-product-img-1.svg";
import MacBookProImage from "@/public/assets/apple-macbook-product-img-2.svg";
import IMacImage from "@/public/assets/apple-macbook-product-img-3.svg";
import MacMiniImage from "@/public/assets/apple-macbook-product-img-4.svg";
import MacStudioImage from "@/public/assets/apple-macbook-product-img-5.svg";

const models = [
  {
    id: "neo",
    name: 'MacBook Neo 13"',
    price: "Buy",
    chip: "Apple A18 Pro chip",
    ai: "Apple Intelligence",
    cpuValue: "6-core",
    cpuLabel: "CPU",
    gpuValue: "5-core",
    gpuLabel: "GPU",
    memoryPrefix: "",
    memoryValue: "8GB",
    memoryLabel: "unified memory",
    storagePrefix: "From",
    storageValue: "256GB",
    storageLabel: "storage",
    batteryPrefix: "Up to",
    batteryValue: "16 hours",
    batteryLabel: "battery life",
    footer: "Touch ID (512GB model)",
    displayValue: "33.02 cm",
    displayLabel: '(13.0") Liquid Retina display',
    colorsLabel: "Silver, Blush, Citrus, Indigo",
    colors: ["#E7E7E3", "#E5D0D2", "#D8D46A", "#66748D"],
    image: NeoHeroImage,
  },
  {
    id: "air13",
    name: 'MacBook Air 13" (M5)',
    price: "Buy",
    chip: "Apple M5 chip",
    ai: "Apple Intelligence",
    cpuValue: "10-core",
    cpuLabel: "CPU",
    gpuPrefix: "From",
    gpuValue: "8-core",
    gpuLabel: "GPU",
    memoryPrefix: "From",
    memoryValue: "16GB",
    memoryLabel: "unified memory",
    storagePrefix: "From",
    storageValue: "512GB",
    storageLabel: "storage",
    batteryPrefix: "Up to",
    batteryValue: "18 hours",
    batteryLabel: "battery life",
    footer: "Touch ID",
    displayValue: "34.46 cm",
    displayLabel: '(13.6") Liquid Retina display',
    colorsLabel: "Sky Blue, Silver, Starlight, Midnight",
    colors: ["#CEDCE5", "#E4E5E5", "#E9E2D2", "#39414E"],
    image: MacBookAirImage,
  },
  {
    id: "air15",
    name: 'MacBook Air 15" (M5)',
    price: "Buy",
    chip: "Apple M5 chip",
    ai: "Apple Intelligence",
    cpuValue: "10-core",
    cpuLabel: "CPU",
    gpuValue: "10-core",
    gpuLabel: "GPU",
    memoryPrefix: "From",
    memoryValue: "16GB",
    memoryLabel: "unified memory",
    storagePrefix: "From",
    storageValue: "512GB",
    storageLabel: "storage",
    batteryPrefix: "Up to",
    batteryValue: "18 hours",
    batteryLabel: "battery life",
    footer: "Touch ID",
    displayValue: "38.91 cm",
    displayLabel: '(15.3") Liquid Retina display',
    colorsLabel: "Sky Blue, Silver, Starlight, Midnight",
    colors: ["#CEDCE5", "#E4E5E5", "#E9E2D2", "#39414E"],
    image: MacBookAirImage,
  },
  {
    id: "pro14",
    name: 'MacBook Pro 14"',
    price: "Buy",
    chip: "Apple M4 Pro chip",
    ai: "Apple Intelligence",
    cpuValue: "12-core",
    cpuLabel: "CPU",
    gpuValue: "16-core",
    gpuLabel: "GPU",
    memoryPrefix: "From",
    memoryValue: "24GB",
    memoryLabel: "unified memory",
    storagePrefix: "From",
    storageValue: "512GB",
    storageLabel: "storage",
    batteryPrefix: "Up to",
    batteryValue: "22 hours",
    batteryLabel: "battery life",
    footer: "Touch ID",
    displayValue: "35.97 cm",
    displayLabel: '(14.2") Liquid Retina XDR display',
    colorsLabel: "Silver, Space Black",
    colors: ["#D8D8D5", "#30343D"],
    image: MacBookProImage,
  },
  {
    id: "imac",
    name: "iMac",
    price: "Buy",
    chip: "Apple M4 chip",
    ai: "Apple Intelligence",
    cpuValue: "8-core",
    cpuLabel: "CPU",
    gpuValue: "8-core",
    gpuLabel: "GPU",
    memoryPrefix: "From",
    memoryValue: "16GB",
    memoryLabel: "unified memory",
    storagePrefix: "From",
    storageValue: "256GB",
    storageLabel: "storage",
    batteryPrefix: "",
    batteryValue: "Desktop",
    batteryLabel: "power",
    footer: "Touch ID keyboard",
    displayValue: "59.69 cm",
    displayLabel: '(23.5") 4.5K Retina display',
    colorsLabel: "Blue, Green, Pink, Silver",
    colors: ["#6D839D", "#7D8E6B", "#C39FA7", "#DFDFDD"],
    image: IMacImage,
  },
  {
    id: "mini",
    name: "Mac mini",
    price: "Buy",
    chip: "Apple M4 chip",
    ai: "Apple Intelligence",
    cpuValue: "10-core",
    cpuLabel: "CPU",
    gpuValue: "10-core",
    gpuLabel: "GPU",
    memoryPrefix: "From",
    memoryValue: "16GB",
    memoryLabel: "unified memory",
    storagePrefix: "From",
    storageValue: "256GB",
    storageLabel: "storage",
    batteryPrefix: "",
    batteryValue: "Desktop",
    batteryLabel: "power",
    footer: "Bring your own display",
    displayValue: "Your display",
    displayLabel: "required",
    colorsLabel: "Silver",
    colors: ["#DFDFDD"],
    image: MacMiniImage,
  },
  {
    id: "studio",
    name: "Mac Studio",
    price: "Buy",
    chip: "Apple M4 Max chip",
    ai: "Apple Intelligence",
    cpuValue: "14-core",
    cpuLabel: "CPU",
    gpuValue: "32-core",
    gpuLabel: "GPU",
    memoryPrefix: "From",
    memoryValue: "36GB",
    memoryLabel: "unified memory",
    storagePrefix: "From",
    storageValue: "512GB",
    storageLabel: "storage",
    batteryPrefix: "",
    batteryValue: "Desktop",
    batteryLabel: "power",
    footer: "Supports multiple displays",
    displayValue: "Pro display",
    displayLabel: "support",
    colorsLabel: "Silver",
    colors: ["#DFDFDD"],
    image: MacStudioImage,
  },
];

const defaultSelection = ["neo", "air13", "air15"];

function SpecBlock({ prefix, value, label }) {
  return (
    <div className="text-center">
      {prefix ? <p className="mb-1 text-[15px] leading-6 text-[#1D1D1F]">{prefix}</p> : null}
      <p className="text-[20px] font-semibold leading-7 tracking-[-0.4px] text-[#1D1D1F]">
        {value}
      </p>
      <p className="mt-1 text-[15px] leading-6 text-[#1D1D1F]">{label}</p>
    </div>
  );
}

function CompareColumn({ model, allModels, selectedId, onChange }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[166px]">
        <select
          value={selectedId}
          onChange={(event) => onChange(event.target.value)}
          className="w-full border-b border-[#D2D2D7] bg-transparent pb-4 text-center text-[17px] font-semibold leading-6 text-[#1D1D1F] outline-none"
        >
          {allModels.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-10 flex h-[92px] items-end justify-center">
        <CommonImage
          src={model.image.src || model.image}
          alt={model.name}
          className="h-auto max-h-[72px] w-auto max-w-[150px]"
        />
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {model.colors.map((color) => (
          <span
            key={`${model.id}-${color}`}
            className="h-3 w-3 rounded-full border border-black/10"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <p className="mt-3 min-h-[48px] max-w-[190px] text-center text-[15px] leading-6 text-[#6E6E73]">
        {model.colorsLabel}
      </p>

      <div className="mt-8 w-full max-w-[166px] border-t border-[#D2D2D7]" />

      <button className="mt-7 rounded-full border border-[#1D1D1F] px-7 py-[9px] text-[17px] leading-6 text-[#1D1D1F]">
        {model.price}
      </button>

      <div className="mt-12 flex flex-col gap-14">
        <SpecBlock value={model.displayValue} label={model.displayLabel} />
        <SpecBlock value={model.chip} label="" />
        <SpecBlock value={model.ai} label="" />
        <SpecBlock value={model.cpuValue} label={model.cpuLabel} />
        <SpecBlock prefix={model.gpuPrefix} value={model.gpuValue} label={model.gpuLabel} />
        <SpecBlock
          prefix={model.memoryPrefix}
          value={model.memoryValue}
          label={model.memoryLabel}
        />
        <SpecBlock
          prefix={model.storagePrefix}
          value={model.storageValue}
          label={model.storageLabel}
        />
        <SpecBlock
          prefix={model.batteryPrefix}
          value={model.batteryValue}
          label={model.batteryLabel}
        />
        <SpecBlock value={model.footer} label="" />
      </div>
    </div>
  );
}

export default function MacbookNeoCompareSection() {
  const [selectedModels, setSelectedModels] = useState(defaultSelection);

  const comparedModels = useMemo(
    () => selectedModels.map((id) => models.find((model) => model.id === id) || models[0]),
    [selectedModels]
  );

  const updateSelection = (index, nextId) => {
    setSelectedModels((current) => {
      const updated = [...current];
      updated[index] = nextId;
      return updated;
    });
  };

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[980px]">
        <div className="mb-14 text-center">
          <p className="text-[24px] font-semibold leading-8 tracking-[-0.4px] text-[#1D1D1F]">
            Compare
          </p>
          <h2 className="mt-2 text-[44px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#1D1D1F] md:text-[58px]">
            Which Mac is right for you?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10">
          {comparedModels.map((model, index) => (
            <CompareColumn
              key={`${index}-${model.id}`}
              model={model}
              allModels={models}
              selectedId={selectedModels[index]}
              onChange={(nextId) => updateSelection(index, nextId)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
