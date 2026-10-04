import CommonImage from "@/components/common/CommonImage";
import Rating from "@/components/common/Rating";
import SectionHeading from "./SectionHeading";
import styles from "./AppleForSmb.module.css";
const columns = [
[["Marcus B.","@mb_saas_ae","Apple's deal room cut our internal back-and-forth by half. It’s Slack, but for closing.","source-8.png"],["Julia Cardenas","@revjules","Our follow-up speed improved overnight. The reminders and AI summaries are scary accurate.","source-11.png"],["Noah Kim","@nkclosefast","Love how Apple just knows when to nudge me. Zero noise, all signal.","source-8.png"]],
[["Danielle Short","@sales_dan","Apple's UI is criminally smooth. Feels like Notion and Gmail had a pipeline baby.","source-14.png"],["Priya Solanki","@priyasells","Used to lose deals in the handoff. Now every stage is crystal clear — thanks Apple.","source-20.png"],["Marie Gray","@mariejgray","I told my cofounder: If we ever sell, it’ll be because of Apple.","source-11.png"]],
[["Dalia Noor","@dalia_pipeline","From signup to first closed deal in 4 days. Can’t believe I almost chose HubSpot.","source-20.png"],["Kyle Baines","@kyleinrevops","AI-generated call summaries are freakishly good. I barely take notes now.","source-8.png"],["Janet M.","@janet_g2x","Our reps actually like using Apple. That’s a first in 12 years of sales ops.","source-14.png"]]
];
export default function TestimonialsSection() {
 return <section className={styles.testimonials}><SectionHeading title="What our Client Say" /><div className={styles.reviewGrid}>{columns.map((column,index)=><div className={styles.reviewColumn} key={index}>{column.map(([name,handle,quote,avatar])=><article className={styles.reviewCard} key={name}><div className={styles.reviewHeader}><img className={styles.avatar} src={`/assets/apple-for-smb/${avatar}`} alt="" loading="lazy" /><div><h3>{name}</h3><p>{handle}</p></div><CommonImage src="/assets/contact-about-review-1-svg.svg" alt="Review platform" width={20} height={20} /></div><p>{quote}</p></article>)}</div>)}</div><Rating /></section>;
}
