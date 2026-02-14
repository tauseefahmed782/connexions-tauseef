"use client";

import { Layers, ChevronDown, User, Mail, MessageSquare } from "lucide-react";
import MagicIcon from "@/public/assets/section-header-magic-icon.svg";
import CommonImage from "../common/CommonImage";
import { InlineWidget } from "react-calendly";  // npm install react-calendly

export default function CalendyForm() {
  return (
    <div className="w-full">
      <InlineWidget
                         url="https://calendly.com/jitendra-connexionsmobile/connexions-digital"

          styles={{
            height: "600px",
            width: "100%",
          }}
          className="w-full  rounded-lg custom-iframe"
        />
              
            </div>
  );
}
