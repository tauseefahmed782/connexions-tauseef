import SectionHeading from "./SectionHeading";
import styles from "./AppleForSmb.module.css";
export default function SupportSection() {
 return <section className={styles.support}><SectionHeading title="Simplify Apple for Your Business." description="Give your team the right technology — and give your business a simpler way to deploy, manage and support it." /><div className={styles.supportGrid}><article><img src="/assets/apple-for-smb/setup.svg" alt="" /><h3>Expert Setup</h3><p>Zero-touch setup, delivered ready to work</p></article><article><img src="/assets/apple-for-smb/support.svg" alt="" /><h3>Ongoing Support</h3><p>Certified specialists whenever you need them</p></article></div></section>;
}
