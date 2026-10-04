import styles from "./AppleForSmb.module.css";
export default function HeroSection() {
  return <section className={styles.hero}><img className={styles.heroImage} src="/assets/apple-for-smb/hero.png" alt="Apple MacBook and desktop displays" fetchPriority="high" /><div className={styles.heroContent}><h1>Power Your<br />Growing Business<br />with Apple.</h1><p>Get the right Apple devices for your team, along with expert guidance for deployment, management, security and ongoing support from Connexions.</p><a className={styles.darkButton} href="#consultation">Get Started</a></div></section>;
}
