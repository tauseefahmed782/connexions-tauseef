import styles from "./AppleForSmb.module.css";
export default function TrustSection() {
 return <section className={styles.trust} aria-label="Connexions in numbers">{[["20+","Years of Experience"],["100+","Enterprise Clients"],["45K+","Devices Managed"]].map(([number,label])=><div key={label}><strong>{number}</strong><p>{label}</p></div>)}</section>;
}
