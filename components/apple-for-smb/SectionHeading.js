import styles from "./AppleForSmb.module.css";
export default function SectionHeading({title, description, eyebrow}) {
  return <div className={styles.heading}>{eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}<h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
