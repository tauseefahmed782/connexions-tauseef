"use client";

import { useMemo, useState } from "react";
import CommonImage from "../common/CommonImage";
import ProPadImage from "@/public/assets/ipadpro/p-pad.png";
import AirPadImage from "@/public/assets/ipadpro/g-pad.png";
import BasePadImage from "@/public/assets/ipadpro/s-pad.png";

const models = [
  {
    id: "pro11",
    name: 'iPad Pro 11" (M5)',
    image: ProPadImage,
    colorsLabel: "Space Black, Silver",
    colors: ["#3B3D42", "#D8D8D5"],
    displayValue: "28.22 cm",
    displayLabel: '(11.1") Ultra Retina XDR display',
    featureRows: [
      "ProMotion technology",
      "P3 wide colour",
      "True Tone",
      "Anti-reflective coating",
      "Nano-texture display glass option on 1TB and 2TB models",
    ],
    chip: "M5 chip",
    intelligence: "Apple Intelligence",
    camera: "12MP Wide camera",
    cameraSub: "4K video, ProRes",
    frontCamera: "Landscape 12MP Center Stage camera",
    frontCameraSub: "Centre Stage",
    pencil: "Supports Apple Pencil Pro",
    pencilSub: "Supports Apple Pencil (USB-C)",
    keyboard: "Supports Magic Keyboard for iPad Pro",
  },
  {
    id: "air11",
    name: 'iPad Air 11" (M3)',
    image: AirPadImage,
    colorsLabel: "Space Gray, Blue, Purple, Starlight",
    colors: ["#707784", "#C8D7E5", "#D9D2EC", "#E4DDC8"],
    displayValue: "27.59 cm",
    displayLabel: '(11") Liquid Retina display',
    featureRows: [
      "P3 wide colour",
      "True Tone",
      "Anti-reflective coating",
      " ",
      " ",
    ],
    chip: "M3 chip",
    intelligence: "Apple Intelligence",
    camera: "12MP Wide camera",
    cameraSub: "4K video",
    frontCamera: "Landscape 12MP Center Stage camera",
    frontCameraSub: "Centre Stage",
    pencil: "Supports Apple Pencil Pro",
    pencilSub: "Supports Apple Pencil (USB-C)",
    keyboard: "Supports Magic Keyboard for iPad Air",
  },
  {
    id: "ipad16",
    name: "iPad (A16)",
    image: BasePadImage,
    colorsLabel: "Blue, Pink, Yellow, Silver",
    colors: ["#64A7F4", "#F69AC4", "#F0D45C", "#E5E5E5"],
    displayValue: "27.59 cm",
    displayLabel: '(11") Liquid Retina display',
    featureRows: [
      "sRGB colour",
      "True Tone",
      " ",
      " ",
      " ",
    ],
    chip: "A16 chip",
    intelligence: "—",
    camera: "12MP Wide camera",
    cameraSub: "4K video",
    frontCamera: "Landscape 12MP Center Stage camera",
    frontCameraSub: "Centre Stage",
    pencil: "Supports Apple Pencil (USB-C)",
    pencilSub: "Supports Apple Pencil (1st generation)",
    keyboard: "Supports Magic Keyboard Folio",
  },
];

const defaultSelection = ["pro11", "air11", "ipad16"];

function ColorDots({ colors }) {
  return (
    <div className="mt-4 flex items-center justify-center gap-2">
      {colors.map((color) => (
        <span
          key={color}
          className="h-2.5 w-2.5 rounded-full border border-black/10"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

function TextRow({ children, muted = false }) {
  return (
    <p className={`text-center text-[12px] leading-[1.45] ${muted ? "text-[#6E6E73]" : "text-[#1D1D1F]"}`}>
      {children}
    </p>
  );
}

function CompareColumn({ model, allModels, selectedId, onChange }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[170px]">
        <select
          value={selectedId}
          onChange={(event) => onChange(event.target.value)}
          className="w-full border-b border-[#D2D2D7] bg-transparent pb-3 text-center text-[12px] font-semibold leading-5 text-[#1D1D1F] outline-none"
        >
          {allModels.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8 flex h-[120px] items-end justify-center">
        <CommonImage
          src={model.image.src || model.image}
          alt={model.name}
          className="h-auto max-h-[100px] w-auto max-w-[120px] object-contain"
        />
      </div>

      <ColorDots colors={model.colors} />

      <p className="mt-3 min-h-[32px] text-center text-[10px] leading-[1.35] text-[#6E6E73]">
        {model.colorsLabel}
      </p>

      <button className="mt-5 rounded-full border border-[#1D1D1F] px-4 py-1.5 text-[11px] font-semibold leading-4 text-[#1D1D1F]">
        Buy
      </button>

      <div className="mt-8 w-full border-t border-[#D2D2D7]" />

      <div className="mt-7 flex min-h-[640px] w-full flex-col items-center gap-7">
        <div className="min-h-[84px]">
          <p className="text-center text-[26px] font-semibold leading-none tracking-[-0.04em] text-[#1D1D1F]">
            {model.displayValue}
          </p>
          <TextRow>{model.displayLabel}</TextRow>
          <div className="mt-2 space-y-0.5">
            {model.featureRows.map((item, index) => (
              <TextRow key={`${model.id}-feature-${index}`} muted>
                {item}
              </TextRow>
            ))}
          </div>
        </div>

        <div className="min-h-[54px]">
          <TextRow>{model.chip}</TextRow>
        </div>

        <div className="min-h-[54px]">
          <TextRow>{model.intelligence}</TextRow>
        </div>

        <div className="min-h-[58px]">
          <TextRow>{model.camera}</TextRow>
          <TextRow muted>{model.cameraSub}</TextRow>
        </div>

        <div className="min-h-[58px]">
          <TextRow>{model.frontCamera}</TextRow>
          <TextRow muted>{model.frontCameraSub}</TextRow>
        </div>

        <div className="min-h-[58px]">
          <TextRow>{model.pencil}</TextRow>
          <TextRow muted>{model.pencilSub}</TextRow>
        </div>

        <div className="min-h-[42px]">
          <TextRow>{model.keyboard}</TextRow>
        </div>
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
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-[980px]">
        <div className="mb-12">
          <p className="text-[12px] font-semibold leading-5 text-[#6E6E73]">Compare</p>
          <h2 className="mt-1 text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1D1D1F] md:text-[48px]">
            Find the right iPad for you.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
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
