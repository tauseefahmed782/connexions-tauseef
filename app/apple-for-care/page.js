import AppleCareBanner from "@/components/apple-for-care/AppleCareBanner";
import BuiltForEnterprise from "@/components/apple-for-care/BuiltForEnterprise";
import IncidentCoverage from "@/components/apple-for-care/IncidentCoverage";
import Overview from "@/components/apple-for-care/Overview";
import ProvenResult from "@/components/apple-for-care/ProvenResult";
import WhyAppleCare from "@/components/apple-for-care/WhyAppleCare";

import React from "react";

const page = () => {
  return (
    <div className="font-sfpro">
      <AppleCareBanner />
      <BuiltForEnterprise />
      <Overview/>
      <IncidentCoverage/>
      <WhyAppleCare/>
      <ProvenResult/>
    </div>
  );
};

export default page;
