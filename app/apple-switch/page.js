import AppleSwitchBanner from "@/components/apple-switch/AppleSwitchBanner";
import BuiltForEnterprise from "@/components/apple-for-care/BuiltForEnterprise";
import IncidentCoverage from "@/components/apple-for-care/IncidentCoverage";
import Overview from "@/components/apple-for-care/Overview";
import ProvenResult from "@/components/apple-for-care/ProvenResult";
import WhyAppleCare from "@/components/apple-for-care/WhyAppleCare";

import React from "react";
import WhySwicth from "@/components/apple-switch/WhySwicth";
import AppleSwitchGrid from "@/components/apple-switch/AppleSwitchGrid";

const page = () => {
  return (
    <div className="font-sfpro">
      <AppleSwitchBanner />
      <WhySwicth/>
      <AppleSwitchGrid
      />
     
      <ProvenResult/>
    </div>
  );
};

export default page;
