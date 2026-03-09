"use client";

import React from "react";
import FAQIcon from "@/public/assets/faq-icon.svg";
import FeatureIcon1 from "@/public/assets/BuilForEnterprise4.svg";
import FeatureIcon2 from "@/public/assets/BuilForEnterprise3.svg";
import FeatureIcon3 from "@/public/assets/BuilForEnterprise2.svg";
import FeatureIcon4 from "@/public/assets/BuilForEnterprise1.svg";

import CommonImage from "../common/CommonImage";

// ServiceCard Component — NOTE: uses h-full and flex so it will fill slide height
const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="p-6 rounded-3xl min-h-[200px] flex flex-col items-center justify-between ">
            <div className="text-center">
                <div className="mb-6">
                    <div className="w-12 h-12 mx-auto">
                        <CommonImage
                            height={40}
                            width={40}
                            src={icon.src || icon}
                            alt={title}
                        />
                    </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4 tracking-tight leading-tight" dangerouslySetInnerHTML={{ __html: title }}>
                </h3>

                <p className="text-[#4B5563] text-base font-normal leading-relaxed tracking-[-0.37px] mb-0">
                    {description}
                </p>
            </div>
        </div>
    );
};

// Main BuiltForEnterprise Component
const BuiltForEnterprise = () => {
    const services = [
        {
            icon: FeatureIcon1,
            title: "Priority Repair or<br />Replacement",
            description:
                "Fast-tracked hardware service with next-business-day replacement options to minimize downtime across your fleet."
        },
        {
            icon: FeatureIcon2,
            title: "Flexible Repair<br />Options",
            description:
                "Choose from onsite, carry-in, or mail-in repair workflows tailored to your organization's operational needs.",
        },
        {
            icon: FeatureIcon3,
            title: "24/7 Helpdesk<br />Support",
            description:
                "Round-the-clock technical assistance for your enterprise. Get support whenever you need it, no matter the time or place."
        },
        {
            icon: FeatureIcon4,
            title: "Service Pool<br />Inventory",
            description:
                "Maintain a pool of devices for quick swap-outs during repairs, ensuring your teams stay productive without interruption."
        },
    ];

    return (
        <div className="bg-[#FAFAFA] py-16 px-4 sm:px-6 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-12 relative">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary leading-tight">
                            Built For Enterprise Scale
                        </h2>
                        <p className="text-[#4B5563] tracking-tight mb-8 font-normal text-base md:text-lg max-w-2xl mx-auto">
                            Every feature is designed to keep your Apple devices operational and your teams productive.
                        </p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BuiltForEnterprise;
