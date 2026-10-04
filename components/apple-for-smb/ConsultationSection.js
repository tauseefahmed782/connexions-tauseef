"use client";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import styles from "./AppleForSmb.module.css";
const interests = ["Apple Devices","Device Deployment","Device Management","Business Technology Consultation","Other"];
export default function ConsultationSection() {
 const [message,setMessage] = useState("");
 function submit(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const body = `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nWork email: ${data.get("email")}\nPhone: ${data.get("phone")}\nInterested in: ${data.getAll("interests").join(", ") || "Consultation"}\nDevices required: ${data.get("devices") || "Not specified"}`;
  window.location.href = `mailto:nikhil@connexionsmobile.com?subject=${encodeURIComponent("Apple Business Consultation — "+data.get("company"))}&body=${encodeURIComponent(body)}`;
  setMessage("Your email app will open with your consultation request. Send the email to contact our business solutions team.");
 }
 return <section id="consultation" className={styles.consultation}><SectionHeading eyebrow="READY TO GET STARTED?" title="Talk to an Apple Business Expert" description="Tell us about your business requirements, and our team will help you explore the right solution." /><form className={styles.form} onSubmit={submit}><div className={styles.formGrid}>{[["name","Full Name","Your full name","text","name"],["company","Company Name","Your company","text","organization"],["email","Work Email","name@company.com","email","email"],["phone","Phone Number","+91 00000 00000","tel","tel"]].map(([name,label,placeholder,type,autoComplete])=><div className={styles.field} key={name}><label htmlFor={`smb-${name}`}>{label} <span aria-hidden="true">*</span></label><input id={`smb-${name}`} name={name} placeholder={placeholder} type={type} autoComplete={autoComplete} required /></div>)}</div><fieldset><legend>What are you looking for?</legend><div className={styles.chips}>{interests.map(interest=><label className={styles.chip} key={interest}><input type="checkbox" name="interests" value={interest} /><span>{interest}</span></label>)}</div></fieldset><div className={styles.field}><label htmlFor="smb-devices">Number of Devices Required</label><select id="smb-devices" name="devices" defaultValue=""><option value="">Select number of devices (1–10 · 11–25 · 26–50 · 51–100 · 100+)</option>{["1–10","11–25","26–50","51–100","100+"].map(value=><option key={value}>{value}</option>)}</select></div><button type="submit">Request a Consultation</button><p className={styles.formNote}>Our business solutions team will get in touch with you shortly.</p><p className={styles.status} role="status">{message}</p></form></section>;
}
