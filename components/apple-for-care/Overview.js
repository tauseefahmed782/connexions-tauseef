import { MoveRight } from "lucide-react";
import React from "react";
import timelineImg1 from "@/public/assets/AppleCareOverview.svg";
import timelineImg2 from "@/public/assets/AppleCareOverview2.svg";
import timelineImg3 from "@/public/assets/AppleCareOverview3.svg";
import timelineImg4 from "@/public/assets/AppleCareOverview4.svg";
import buttonArrow from "@/public/assets/buttonarrow.svg";
import CommonImage from "../common/CommonImage";
import Link from "next/link";
const steps = [
    {
        id: "01",
        title: "Hardware Coverage",
        desc: "Accidental damage protection and priority hardware service for every enrolled device.",
        img: timelineImg1,
    },
    {
        id: "02",
        title: "Software Support",
        desc: "Our experts recommend the right Apple products, deployment tools, and workflows customized for your organization’s size, goals, and workforce setupExpert assistance for macOS, iOS, and enterprise app deployment challenges.",
        img: timelineImg2,
    },
    {
        id: "03",
        title: "Fleet Management",
        desc: "Dedicated resources to help manage your Apple ecosystem at scale.",
        img: timelineImg3,
    },
    {
        id: "04",
        title: "Rapid Resolution",
        desc: "Escalation paths that get your critical issues resolved faster",
        img: timelineImg4,
    },
];

const Overview = () => {
    return (
        <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20">
            {/* Top Section */}
            <div className="flex flex-col gap-5 items-center mb-20">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#A6CE39] rounded-full"></span>
                    <span className="text-lg text-[#A6CE39]">Overview</span>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug">
                    What is Apple Care For <br /> Enterprise
                </h2>
                <Link href={"/contact-us"}>
                    <button className="text-lg font-semibold w-full sm:w-auto cursor-pointer  rounded-full text-white bg-[#A6CE39] px-5 py-3 flex items-center gap-2">
                        Get in touch
                        <CommonImage src={buttonArrow} alt="arrow" width={33} height={33} />
                    </button>
                </Link>
            </div>

            {/* Timeline Section */}
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2 hidden md:block"></div>

                <div className="flex flex-col gap-20 relative">
                    {steps.map((step, idx) => (
                        <div
                            key={step.id}
                            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 relative"
                        >
                            {/* Image */}
                            <div
                                className={`flex px-5 ${idx % 2 === 0 ? "order-1 md:order-1" : "order-1 md:order-2"
                                    }`}
                            >
                                <CommonImage
                                    src={step.img.src || step.img}
                                    alt={step.title}
                                    width={420}
                                    height={280}
                                    className="rounded-lg w-full max-w-md"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                            {/* Text */}
                            <div
                                className={`flex px-5 flex-col gap-4 max-w-md ${idx % 2 === 0
                                        ? "order-2 md:order-2 text-left"
                                        : "order-2 md:order-1 md:text-left"
                                    }`}
                            >
                                {/* Step circle (only on larger screens to align with line) */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-6 bg-[#A6CE39] text-white w-12 h-12 items-center justify-center rounded-full font-semibold shadow-md">
                                    {step.id}
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Overview;
