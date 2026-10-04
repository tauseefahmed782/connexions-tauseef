import HeroSection from "@/components/apple-for-smb/HeroSection";
import BenefitsSection from "@/components/apple-for-smb/BenefitsSection";
import SolutionsSection from "@/components/apple-for-smb/SolutionsSection";
import TrustSection from "@/components/apple-for-smb/TrustSection";
import DevicesSection from "@/components/apple-for-smb/DevicesSection";
import TestimonialsSection from "@/components/apple-for-smb/TestimonialsSection";
import ClientsSection from "@/components/apple-for-smb/ClientsSection";
import SupportSection from "@/components/apple-for-smb/SupportSection";
import ConsultationSection from "@/components/apple-for-smb/ConsultationSection";
import styles from "@/components/apple-for-smb/AppleForSmb.module.css";

export const metadata = { title: "Apple for SMB | Connexions", description: "Power your growing business with Apple. Explore devices, deployment, management and expert support from Connexions." };
export default function AppleForSmbPage() {
  return <div className={styles.page}><HeroSection /><BenefitsSection /><SolutionsSection /><TrustSection /><DevicesSection /><TestimonialsSection /><ClientsSection /><SupportSection /><ConsultationSection /></div>;
}
