"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Smartphone, Chrome } from "lucide-react";
import HomeBannerImg1 from "@/public/assets/home-banner-img-1.svg";
import HomeBannerImg2 from "@/public/assets/macbook-new.svg";
import HomeBannerImg3 from "@/public/assets/home-banner-img-3.png";
import HomeBannerImg4 from "@/public/assets/home-banner-img-4.png";
import HomeBannerImg5 from "@/public/assets/home-banner-img-5.svg";
import HomeBannerImg6 from "@/public/assets/home-banner-img-6.svg";

import HomeBannerLogo1 from "@/public/assets/home-banner-logo-1.svg";
import HomeBannerLogo2 from "@/public/assets/home-banner-logo-2.svg";
import HomeBannerLogo3 from "@/public/assets/home-banner-logo-3.svg";
import HomeBannerLogo4 from "@/public/assets/home-banner-logo-4.svg";
import HomeBannerLogo5 from "@/public/assets/home-banner-logo-5.svg";
import HomeBannerLogo6 from "@/public/assets/home-banner-logo-6.svg";
import HomeBannerLogo7 from "@/public/assets/home-banner-logo-7.svg";
import HomeBannerLogo8 from "@/public/assets/home-banner-logo-8.svg";

import AppleLogoBlack from "@/public/assets/apple-logo-black.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import CommonImage from "../common/CommonImage";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const PhoneLaunchPartnersSectionbkp = () => {
  const phoneCards = [
    {
      bannerImg: HomeBannerImg2,
    }
  ];

  const partners = [
    // { name: "Apple Authorized Provider", logo: HomeBannerLogo1 },
    { name: "Apple Business Partner", logo: HomeBannerLogo2 },
    { name: "Samsung", logo: HomeBannerLogo3 },
    { name: "Canon", logo: HomeBannerLogo4 },
    { name: "Logitech", logo: HomeBannerLogo5 },
    { name: "Microsoft", logo: HomeBannerLogo6 },
    { name: "Asus", logo: HomeBannerLogo7 },
    { name: "Phillips", logo: HomeBannerLogo8 },

    // { name: "Apple Authorized Provider", logo: HomeBannerLogo1 },
    // { name: "Apple Business Partner", logo: HomeBannerLogo2 },
    { name: "Samsung", logo: HomeBannerLogo3 },
    { name: "Canon", logo: HomeBannerLogo4 },
    { name: "Logitech", logo: HomeBannerLogo5 },
    { name: "Microsoft", logo: HomeBannerLogo6 },
    { name: "Asus", logo: HomeBannerLogo7 },
    { name: "Phillips", logo: HomeBannerLogo8 },
  ];

  return (
    <div className="bg-white ">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Section */}
         <div className="grid grid-cols-1 md:grid-cols-[35%_65%]  gap-8 ">
                          <div className="flex flex-col justify-center">
                               {/* <div className="inline-flex  items-center bg-[##FBFBFB] rounded-full border border-[#D4D4D4A3] px-3 py-2">
      
      <span className="bg-black text-white text-sm font-inter font-medium px-4 py-1 rounded-full">
        New
      </span>

      <span className="ml-3 text-black text-sm font-inter font-medium">
        Smart Finance, Real Freedom.
      </span>

    </div>  */}
                                <h1 className="text-black font-medium text-3xl md:text-4xl lg:text-7xl font-inter leading-tight mb-6">
             MacBook.Built for business
            </h1>

            {/* Description */}
            <p className="text-[#7C7C7C] tracking-tight mb-8 font-normal text-base md:text-lg">
Empower your teams with speed, reliability, and enterprise-grade security all in one seamless ecosystem.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm font-normal">
              {/* <button className="bg-[#A6CE39] text-white px-8 py-3 rounded-full transition-colors">
                Explore Now
              </button> */}
              <Link href={"/contact-us"}>
                <button className="bg-primary text-white px-8 py-3 rounded-full transition-colors">
                  Explore Now
                </button>
              </Link>
            </div>
                            </div>
                            <img
                                src="/assets/macbook-new.svg"
                                alt="Slide 2"
                                className="w-full rounded-xl md:mt-10 mt-0 lg:mt-10 sm:mt-10"
                            />
                    </div>
        <style jsx>{`
          .phone-showcase-swiper {
            overflow: visible;
          }

          .partners-swiper {
            overflow: visible;
          }
        `}</style>
      </div>
    </div>
  );
};

export default PhoneLaunchPartnersSectionbkp;
