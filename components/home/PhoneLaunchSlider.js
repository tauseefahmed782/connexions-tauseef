"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PhoneLaunchPartnersSection from "./PhoneLaunchPartnersSection";

import HomeBannerLogo1 from "@/public/assets/home-banner-logo-1.svg";
import HomeBannerLogo2 from "@/public/assets/home-banner-logo-2.svg";
import HomeBannerLogo3 from "@/public/assets/home-banner-logo-3.svg";
import HomeBannerLogo4 from "@/public/assets/home-banner-logo-4.svg";
import HomeBannerLogo5 from "@/public/assets/home-banner-logo-5.svg";
import HomeBannerLogo6 from "@/public/assets/home-banner-logo-6.svg";
import HomeBannerLogo7 from "@/public/assets/home-banner-logo-7.svg";
import HomeBannerLogo8 from "@/public/assets/home-banner-logo-8.svg";
import Link from "next/link";

import AppleLogoBlack from "@/public/assets/apple-logo-black.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import CommonImage from "../common/CommonImage";
import Marquee from "react-fast-marquee";

export default function PhoneLaunchSlider() {
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
        <div className="py-0 px-4 sm:px-6 lg:px-20">
            <Swiper
                modules={[ Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="w-full h-[600px]"
            >
               

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="flex items-center justify-center h-full ">
                        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] items-center gap-8">
                            
                            <div>
                              <div className="inline-flex  items-center bg-[##FBFBFB] rounded-full border border-[#D4D4D4A3] px-3 py-2">
      
      {/* Black Badge */}
      <span className="bg-black text-white text-sm font-inter font-medium px-4 py-1 rounded-full">
        New
      </span>

      {/* Text */}
      <span className="ml-3 text-black text-sm font-inter font-medium">
        Smart Finance, Real Freedom.
      </span>

    </div>
                                <h1 className="text-black font-medium text-3xl md:text-4xl lg:text-7xl font-inter leading-tight mb-6">
              We have the MacBook you need.
            </h1>

            {/* Description */}
            <p className="text-[#7C7C7C] tracking-tight mb-8 font-normal text-base md:text-lg">
              Vaultly helps you track, save, and invest, all from one beautiful, secure dashboard. 
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
                                className="w-full rounded-xl"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                 {/* Slide 1 */}
                <SwiperSlide>
                    <PhoneLaunchPartnersSection/>
                </SwiperSlide>
            </Swiper>
            {/* Partners Auto-scrolling Swiper */}
          <div className="flex flex-col py-10 lg:flex-row lg:items-center lg:gap-6 max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-lg md:text-2xl font-normal text-primary whitespace-nowrap mb-4 lg:mb-0">
            Our Partners
          </h2>

          {/* Partners Auto-scrolling Swiper */}
          <Marquee>
            {partners.map((partner, index) => (
              <div className="flex items-center justify-center w-40 h-18 bg-[#F2F4F6] rounded-2xl border border-[#E1E4EB] mx-4">
                <div className="w-32 h-14 object-contain px-4 bg-white border border-[#E6E9EE] rounded-xl flex items-center justify-center">
                  <CommonImage
                    src={partner.logo.src || partner.logo}
                    alt={partner.name}
                    className="w-auto h-14 object-contain rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
        </div>
    );
}
