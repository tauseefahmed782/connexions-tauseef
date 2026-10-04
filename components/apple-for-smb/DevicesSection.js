import SectionHeading from "./SectionHeading";
import styles from "./AppleForSmb.module.css";
const devices = [
["MacBook Neo","For demanding workflows — powerful performance built for professionals with intensive tasks.","neo.png",343,271,135,28],
["MacBook Air","For everyday business — lightweight, powerful, and ready to work from anywhere.","source-9.png",343,179,199,28.5],
["MacBook Pro","For demanding workflows — powerful performance built for professionals with intensive tasks.","pro.png",354,236,188,23],
["Desktop Solutions","Built for your workspace — flexible desktop solutions that create efficient, high-performance workstations.","desktop.png",243,243,155,61],
["iPad","Work, present, and create anywhere. iPad gives your teams the flexibility to work wherever business takes them.","ipad.png",207,230,173,77],
["iPhone","Keep your business moving. Help teams stay connected, productive, and responsive wherever work happens.","iphone.png",209,251,166,85]
];
export default function DevicesSection() {
 return <section id="devices" className={styles.devices}><SectionHeading title="Find Your Device" description="Productivity starts with the right device. Let's find yours." /><div className={styles.deviceGrid}>{devices.map(([title,text,image,width,height,top,left])=><article className={styles.deviceCard} key={title}><h3>{title}</h3><p>{text}</p><img src={`/assets/apple-for-smb/${image}`} alt={title} loading="lazy" style={{"--image-width":`${width/4}%`,"--image-height":`${height}px`,"--image-top":`${top}px`,"--image-left":`${left/4}%`}} /><a className={styles.greenLink} href="#consultation">Get in touch →</a></article>)}</div></section>;
}
