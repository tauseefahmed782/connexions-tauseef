"use client";
import React from "react";

import BgImage from "@/public/assets/gradient-wings-bg.png";

const IncidentCoverage = () => {
  const categories = [
    { label: "Software update issues", icon: "/assets/incidentIcon2.svg" },
    { label: "Directory integration issues", icon: "/assets/incidentIcon1.svg" },
    { label: "Networking issues", icon: "/assets/incidentIcon3.svg" },
    { label: "MDM issues", icon: "/assets/incidentIcon4.svg" },
    ];

 

  const Pill = ({ Icon, label }) => (
    <div className="inline-flex items-center gap-2 px-2 py-2 bg-white rounded-full border border-[#E1E4EB]  text-lg font-medium text-[#1D1D1F] transition w-auto whitespace-nowrap flex-shrink-0">
      <img src={Icon} alt={label} className="w-10 h-10 shrink-0" />
      <span className="text-[#191919]">{label}</span>
    </div>
  );

  const ScrollingRow = ({ items, direction = "left", speed = 30 }) => {
    // Duplicate items multiple times to create seamless loop
    const duplicatedItems = [...items, ...items, ...items];

    return (
      <div className="overflow-hidden mb-6">
        <div
          className="flex gap-6 items-center"
          style={{
            animation: `scroll-${direction} ${speed}s linear infinite`,
            width: "fit-content",
          }}
        >
          {duplicatedItems.map((item, i) => (
            <Pill key={i} Icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>

      <section className="relative rounded-2xl py-20 px-6 md:px-12 lg:px-20 flex justify-center">
        <div
          className="relative  p-20 w-full max-w-6xl text-center overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${BgImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}

          {/* Content */}
          <div className="relative z-10">
            {/* Subtitle */}
            <div className="flex items-center justify-center">
              <p className="text-center px-4 py-1 ring-4 ring-white text-base text-[#3D3D3D] font-medium mb-3 relative z-10 bg-[#F1F7FC] shadow-sm w-max rounded-full">
               Incident Coverage
              </p>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-4xl sm:text-4xl lg:text-4xl font-bold text-[#000] mb-10">
             Enterprise incident support types.
            </h2>

            {/* Categories Carousels */}
            <div>
              {/* Row 1 - Left to Right */}
              <ScrollingRow items={categories} direction="left" speed={25} />

              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IncidentCoverage;
