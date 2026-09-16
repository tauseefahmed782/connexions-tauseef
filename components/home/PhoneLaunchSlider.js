"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PhoneLaunchPartnersSection from "./PhoneLaunchPartnersSection";
import PhoneLaunchPartnersSectionbkp from "./PhoneLaunchPartnersSectionbkp";

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
import MackbookNeo from "./MackbookNeo";

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
                modules={[Autoplay ]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                autoHeight={true}
                breakpoints={{ 768: { autoHeight: false } }}
                className="home-launch-slider w-full"
            >
               

                {[
                    {
                        heading: "Iphone 18 pro",
                        description: "Pro further in business",
                        image: "/assets/iphone18pro.webp",
                        href: "/iphone-18-pro",
                    },
                    {
                        heading: "Iphone Duo",
                        description: "Coming soon",
                        image: "/assets/iphone-duo.webp",
                        href: "/iphone-duo",
                    },
                ].map((phone) => (
                    <SwiperSlide key={phone.href} className="iphone-launch-slide">
                        <div className="bg-white max-w-7xl mx-auto py-3 md:py-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                                <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left min-w-0">
                                    <h1 className="text-black font-medium text-3xl md:text-4xl lg:text-7xl font-inter leading-tight mb-3 md:mb-6">
                                        {phone.heading}
                                    </h1>
                                    <p className="text-[#7C7C7C] tracking-tight mb-5 md:mb-8 font-normal text-base md:text-lg">
                                        {phone.description}
                                    </p>
                                    <Link
                                        href={phone.href}
                                        className="bg-primary text-white px-8 py-3 rounded-full transition-colors text-sm font-normal w-fit"
                                    >
                                        Explore now
                                    </Link>
                                </div>
                                <img
                                    src={phone.image}
                                    alt={phone.heading}
                                    className="w-full h-auto object-contain rounded-xl"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {/* Slide 2 */}
                {/* <SwiperSlide>
                    <PhoneLaunchPartnersSectionbkp/>
                </SwiperSlide> */}
                  <SwiperSlide>
                    <MackbookNeo/>
                </SwiperSlide>
                 {/* Slide 1 */}
                <SwiperSlide>
                    <PhoneLaunchPartnersSection/>
                </SwiperSlide>
            </Swiper>
            <style jsx global>{`
                .home-launch-slider > .swiper-wrapper {
                    align-items: stretch;
                }

                .home-launch-slider > .swiper-wrapper > .swiper-slide {
                    height: auto;
                    display: flex;
                    align-items: center;
                }

                .home-launch-slider > .swiper-wrapper > .swiper-slide > div {
                    width: 100%;
                }
                @media (max-width: 767px) {
                    .home-launch-slider > .swiper-wrapper {
                        align-items: flex-start;
                    }
                }
                @media (min-width: 768px) {
                    .home-launch-slider > .swiper-wrapper {
                        height: auto !important;
                    }
                }
            `}</style>
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
