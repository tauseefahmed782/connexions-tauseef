import SectionHeading from "./SectionHeading";
import styles from "./AppleForSmb.module.css";
const benefits = [
["Built-In Security", "Apple devices are designed with powerful security features to help protect your business and your data.", "security.png"],
["Built for Performance", "From everyday productivity to demanding professional workflows, Apple devices help teams get more done.", "performance.png"],
["Designed for Every Team", "From leadership and sales teams to developers and creative professionals, there's an Apple device for every workflow.", "source-15.png"],
["Easy to Deploy", "Get devices ready for your workforce and help teams get started faster.", "deployment.png"],
["Works with Your Business", "Apple works with many of the tools modern businesses rely on every day.", "source-16.jpeg"]
];
export default function BenefitsSection() {
 return <section className={styles.benefits}><div className={styles.container}><SectionHeading title="Why Apple For SMBs" description="Built for the Way Your Business Works." /><div className={styles.benefitGrid}>{benefits.map(([title,text,image])=><article className={styles.benefitCard} key={title}><img src={`/assets/apple-for-smb/${image}`} alt={title} loading="lazy" /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>;
}
