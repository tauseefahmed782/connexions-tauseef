import React from "react";
import AppleGrid1 from "@/public/assets/apple-grid-1.svg";
import AppleGridKey from "@/public/assets/apple-grid-key.svg";
import AppleGridBook from "@/public/assets/apple-grid-book.svg";
import AppleGrid2 from "@/public/assets/apple-grid-2.svg";
import CommonImage from "../common/CommonImage";
import Link from "next/link";

const AppleSwitchBanner = () => {
  return (
            <div className="py-10 px-4 sm:px-6 lg:px-20 ">

    <div className="flex items-start xl:items-center lg:items-center md:items-center justify-center h-full ">
                        <div className="grid grid-cols-1 md:grid-cols-[40%_60%]  gap-8">
                            
                            <div>
                               <div className="inline-flex  items-center bg-[#FBFBFB] rounded-full border border-[#D4D4D4A3] px-3 py-2">
      
      <span className="bg-black text-white text-sm font-inter font-medium px-4 py-1 rounded-full">
        New
      </span>

      <span className="ml-3 text-black text-sm font-inter font-normal">
  Switch to MAC with Connexions
      </span>

    </div> 
                                <h1 className="text-black font-medium text-3xl md:text-4xl lg:text-7xl font-inter leading-tight mb-6">
            Apple Switcher Program
            </h1>

            {/* Description */}
            <p className="text-[#3D3D3D] tracking-tight mb-8 font-normal text-base md:text-lg">
Simplify your transition from Windows to Apple. With Apple’s Switcher Program, Connexions helps you adopt Mac across your organization seamlessly, securely, and at scale.</p>
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
                                src="/assets/apple-switchbanner.svg"
                                alt="Slide 2"
                                className="w-full rounded-xl"
                            />
                        </div>
                    </div>
                    </div>
  );
};

export default AppleSwitchBanner;
