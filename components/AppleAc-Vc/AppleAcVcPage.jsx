import Image from "next/image";
import {
  ArrowRight,
  Fingerprint,
  Mic,
  Monitor,
  Presentation,
  ShieldCheck,
  Truck,
  Volume2,
  Workflow,
} from "lucide-react";

const AppleAcVcPage = () => {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 md:px-10 lg:px-14 lg:py-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col gap-10 overflow-hidden rounded-[28px] bg-white lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[470px] pt-2">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#D9D9D9] bg-white px-3 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <span className="rounded-full bg-black px-3 py-1 text-sm font-medium leading-none text-white">
                New
              </span>
              <span className="text-sm font-normal text-[#1F1F1F] sm:text-[15px]">
                Collaboration and immersive experience
              </span>
            </div>

            <h1 className="mt-5 max-w-[360px] text-[46px] font-normal leading-[0.98] tracking-[-0.03em] text-black sm:text-[56px] md:text-[68px]">
              Audio-Visual Solutions
            </h1>

            <p className="mt-6 max-w-[470px] text-[20px] leading-[1.5] text-[#555555]">
              Audio-Visual (AV) solutions combine display, audio, control, and
              connectivity technologies to enable clear communication,
              collaboration, and immersive experiences across industries.
            </p>

            <button className="mt-8 rounded-full bg-[#2D2A35] px-8 py-4 text-[17px] font-semibold text-white shadow-[0_10px_30px_rgba(45,42,53,0.16)] transition-colors hover:bg-[#201d27]">
              Get Started
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center">
            <Image
              src="/assets/Ac-vc/hero-section.png"
              alt="Audio-Visual Solutions hero"
              width={650}
              height={480}
              className="h-auto w-full max-w-[670px] object-contain"
              priority
            />
          </div>
        </div>

        <div className="mt-16">
          <div className="mx-auto max-w-[920px] text-center">
            <h2 className="text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-[#222222] sm:text-[42px] md:text-[54px]">
              Audio-Visual Categories
            </h2>
            <p className="mx-auto mt-4 max-w-[930px] text-[18px] leading-[1.55] text-[#5B6676] sm:text-[19px]">
              Enhance learning with clear visuals and sound, enable effective
              meetings and real-time collaboration in enterprise spaces, and
              support industries like banking, healthcare, and entertainment
              with reliable AV solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-[52px]">
            <div className="overflow-hidden rounded-[34px] bg-[#222225]">
              <Image
                src="/assets/Ac-vc/led.jpg"
                alt="Display Solutions"
                width={540}
                height={380}
                className="h-auto w-full object-cover"
              />
              <div className="px-8 pb-8 pt-5 text-center text-white">
                <h3 className="text-[30px] font-bold leading-[1.02] tracking-[-0.03em]">
                  Display
                  <br />
                  Solutions
                </h3>
                <p className="mx-auto mt-4 max-w-[360px] text-[16px] leading-[1.35] text-white/95 sm:text-[17px]">
                  LED displays, video walls, projectors, interactive panels,
                  and digital signage systems.
                </p>
                <button className="mt-4 inline-flex items-center gap-2 text-[17px] font-medium text-[#A6CE39]">
                  Learn more
                  <span aria-hidden="true">›</span>
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] bg-[#222225]">
              <Image
                src="/assets/Ac-vc/As.jpg"
                alt="Audio Solutions"
                width={540}
                height={380}
                className="h-auto w-full object-cover"
              />
              <div className="px-8 pb-8 pt-5 text-center text-white">
                <h3 className="text-[30px] font-bold leading-[1.02] tracking-[-0.03em]">
                  Audio
                  <br />
                  Solutions
                </h3>
                <p className="mx-auto mt-4 max-w-[360px] text-[16px] leading-[1.35] text-white/95 sm:text-[17px]">
                  Professional speakers, PA systems, conference audio, wireless
                  mics, amplifiers &amp; soundbars.
                </p>
                <button className="mt-4 inline-flex items-center gap-2 text-[17px] font-medium text-[#A6CE39]">
                  Learn more
                  <span aria-hidden="true">›</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-[#222222] sm:text-[42px] md:text-[54px]">
              Featured AV Products
            </h2>
            <p className="mx-auto mt-4 max-w-[620px] text-[18px] leading-[1.55] text-[#5B6676] sm:text-[19px]">
              Every feature is designed to keep your Apple devices operational
              and your teams productive.
            </p>
          </div>

          <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {[
              {
                icon: Monitor,
                title: "4K LED\nDisplay Panel",
                description:
                  "Ultra-HD commercial display for presentations & signage.",
              },
              {
                icon: Presentation,
                title: "Full HD\nProjector",
                description:
                  "Bright performance projector ideal for meeting rooms.",
              },
              {
                icon: Volume2,
                title: "Professional\nSpeaker",
                description:
                  "High-clarity speaker system for events & conference rooms.",
              },
              {
                icon: Mic,
                title: "Wireless\nMicrophone",
                description:
                  "Clear audio transmission for meetings, training & stage.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#D8DDE5] bg-white">
                  <Icon className="h-6 w-6 text-[#A6CE39]" strokeWidth={2} />
                </div>
                <h3 className="mt-5 whitespace-pre-line text-[21px] font-bold leading-[1.06] tracking-[-0.03em] text-[#222222]">
                  {title}
                </h3>
                <p className="mx-auto mt-5 max-w-[220px] text-[16px] leading-[1.45] text-[#5B6676] sm:text-[17px]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-[2px] bg-[#222225] px-6 py-14 text-center text-white sm:px-10 md:px-14 md:py-16">
          <div className="mx-auto inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-[14px] font-medium text-[#A6CE39]">
            <span aria-hidden="true">⚡</span>
            <span>Power Your Business with Apple</span>
          </div>

          <h2 className="mt-6 text-[38px] font-bold leading-none tracking-[-0.03em] text-white sm:text-[46px] md:text-[54px]">
            Proven Results
          </h2>

          <p className="mx-auto mt-5 max-w-[520px] text-[18px] leading-[1.45] text-white sm:text-[19px]">
            50% fewer support tickets (Source: IBM)
            <br />
            20–30% lower long-term IT costs vs traditional PCs
            <br />
            Higher talent retention and satisfaction
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center gap-2 rounded-full bg-[#A6CE39] px-6 py-4 text-[15px] font-medium text-white">
              Explore solution now
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-[15px] font-medium text-[#222225]">
              Talk to an Expert
              <Workflow className="h-4 w-4" strokeWidth={2.2} />
            </button>
          </div>

          <div className="mt-8 grid gap-5 text-left text-[14px] text-white/95 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                icon: ShieldCheck,
                text: "Trusted Apple Authorized Reseller",
              },
              {
                icon: Truck,
                text: "End-to-End Device Deployment",
              },
              {
                icon: Fingerprint,
                text: "Zero-Touch Onboarding",
              },
              {
                icon: Workflow,
                text: "Works with Apple Business Manager & MDM",
              },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center justify-center gap-2 text-center lg:justify-start lg:text-left"
              >
                <Icon className="h-4 w-4 shrink-0 text-white" strokeWidth={2} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleAcVcPage;
