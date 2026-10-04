import styles from "./AppleForSmb.module.css";
const logos = ["home-clients-section-icon-updated-1.svg","home-clients-section-icon-updated-2.svg","home-clients-section-icon-updated-3.svg","home-clients-section-icon-updated-4.svg","home-clients-section-icon-updated-5.svg","home-clients-section-icon-updated-6.svg"];
export default function ClientsSection() {
 return <section className={styles.clients}><h2>Our Clients</h2><p>Trusted by leading businesses across industries.</p><div>{logos.map(logo=><img key={logo} src={`/assets/${logo}`} alt={logo.replace("home-clients-section-icon-updated-","Client ").replace(".svg","")} loading="lazy" />)}</div></section>;
}
