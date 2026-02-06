import Accessories from "@/components/product-common/Accessories";
import AllInFamily from "@/components/product-common/AllInFamily";
import AppleIntelligenceFeatures from "@/components/product-common/AppleIntelligenceFeatures";
import AppleLinks from "@/components/product-common/AppleLinks";
import Banner from "@/components/iphone-17/Banner";
import BestPlaceToBuy from "@/components/product-common/BestPlaceToBuy";
import CameraSection from "@/components/iphone-17/CameraSection";
import CameraSliderSection from "@/components/iphone-17/CameraSliderSection";
import Environment from "@/components/product-common/Environment";
import GetHighlightsSection from "@/components/iphone-17/GetHighlightsSection";
import HelpfulFeatures from "@/components/product-common/HelpfulFeatures";
import IosFeatureSlider from "@/components/product-common/IosFeatureSlider";
import KeepExploring from "@/components/iphone-17/KeepExploring";
import OurValues from "@/components/product-common/OurValues";
import React from "react";

const page = () => {
  return (
    <div className="font-sfpro">
      <Banner />
      <GetHighlightsSection />
      <CameraSection />
      <CameraSliderSection />
      <AllInFamily />
      <IosFeatureSlider />
      <AppleIntelligenceFeatures />
      <HelpfulFeatures />
      <Accessories />
      <BestPlaceToBuy />
      <KeepExploring />
      <Environment />
      <OurValues />
      <AppleLinks />
    </div>
  );
};

export default page;
