import React from "react";
import AppleGrid1 from "@/public/assets/apple-grid-1.svg";
import AppleGridKey from "@/public/assets/apple-grid-key.svg";
import AppleGridBook from "@/public/assets/apple-grid-book.svg";
import AppleGrid2 from "@/public/assets/apple-grid-2.svg";
import CommonImage from "../common/CommonImage";
import Link from "next/link";

const AppleCareBanner = () => {
  return (
            <div className="py-10 px-4 sm:px-6 lg:px-20 ">

    <div className="flex items-start xl:items-center lg:items-center md:items-center justify-center h-full ">
                        <div className="grid grid-cols-1 md:grid-cols-[40%_60%]  gap-8">
                            
                            <div>
                               <div className="inline-flex  mb-5 mb:mb-0 lg:mb-0 xl:mb-0 sm:mb-0 items-center bg-[#FBFBFB] rounded-full border border-[#D4D4D4A3] px-3 py-2">
      
     

      <span className="ml-3 text-black text-sm font-inter font-normal">
        Enterprise Program
      </span>

    </div> 
                                <h1 className="text-black font-medium text-3xl md:text-4xl lg:text-7xl font-inter leading-tight mb-6">
            AppleCare For Enterprise
            </h1>

            {/* Description */}
            <p className="text-[#3D3D3D] tracking-tight mb-8 font-normal text-base md:text-lg">
Comprehensive device support designed for organizations that depend on Apple. From priority repairs to 24/7 helpdesk access, AppleCare for Enterprise keeps your fleet running — so your teams can focus on what matters.            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm font-normal">
              {/* <button className="bg-[#A6CE39] text-white px-8 py-3 rounded-full transition-colors">
                Explore Now
              </button> */}
              <Link href={"/contact-us"}>
                <button className="bg-primary text-white px-8 py-3 rounded-full transition-colors">
                 Get Started
                </button>
              </Link>
            </div>
                            </div>
                            <img
                                src="/assets/apple-care.svg"
                                alt="Slide 2"
                                className="w-full rounded-xl"
                            />
                        </div>
                    </div>
                    </div>
  );
};

export default AppleCareBanner;
