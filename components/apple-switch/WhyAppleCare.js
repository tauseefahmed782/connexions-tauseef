"use client";
import React from "react";
import ACNPartnerIcon1 from "@/public/assets/acn-partner-icon-1.svg";
import CommonImage from "../common/CommonImage";

const WhyAppleCare = () => {
  const cards = [
    {
      title: "Authorized Apple Reseller",
      icon: ACNPartnerIcon1,
      alt: "authorized-apple-reseller-1",
      description:
        "We're an officially authorized reseller with direct access to Apple's enterprise programs and resources.",
    },
    {
      title: "Direct Apple Escalation Support",
      icon: ACNPartnerIcon1,
      alt: "authorized-apple-reseller-2",
      description:
        "When critical issues arise, we escalate directly with Apple engineering teams for faster resolution.",
    },
    {
      title: "Enterprise-Ready Solutions",
      icon: ACNPartnerIcon1,
      alt: "authorized-apple-reseller-3",
      description:
        "Proven track record deploying and supporting Apple at scale for organizations across industries.",
    },

  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-20 flex flex-col gap-8 bg-[#F5F5F7]">
      {/* Title */}
      <div className="flex flex-col gap-4 items-center text-center">
        <p className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Why Connexions?
        </p>
        <p className="text-[#4B5563] text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl font-normal">
          Your trusted partner for enterprise Apple deployments, backed by deep expertise and direct Apple relationships.
        </p>
      </div>

      {/* Cards Layout - Different for each breakpoint */}
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Single column */}
        <div className="sm:hidden flex flex-col gap-6 items-center">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 items-center justify-center 
                         w-full max-w-[280px] h-[200px]
                         p-4 border border-[#E9EBEF]
                          duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                <CommonImage
                  src={card.icon.src || card.icon}
                  height={36}
                  width={36}
                  alt={card.alt}
                  className="w-9 h-9"
                />
              </div>

              <div className="flex flex-col gap-2 text-center flex-1">
                <p className="font-bold text-sm text-primary leading-tight">
                  {card.title}
                </p>
                <p className="text-[#4B5563] text-base leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet: 2-1 layout */}
        <div className="hidden sm:block lg:hidden">
          <div className="flex justify-center">
            {cards.slice(0, 2).map((card, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-3 items-center justify-center 
                           w-full max-w-[320px] h-[240px]
                           p-4 ${idx === 0 ? 'border-r border-[#E9EBEF]' : ''} 
                          duration-300`}
              >
                <div className="w-16 h-16  flex items-center justify-center flex-shrink-0">
                  <CommonImage
                    src={card.icon.src || card.icon}
                    height={36}
                    width={36}
                    alt={card.alt}
                    className="w-9 h-9"
                  />
                </div>

                <div className="flex flex-col gap-2 text-center flex-1">
                  <p className="font-bold text-base text-primary leading-tight">
                    {card.title}
                  </p>
                  <p className="text-[#4B5563] text-lg leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 1 card centered */}
          <div className="flex justify-center">
            {cards.slice(2, 3).map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 items-center justify-center 
                           w-full max-w-[320px] h-[240px]
                            p-4 border border-[#E9EBEF]
                             duration-300"
              >
                <div className="w-16 h-16  flex items-center justify-center flex-shrink-0">
                  <CommonImage
                    src={card.icon.src || card.icon}
                    height={36}
                    width={36}
                    alt={card.alt}
                    className="w-9 h-9"
                  />
                </div>

                <div className="flex flex-col gap-2 text-center flex-1">
                  <p className="font-bold text-base text-primary leading-tight">
                    {card.title}
                  </p>
                  <p className="text-[#4B5563] text-lg leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 3 cards in one row */}
        <div className="hidden lg:flex flex-col items-center gap-0">
          {/* First row - 3 cards centered */}
          <div className="flex justify-center">
            {cards.slice(0, 3).map((card, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-3 items-center justify-center 
                           
                            p-4 ${idx < 2 ? 'border-r border-[#E9EBEF]' : ''} 
                             duration-300`}
              >
                <div className="w-16 h-16  flex items-center justify-center flex-shrink-0">
                  <CommonImage
                    src={card.icon.src || card.icon}
                    height={36}
                    width={36}
                    alt={card.alt}
                    className="w-9 h-9"
                  />
                </div>

                <div className="flex flex-col gap-2 text-center flex-1">
                  <p className="font-bold text-lg text-primary leading-tight">
                    {card.title}
                  </p>
                  <p className="text-[#4B5563] text-xl leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAppleCare;
