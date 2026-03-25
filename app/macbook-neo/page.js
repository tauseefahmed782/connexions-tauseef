
import BentoSection from "@/components/macbook-neo/BentoSection";
import MacbookNeoAppleCareSection from "@/components/macbook-neo/MacbookNeoAppleCareSection";
import MacbookNeoAccessoriesSection from "@/components/macbook-neo/MacbookNeoAccessoriesSection";
import MacbookNeoCompareSection from "@/components/macbook-neo/MacbookNeoCompareSection";
import MacbookNeoLegalDisclaimersSection from "@/components/macbook-neo/MacbookNeoLegalDisclaimersSection";
import MacbookNeoNewToMacSection from "@/components/macbook-neo/MacbookNeoNewToMacSection";
import React from "react";

const page = () => {
  return (
    <div className="font-sfpro">
      <BentoSection />
      <MacbookNeoNewToMacSection />
      <MacbookNeoCompareSection />
      <MacbookNeoAccessoriesSection />
      <MacbookNeoAppleCareSection />
      <MacbookNeoLegalDisclaimersSection />
    </div>
  );
};

export default page;
