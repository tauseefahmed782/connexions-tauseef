import SectionHeading from "./SectionHeading";
import styles from "./AppleForSmb.module.css";
const solutions = [
["The Right Apple Devices", "We help you identify the right Apple devices for your people and workflows — from Macs to iPads and iPhones that keep teams connected.", "Explore Apple Devices", "#devices"],
["Deploy and Manage with Ease", "From setup to deployment and management, Connexions simplifies your Apple ecosystem — a streamlined environment that scales as you grow.", "Explore Business Solutions", "/apple-business-manager/"],
["Expert Support at Every Stage", "Technology needs evolve as you grow. Connexions provides expert guidance to plan, deploy and manage your Apple environment.", "Talk to an Expert", "#consultation"]
];
export default function SolutionsSection() {
 return <section className={styles.solutions}><div className={styles.container}><SectionHeading title="Solutions for Every Stage of Growth." description="The right devices expertly deployed, managed and supported." /><div className={styles.solutionGrid}>{solutions.map(([title,text,label,href],i)=><article className={styles.solutionCard} key={title}><span className={styles.badge}>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p><a className={styles.greenLink} href={href}>{label} →</a></article>)}</div></div></section>;
}
