"use client";

import { Layers, ChevronDown, User, Mail, MessageSquare } from "lucide-react";
import MagicIcon from "@/public/assets/section-header-magic-icon.svg";
import CommonImage from "../common/CommonImage";
import { InlineWidget } from "react-calendly";  // npm install react-calendly

export default function CalendyFormWithmap() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 md:px-10 lg:px-20 gap-10">
        <div className=" items-start">
          {/* Left Side - Calendly */}
          <div className="w-full  mx-auto lg:mx-0">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-8 lg:mb-12">
              <CommonImage
                src={MagicIcon.src || MagicIcon}
                className="w-5 h-5"
              />
              <span className="text-sm  text-[#444444] font-medium">
                Get In Touch
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl text-center lg:text-6xl font-medium mb-8 lg:mb-0 xl:mb:0 leading-tight">
              We're here to
             
              help you
            </h1>

            {/* Calendly Widget */}
            <div className="w-full" style={{ height: "800px", minHeight: "800px" }}>
              <InlineWidget 
                url="https://calendly.com/jitendra-connexionsmobile/connexions-digital"
                styles={{
                  height: "800px",
                  width: "100%"
                }}
              />
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.6118508124!2d72.71637033388484!3d19.082177517429477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
