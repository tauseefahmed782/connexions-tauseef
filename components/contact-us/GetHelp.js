import React from "react";
import ContactUsBg from "@/public/assets/contact-us-bg.webp";

const GetHelp = () => {
  return (
    <div
      className="
        relative w-full
        h-[420px] sm:h-[500px] md:h-[600px] lg:h-[650px]
        bg-cover bg-center
        flex items-center
      "
      style={{
        backgroundImage: `url(${ContactUsBg.src})`,
      }}
    >
      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-20 max-w-3xl text-white flex flex-col gap-4 sm:gap-6">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Get help from the <br /> expert consultants.
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Whether you're exploring enterprise IT solutions, planning a
          large-scale deployment, or need expert consultation, Connexions is
          here to support you. Our team helps organisations simplify technology
          adoption, optimize workflows, and achieve seamless integration.
        </p>

      </div>
    </div>
  );
};

export default GetHelp;
