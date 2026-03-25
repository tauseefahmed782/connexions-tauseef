import Image from "next/image";
import Link from "next/link";
import MacbookNeoAccessoriesSection from "./MacbookNeoAccessoriesSection";
import MacbookNeoAppleCareSection from "./MacbookNeoAppleCareSection";
import MacbookNeoCompareSection from "./MacbookNeoCompareSection";
import MacbookNeoLegalDisclaimersSection from "./MacbookNeoLegalDisclaimersSection";
import MacbookNeoNewToMacSection from "./MacbookNeoNewToMacSection";

const leapCards = [
  {
    title: "M5",
    description: "10-core CPU\n10-core GPU",
    availability: 'Available in 14" MacBook Pro',
    image: "/assets/macbookpro-m5/m5-chip.png",
  },
  {
    title: "M4 Pro",
    description: "Up to 14-core CPU\nUp to 20-core GPU",
    availability: 'Available in 14" MacBook Pro and 16" MacBook Pro',
    image: "/assets/macbookpro-m5/m4-pro-chip.png",
  },
  {
    title: "M4 Max",
    description: "Up to 16-core CPU\nUp to 40-core GPU",
    availability: 'Available in 14" MacBook Pro and 16" MacBook Pro',
    image: "/assets/macbookpro-m5/m4-max-chip.png",
  },
];

const featureRows = [
  {
    columns: "lg:grid-cols-[1.95fr_1fr]",
    cards: [
      {
        title: "Mac. Perfect for AI.",
        image: "/assets/macbookpro-m5/ai-screen.png",
        className: "bg-black text-white",
      },
      {
        title: "Apple Intelligence.",
        body: "Personal, private, powerful.",
        image: "/assets/macbookpro-m5/apple-intelligence-icon.png",
        className: "bg-black text-white",
        compact: true,
      },
    ],
  },
  {
    columns: "lg:grid-cols-[0.8fr_1.5fr]",
    cards: [
      {
        title: "Up to 24 hours of battery life.",
        image: "/assets/macbookpro-m5/battery-icon.png",
        className: "bg-black text-white",
        compact: true,
      },
      {
        title: "Stunning Liquid Retina XDR display.",
        image: "/assets/macbookpro-m5/xdr-display.png",
        className: "bg-black text-white",
      },
    ],
  },
];

const lookAndSoundItems = [
  {
    icon: "/assets/macbookpro-m5/camera-icon.png",
    text: "12MP Center Stage camera with Desk View",
  },
  {
    icon: "/assets/macbookpro-m5/waveform-icon.png",
    text: "Studio-quality three-mic array",
  },
  {
    icon: "/assets/macbookpro-m5/spatial-audio-icon.png",
    text: "Six-speaker sound system with Spatial Audio",
  },
];

const securityItems = [
  {
    icon: "/assets/macbookpro-m5/security-touchid.png",
    title: "Touch ID.",
    body: "Unlock your Mac and sign in to apps.",
  },
  {
    icon: "/assets/macbookpro-m5/security-findmy.png",
    title: "Find My.",
    body: "Locate your misplaced Mac and remotely lock or erase it if needed.",
  },
  {
    icon: "/assets/macbookpro-m5/security-filevault.png",
    title: "FileVault.",
    body: "Encrypt your files and data for extra security.",
  },
];

function SectionCard({ title, body, image, className = "", compact = false }) {
  return (
    <article
      className={`overflow-hidden rounded-[28px] px-6 py-8 text-center text-[#1D1D1F] md:px-20 ${className}`}
    >
      {compact ? (
        <div className="flex min-h-[340px] flex-col items-center justify-center">
          <div className="mx-auto max-w-[92px]">
            <Image
              src={image}
              alt={title}
              width={180}
              height={120}
              className="h-auto w-full object-contain"
            />
          </div>
          <h3 className="mx-auto mt-8 max-w-[700px] text-[30px] font-semibold leading-[1.05] tracking-[-0.04em] md:text-[40px]">
          Apple
Intelligence.
          </h3>
        </div>
      ) : (
        <h3 className="mx-auto max-w-[520px] text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] md:text-[42px]">
          {title}
        </h3>
      )}
      {body ? (
        <p
          className={`mx-auto mt-4 max-w-[560px] text-[17px] leading-7 ${
            className.includes("text-white") ? "text-white" : "text-[#4F4F53]"
          }`}
        >
          {body}
        </p>
      ) : null}
      {!compact ? (
        <div className="mt-8">
          <Image
            src={image}
            alt={title}
            width={519}
            height={281}
            className="h-auto w-full object-contain"
          />
        </div>
      ) : null}
    </article>
  );
}

export default function MacbookProM5Page() {
  return (
    <div className="bg-white font-sfpro text-[#1D1D1F]">
      <section className="bg-black px-4 pb-20 pt-14 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[860px] text-center text-white">
            <div className="mx-auto max-w-[340px]">
              <Image
                src="/assets/macbookpro-m5/top-logo.png"
                alt="MacBook Pro"
                width={442}
                height={58}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
            <h1 className="mx-auto py-3 max-w-[760px] bg-[linear-gradient(180deg,#F5F5F7_0%,#CDD9E1_52%,#6C8598_100%)] bg-clip-text text-[44px] font-semibold leading-[0.95] tracking-[-0.06em] text-transparent md:text-[68px]">
              Fast runs in the family.
            </h1>
            <p className="mt-4 text-[20px] font-medium leading-[1.2] tracking-[-0.03em] text-[#F5F5F7] md:text-[30px]">
              Now with M5, M5 Pro and M5 Max.
            </p>
           
          </div>

          <div className="mx-auto mt-10 max-w-[780px]">
            <Image
              src="/assets/macbookpro-m5/hero-main.png"
              alt="MacBook Pro M5 hero"
              width={1200}
              height={760}
              priority
              className="h-auto w-full object-contain"
            />
          </div>

          <p className="mx-auto mt-10 max-w-[820px] text-center text-[17px] leading-7 text-[#86868B] md:text-[19px]">
            MacBook Pro with M5 is built for ambitious work. From AI-assisted
            workflows and heavy graphics to battery life that keeps going, it
            brings pro speed, pro display technology and pro connectivity into a
            design that feels precise everywhere.
          </p>
 <p className="text-[17px] text-[#F5F5F7] mt-8 text-center">
              Experience MacBook Pro M5 Next-Gen Performance with <b className="text-[#A6CE39]">Connexions</b>
            </p>
        </div>
      </section>

      <section className="bg-[#1D1D1F] px-4 py-20 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1200px] rounded-[36px] bg-black px-6 mb-5 py-10 md:px-10">
          <div className="text-center">
            <h2 className="mt-2 text-[36px] font-semibold leading-none tracking-[-0.05em] text-white md:text-[56px]">
              Three chips. Second to none.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {leapCards.map((card) => (
              <article
                key={card.title}
                className="px-4 py-4 text-center text-white"
              >
                <div className="mx-auto max-w-[120px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={440}
                    height={300}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <p className="mt-6 whitespace-pre-line text-[18px] font-medium leading-[1.25] text-white md:text-[19px]">
                  {card.description}
                </p>
                <p className="mx-auto mt-8 max-w-[230px] text-[17px] leading-[1.35] text-[#F5F5F7]">
                  {card.availability}
                </p>
              </article>
            ))}
          </div>
        </div>
          <div className="mx-auto max-w-[1200px] space-y-6">
          {featureRows.map((row, index) => (
            <div key={index} className={`grid gap-6 ${row.columns}`}>
              {row.cards.map((card) => (
                <SectionCard key={card.title} {...card} />
              ))}
            </div>
          ))}

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <article className="relative overflow-hidden rounded-[28px]">
              <Image
                src="/assets/macbookpro-m5/macos-liquid-glass.png"
                alt="macOS Liquid Glass"
                width={980}
                height={860}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 top-0 px-8 pt-8 text-center text-white md:px-12 md:pt-10">
                <h3 className="text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] md:text-[42px]">
                  macOS. Reimagined
                  <br />
                  with Liquid Glass.
                </h3>
              </div>
            </article>

            <article className="overflow-hidden rounded-[28px] bg-black px-6 py-8 text-center text-white md:px-10">
              <h3 className="text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] md:text-[42px]">
                Apps for any ambition.
              </h3>
              <div className="mx-auto mt-8 max-w-[520px]">
                <Image
                  src="/assets/macbookpro-m5/apps-grid.png"
                  alt="Apps for any ambition"
                  width={980}
                  height={860}
                  className="h-auto w-full object-contain"
                />
              </div>
            </article>
          </div>

          <div className="grid gap-6 ">
            <article className="overflow-hidden rounded-[28px] bg-black text-white">
              <h3 className="text-center text-[32px] pt-10 font-semibold leading-[1.05] tracking-[-0.04em] md:text-[42px]">
                Look and sound your best.
              </h3>
              <div className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center ">
                <div className="space-y-6 pl-6 md:pl-10">
                  {lookAndSoundItems.map((item) => (
                    <div key={item.text} className="flex items-center gap-4">
                      <Image
                        src={item.icon}
                        alt=""
                        width={48}
                        height={48}
                        className="mt-1 h-auto w-[10%] object-contain shrink-0"
                      />
                      <p className="text-[18px] leading-[1.2] text-white md:text-[19px]">{item.text}</p>
                    </div>
                  ))}
                </div>
                <Image
                  src="/assets/macbookpro-m5/look-sound.png"
                  alt="MacBook Pro video call"
                  width={1000}
                  height={620}
                  className="h-auto w-full object-contain"
                />
              </div>
            </article>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
             <article className="overflow-hidden rounded-[28px] bg-black px-6 py-8 text-center text-white md:px-10">
              <h3 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.04em] md:text-[42px]">
                Mac + iPhone.
                <br />
                Even better together.
              </h3>
              <div className="mx-auto mt-8 max-w-[440px]">
                <Image
                  src="/assets/macbookpro-m5/iphone-continuity.png"
                  alt="MacBook Pro and iPhone continuity"
                  width={700}
                  height={420}
                  className="h-auto w-full object-contain"
                />
              </div>
              <p className="mx-auto mt-8 max-w-[440px] text-center text-[17px] leading-[1.2] text-[#F5F5F7] md:text-[19px]">
                Unlock a world of powerful Continuity features when you use them together.
              </p>
            </article>
            <article className="overflow-hidden rounded-[28px] bg-black px-6 py-8 text-center text-white md:px-10">
              <h3 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.04em] md:text-[42px]">
                Two sizes. Two colours.
              </h3>
              <div className="mx-auto mt-8 max-w-[520px]">
                <Image
                  src="/assets/macbookpro-m5/Two-sizes.svg"
                  alt="MacBook Pro sizes"
                  width={700}
                  height={430}
                  className="h-auto w-full object-contain mb-5"
                />
              </div>
              <p className="mx-auto  max-w-[420px] text-center text-[17px] leading-[1.2] text-[#86868B] md:text-[19px]">
                Both sizes are available in Space Black and Silver.
              </p>
            </article>
          </div>

          <article className="overflow-hidden rounded-[28px] bg-black">
            <Image
              src="/assets/macbookpro-m5/pro-workstation.png"
              alt="MacBook Pro in pro setup"
              width={1200}
              height={760}
              className="h-full w-full object-cover"
            />
          </article>

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <article className="overflow-hidden rounded-[28px] bg-black px-6 py-8 text-white md:px-10">
              <h3 className="text-center text-[32px] font-semibold leading-[1.1] tracking-[-0.04em] md:text-[42px]">
                Pro ports.
                <br />
                Fast connections.
              </h3>
              <div className="mx-auto mt-8 max-w-[700px]">
                <Image
                  src="/assets/macbookpro-m5/pro-ports.png"
                  alt="MacBook Pro ports"
                  width={700}
                  height={260}
                  className="h-auto w-full object-contain"
                />
              </div>
              <p className="mx-auto mt-8 max-w-[520px] text-center text-[17px] font-medium leading-[1.25] text-white md:text-[19px]">
                Thunderbolt<sup className="text-[11px] align-super">◊</sup>, SDXC, HDMI, MagSafe,
                headphone jack, support for Wi-Fi 6E<sup className="text-[11px] align-super">◊</sup> and
                Bluetooth 5.3
              </p>
            </article>

            <article className="overflow-hidden rounded-[28px] bg-black px-6 py-8 text-white md:px-10">
              <h3 className="text-center text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] md:text-[42px]">
                Unrivalled security.
              </h3>
              <div className="mt-10 space-y-10 md:px-6">
                {securityItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-5">
                    <Image
                      src={item.icon}
                      alt=""
                      width={42}
                      height={42}
                      className="mt-1 h-[42px] w-[42px] shrink-0"
                    />
                    <p className="max-w-[320px] text-[18px] leading-[1.2] text-[#86868B] md:text-[19px]">
                      <span className="font-medium text-white">{item.title} </span>
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
         <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[980px] text-center text-white mt-5">
            <h2 className="text-[32px] font-semibold leading-[1.07] tracking-[-0.06em] md:text-[32px]">
              There&apos;s never been a better time to upgrade.
            </h2>
            <p className="mt-2 text-[17px] leading-[1.35] text-[#86868B] md:text-[19px]">
              Here&apos;s how MacBook Pro with M5 compares to the 13&quot; MacBook Pro with M1 or M2.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <iv>
                  <article className="relative overflow-hidden rounded-[28px] bg-black min-h-[390px]">
              <Image
                src="/assets/macbookpro-m5/upgrader-astronaut.png"
                alt=""
                width={900}
                height={760}
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />
              <div className="relative z-10 flex h-full flex-col justify-between p-8">
                <div className="max-w-[92px]">
                  <Image
                    src="/assets/macbookpro-m5/upgrader-sparkles.png"
                    alt=""
                    width={120}
                    height={120}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <h3 className="max-w-[360px] text-[34px] font-semibold leading-[1.02] tracking-[-0.05em] text-white md:text-[40px]">
                  Fly through
                  <br />
                  demanding AI tasks
                  <br />
                  up to 86x faster.<sup className="text-[12px] align-super">&#9674;</sup>
                </h3>
              </div>
            </article>
              </iv>
                <div className="mt-6">
            <article className="rounded-[28px] bg-black px-8 py-8 text-white  ">
              <div className="flex items-center gap-6">
                <Image
                  src="/assets/macbookpro-m5/upgrader-display.png"
                  alt=""
                  width={88}
                  height={88}
                  className="h-auto w-[72px]"
                />
                <h3 className="max-w-[320px] text-[28px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[34px]">
                  A stunning Liquid
                  <br />
                  Retina XDR display.
                </h3>
              </div>
            </article>
          </div>
            </div>
          


            <div className="grid gap-6">
              <article className="relative overflow-hidden rounded-[28px] border border-transparent bg-black px-5 py-8 text-white [background:linear-gradient(#000,#000)_padding-box,linear-gradient(90deg,#3b82f6,#a855f7,#f97316)_border-box]">
                <div className="flex items-center gap-6">
                  <Image
                    src="/assets/macbookpro-m5/upgrader-apple-intelligence.png"
                    alt=""
                    width={92}
                    height={92}
                    className="h-auto w-[76px]"
                  />
                  <h3 className=" text-[28px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[34px]">
                    Built for
                    <br />
                    Apple Intelligence.<sup className="text-[12px] align-super">&#9674;</sup>
                  </h3>
                </div>
              </article>

              <article className="rounded-[28px] bg-black px-8 pb-8 pt-20 text-white min-h-[232px]">
                <div className="max-w-[92px]">
                  <Image
                    src="/assets/macbookpro-m5/upgrader-battery.png"
                    alt=""
                    width={120}
                    height={60}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <h3 className="mt-8 max-w-[360px] text-[34px] font-semibold leading-[1.02] tracking-[-0.05em] md:text-[40px]">
                  Up to <span className="text-[#57D163]">14 more</span>
                  <br />
                  <span className="text-[#57D163]">hours</span> battery life.
                  <br />
                  <span className="text-[#6E6E73]">(Up to 24 hours total.)</span>
                  <sup className="text-[12px] align-super text-[#6E6E73]">&#9674;</sup>
                </h3>
              </article>
            </div>
          </div>

        
        </div>
      </section>

      <MacbookNeoNewToMacSection />
      <MacbookNeoCompareSection />
      <MacbookNeoAccessoriesSection />
      <MacbookNeoAppleCareSection />
      <MacbookNeoLegalDisclaimersSection />

    </div>
  );
}
