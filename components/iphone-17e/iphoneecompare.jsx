"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import compareData from "../../compare_extract_tmp.json";

const DASH = "\u2014";

function normalizeCompareText(value) {
  if (!value) {
    return "";
  }

  return String(value)
    .replace(/Refer to legal disclaimers\.?/g, "")
    .replace(/\u00E2\u20AC\u00B3/g, '"')
    .replace(/\u00E2\u20AC\u2018/g, "-")
    .replace(/\u00E2\u20AC\u00A8/g, " ")
    .replace(/\u00E2\u20AC\u201D/g, DASH)
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeCompareLines(value) {
  const items = Array.isArray(value) ? value : value ? [value] : [];
  return items.map((item) => normalizeCompareText(item)).filter(Boolean);
}

const models = compareData.map((entry) => ({
  id: entry.Name.replace(/[^A-Za-z0-9]+/g, "").toLowerCase(),
  name: entry.Name,
  image: entry.Value.image,
  imageClassName: "max-h-[160px] max-w-[120px]",
  colorsLabel: normalizeCompareText(entry.Value.colorsLabel),
  colors: entry.Value.colors ?? [],
  displayValue: normalizeCompareText(entry.Value.displayValue),
  displayLines: normalizeCompareLines(entry.Value.displayLines),
  designIcon: entry.Value.designIcon,
  designLines: normalizeCompareLines(entry.Value.designLines),
  chipIcon: entry.Value.chipIcon,
  chipLines: normalizeCompareLines(entry.Value.chipLines),
  batteryIcon: entry.Value.batteryIcon,
  batteryLines: normalizeCompareLines(entry.Value.batteryLines),
  frontCameraIcon: entry.Value.frontCameraIcon,
  frontCameraLines: normalizeCompareLines(entry.Value.frontCameraLines),
  cameraIcon: entry.Value.cameraIcon,
  cameraLines: normalizeCompareLines(entry.Value.cameraLines),
  zoomIcon: entry.Value.zoomIcon,
  zoomLines: normalizeCompareLines(entry.Value.zoomLines),
  intelligenceIcon: entry.Value.intelligenceIcon,
  intelligenceLines: normalizeCompareLines(entry.Value.intelligenceLines),
  safetyIcon: entry.Value.safetyIcon,
  safetyLines: normalizeCompareLines(entry.Value.safetyLines),
  usbIcon: entry.Value.usbIcon,
  usbLines: normalizeCompareLines(entry.Value.usbLines),
}));

const modelByName = Object.fromEntries(models.map((model) => [model.name, model]));

const allModelOptions = [
  "iPhone 17e",
  "iPhone 17 Pro Max",
  "iPhone 17 Pro",
  "iPhone Air",
  "iPhone 17",
  "iPhone 16e",
  "iPhone 16 Pro Max",
  "iPhone 16 Pro",
  "iPhone 16 Plus",
  "iPhone 16",
  "iPhone SE (3rd generation)",
  "iPhone 15 Pro Max",
  "iPhone 15 Pro",
  "iPhone 15 Plus",
  "iPhone 15",
  "iPhone 14 Pro Max",
  "iPhone 14 Pro",
  "iPhone 14 Plus",
  "iPhone 14",
  "iPhone 13 Pro Max",
  "iPhone 13 Pro",
  "iPhone 13",
  "iPhone 13 mini",
  "iPhone 12 Pro Max",
  "iPhone 12 Pro",
  "iPhone 12",
  "iPhone 12 mini",
  "iPhone 11 Pro Max",
  "iPhone 11 Pro",
  "iPhone 11",
  "iPhone SE (2nd generation)",
  "iPhone XS Max",
  "iPhone XS",
  "iPhone XR",
  "iPhone X",
  "iPhone 8 Plus",
  "iPhone 8",
  "iPhone 7 Plus",
  "iPhone 7",
];

const defaultSelection = ["iPhone 17", "iPhone 17e", "iPhone 16e"];

function TextLines({ lines, compact = false }) {
  return (
    <div className={compact ? "space-y-1" : "space-y-1.5"}>
      {lines.map((line, index) => (
        <p
          key={`${index}-${compact ? "compact" : "full"}`}
          className={`text-center text-[#1D1D1F] ${compact ? "text-[13px] leading-5" : "text-[14px] leading-5"}`}
        >
          {line}
        </p>
      ))}
    </div>
  );
}

function IconSpecBlock({ icon, lines, compact = false }) {
  return (
    <div className="flex flex-col items-center">
      {icon ? (
        <Image src={icon} alt="" width={56} height={56} className="h-11 w-11 object-contain" />
      ) : (
        <div className="h-11 w-11" />
      )}
      <div className="mt-3">
        <TextLines lines={lines} compact={compact} />
      </div>
    </div>
  );
}

function CompareColumn({ optionName, allOptions, onChange }) {
  const model = modelByName[optionName] || modelByName["iPhone 17e"] || models[0];

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[210px]">
        <select
          value={optionName}
          onChange={(event) => onChange(event.target.value)}
          className="w-full border-b border-[#D2D2D7] bg-transparent pb-3 text-center text-[17px] font-semibold leading-6 text-[#1D1D1F] outline-none"
        >
          {allOptions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-10 flex h-[170px] items-end justify-center">
        <Image
          src={model.image}
          alt={model.name}
          width={240}
          height={320}
          className={`h-auto w-auto object-contain ${model.imageClassName}`}
        />
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {model.colors.map((color) => (
          <span
            key={`${model.id}-${color}`}
            className="h-3 w-3 rounded-full border border-black/10"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <p className="mt-3 min-h-[44px] text-center text-[15px] leading-6 text-[#6E6E73]">
        {model.colorsLabel}
      </p>

      <button className="mt-6 rounded-full border border-[#1D1D1F] px-5 py-2 text-[14px] font-medium text-[#1D1D1F]">
        Buy
      </button>

      <div className="mt-8 w-full border-t border-[#D2D2D7]" />

      <div className="mt-8 space-y-8 text-center">
        <div>
          <p className="text-[22px] font-semibold leading-none tracking-[-0.04em] text-[#1D1D1F] md:text-[28px]">
            {model.displayValue}
          </p>
          <div className="mt-2">
            <TextLines lines={model.displayLines} compact />
          </div>
        </div>

        <IconSpecBlock icon={model.designIcon} lines={model.designLines} compact />
        <IconSpecBlock icon={model.chipIcon} lines={model.chipLines} compact />
        <IconSpecBlock icon={model.batteryIcon} lines={model.batteryLines} compact />
        <IconSpecBlock icon={model.frontCameraIcon} lines={model.frontCameraLines} compact />
        <IconSpecBlock icon={model.cameraIcon} lines={model.cameraLines} compact />
        <IconSpecBlock icon={model.zoomIcon} lines={model.zoomLines} compact />
        <IconSpecBlock icon={model.intelligenceIcon} lines={model.intelligenceLines} compact />
        <IconSpecBlock icon={model.safetyIcon} lines={model.safetyLines} compact />
        <IconSpecBlock icon={model.usbIcon} lines={model.usbLines} compact />
      </div>
    </div>
  );
}

export default function Iphoneecompare() {
  const [selectedModels, setSelectedModels] = useState(defaultSelection);

  const comparedModels = useMemo(() => selectedModels, [selectedModels]);

  const updateSelection = (index, nextValue) => {
    setSelectedModels((current) => {
      const updated = [...current];
      updated[index] = nextValue;
      return updated;
    });
  };

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 text-center">
          <p className="text-[21px] font-semibold leading-8 tracking-[-0.03em] text-[#1D1D1F]">
            Compare
          </p>
          <h2 className="mt-2 text-[40px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#1D1D1F] md:text-[40px]">
            Which iPhone is right for you?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {comparedModels.map((optionName, index) => (
            <CompareColumn
              key={`${index}-${optionName}`}
              optionName={optionName}
              allOptions={allModelOptions}
              onChange={(nextValue) => updateSelection(index, nextValue)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
