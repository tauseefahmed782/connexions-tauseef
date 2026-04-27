import Image from "next/image";
import Link from "next/link";
import IpadproAccessoriesSection from "@/components/ipadpro/IpadproAccessoriesSection";
import IpadproAppleCareSection from "@/components/ipadpro/IpadproAppleCareSection";
import IpasproCompareSection from "@/components/ipadpro/IpasproCompareSection";
import IpadproLegalDisclaimersSection from "@/components/ipadpro/IpadproLegalDisclaimersSection";

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
            <div className="mx-auto max-w-[250px]">
              <Image
                src="/assets/ipadpro/ipad pro.png"
                alt="iPad Pro"
                width={442}
                height={58}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="mx-auto max-w-[560px] py-3">
              <Image
                src="/assets/ipadpro/power.png"
                alt="Power"
                width={760}
                height={180}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-[780px]">
            <Image
              src="/assets/ipadpro/pad.png"
              alt="iPad Pro hero"
              width={1200}
              height={760}
              priority
              className="h-auto w-full object-contain"
            />
          </div>

            <p className="mt-8 text-center text-[20px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#1881E8] md:text-[30px]">
              Now supercharged by M5
            </p>

          <p className="mx-auto mt-10 max-w-[760px] text-center text-[17px] leading-[1.35] text-[#86868B] md:text-[19px]">
            The beautifully designed iPad. Powerful Apple M5 chip.
            <br />
            Built for Apple Intelligence. Two portable sizes. In four stunning colours.
          </p>
 <p className="text-[17px] text-[#86868B] mt-8 text-center">
              Experience the power of iPad M5 with Connexions.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact-us"
                className="inline-flex rounded-full border border-white px-5 py-2 text-[14px] font-medium text-white"
              >
                Buy Now
              </Link>
            </div>
        </div>
      </section>

      <section className="bg-[#1D1D1F] px-4 py-20 sm:px-8 lg:px-20">
        <div className="mx-auto mb-5 max-w-[1200px] rounded-[36px] bg-black px-6 py-10 md:px-10 md:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="text-center lg:text-left">
              <h2 className="max-w-[220px] text-[22px] m-auto font-semibold leading-[1.2] tracking-[-0.05em] text-[#86868B] md:text-[28px]">
                <span className="text-white">M5 chip.</span> Furiously fast.
                The next giant leap for AI on iPad.
              </h2>
            </div>

            <div className="mx-auto w-full max-w-[640px]">
              <Image
                src="/assets/ipadpro/0.1.png"
                alt="M5 chip iPad Pro"
                width={820}
                height={600}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
          <div className="mx-auto max-w-[1200px] space-y-6">
          <article className="overflow-hidden rounded-[28px] bg-black px-6 pt-8 text-white md:px-10 md:pt-10">
            <h3 className="text-center text-[28px] font-semibold leading-[1.2] tracking-[-0.04em] md:text-[28px]">
              <span className="text-white">iPadOS 26.</span>{" "}
              <span className="text-[#86868B]">Powerfully redesigned.</span>
              <br />
              <span className="text-[#86868B]">
                Game-changing capabilities.
              </span>
              <sup className="text-[12px] align-super text-[#86868B]">&#9674;</sup>
            </h3>
            <div className="mx-auto mt-8 max-w-[800px]">
              <Image
                src="/assets/ipadpro/ipad-os.png"
                alt="iPadOS 26"
                width={1200}
                height={900}
                className="h-auto w-full object-contain"
              />
            </div>
          </article>

          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <article className="overflow-hidden rounded-[28px] bg-black text-white">
              <Image
                src="/assets/ipadpro/appleleft.png"
                alt="Apple Intelligence on iPad Pro"
                width={980}
                height={860}
                className="h-auto w-full object-contain"
              />
              <div className="px-8 pb-8 pt-6 text-center md:px-10">
                <h3 className="mx-auto max-w-[560px] text-[28px] font-semibold leading-[1.2] tracking-[-0.04em] md:text-[28px]">
                  <span className="text-[#86868B]">Do more with </span>
                  <span className="text-white">Apple Intelligence.</span>
                  <span className="text-[#86868B]"> from Image Wand to Live Translation.</span>
                  <sup className="text-[12px] align-super text-[#86868B]">&#9674;</sup>
                </h3>
              </div>
            </article>

            <article className="overflow-hidden rounded-[28px] bg-black px-6 pt-8 text-center text-white md:px-10 md:pt-10">
              <h3 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.04em] md:text-[28px]">
                Sleek, lightweight
                <br />
                design for incredible
                <br />
                <span className="text-[#86868B]">portability and</span>
                <br />
                <span className="text-[#86868B]">versatility.</span>
              </h3>
              <div className="mx-auto mt-12 flex max-w-[52px] justify-center md:mt-16 md:max-w-[64px]">
                <Image
                  src="/assets/ipadpro/vertical.png"
                  alt="iPad Pro side profile"
                  width={28}
                  height={295}
                  className="h-auto max-h-[180px] w-full object-contain md:max-h-[320px]"
                />
              </div>
            </article>
          </div>

           <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
           

            <article className="overflow-hidden rounded-[28px] bg-black px-6 pt-8 text-center text-white md:px-10 md:pt-10">
               <div className="mx-auto mb-12 flex max-w-[52px] justify-center md:mt-16 md:max-w-[64px]">
                <Image
                  src="/assets/ipadpro/battery.png"
                  alt="iPad Pro side profile"
                  width={28}
                  height={295}
                  className="h-auto max-h-[180px] w-full object-contain"
                />
              </div>
              <h3 className="text-[28px] text-[#86868B] font-semibold leading-[1.4] tracking-[-0.04em] md:text-[28px]">
            <span className="bg-gradient-to-r from-[#92B90A] to-[#02D959] bg-clip-text text-transparent">All-day battery life.</span> 
<br/>
             Fast-charge up to 50%
battery in around 30 minutes.
              </h3>
             
            </article>
             <article className="overflow-hidden rounded-[28px] bg-black text-white">
             
              <div className="px-8 pb-15 pt-6 text-center md:px-10">
                <h3 className="mx-auto max-w-[560px] text-[#86868B] text-[28px] font-semibold leading-[1.2] tracking-[-0.04em] md:text-[28px]">
                  <span>
                   <span className="text-white"> Ultra Retina XDR.</span> The world’s most advanced
display, in super-portable  <span className="text-white">28.22 cm (11″)</span> and expansive <span className="text-white">33.02 cm (13″)</span> models.
                    </span>
                 
                </h3>
              </div>
               <Image
                src="/assets/ipadpro/altra-XDR.svg"
                alt="Apple Intelligence on iPad Pro"
                width={980}
                height={860}
                className="h-auto px-20 w-full object-contain"
              />
            </article>
          </div>
{/* Keyboard */}
 <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <article className="overflow-hidden rounded-[28px] bg-black text-white">
             
              <div className="px-8 pb-20 pt-6 text-center md:px-10">
                <h3 className="mx-auto text-[#86868B] max-w-[560px] text-[28px] font-semibold leading-[1.2] tracking-[-0.04em] md:text-[28px]">
                 Advanced features and comfortable typing with Magic <span className="text-white"> Keyboard</span>.
                </h3>
              </div>
               <Image
                src="/assets/ipadpro/magic-keyword.png"
                alt="Apple Intelligence on iPad Pro"
                width={980}
                height={860}
                className="h-auto m-auto object-contain w-[534px]"
              />
            </article>

            <article className="overflow-hidden rounded-[28px] bg-black px-6  text-center text-white md:px-10 ">
               <div className="mx-auto  flex  justify-center ">
                <Image
                  src="/assets/ipadpro/pencil.png"
                  alt="iPad Pro side profile"
                  width={28}
                  height={295}
                  className="h-auto  w-full object-contain "
                />
              </div>
              <h3 className="text-[28px] text-[#86868B] -mt-40 mb-15 font-semibold leading-[1.2] tracking-[-0.04em] md:text-[28px]">
               Precise creative
control with
                <br />
           <span className="text-white"> Apple Pencil Pro.</span>  
                
              </h3>
             
            </article>
          </div>
{/* Pro camera */}
 <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
           

            <article className="overflow-hidden rounded-[28px] bg-black  pt-8 text-center text-white  md:pt-10">
               
              <h3 className="text-[28px] px-6 md:px-10 text-[#86868B] font-semibold leading-[1.4] tracking-[-0.04em] md:text-[28px]">
           
          <span className="text-white">Pro camera.</span>  Capture
4K ProRes video,
unlock AR, and scan
objects
and documents.
              </h3>
              <div className="ml-auto mt-12  md:mt-16 ">
                <Image
                  src="/assets/ipadpro/pro-camera.png"
                  alt="iPad Pro side profile"
                  width={28}
                  height={295}
                  className="h-auto  w-full object-contain pl-20"
                />
              </div>
            </article>
             <article className="overflow-hidden rounded-[28px] bg-black text-white">
             
              <div className="px-8 pb-15 pt-6 text-center md:px-10">
                <h3 className="mx-auto max-w-[560px] text-[#86868B] text-[28px] font-semibold leading-[1.2] tracking-[-0.04em] md:text-[28px]">
                  <span>
                   <span className="text-white"> Wi-Fi 7, Bluetooth 6 and Thread.</span> 
                   All enabled by the Apple N1 wireless chip.
                   </span>
                 
                </h3>
              </div>
               <Image
                src="/assets/ipadpro/wifi-7.png"
                alt="Apple Intelligence on iPad Pro"
                width={980}
                height={860}
                className="h-auto px-10 w-full object-contain"
              />
            </article>
          </div>

       

        </div>

      </section>

      <section className="bg-white px-4 py-16 sm:px-8 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[760px]">
            <p className="text-[18px] font-semibold leading-7 tracking-[-0.02em] text-[#1D1D1F]">
              Why iPad
            </p>
            <h2 className="mt-1 text-[40px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#1D1D1F] md:text-[56px]">
              There’s nothing quite like iPad.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div className="max-w-[250px]">
              <div className="mb-5 h-[44px] w-[44px]">
                <Image
                  src="/assets/ipadpro/00.1.png"
                  alt="Easy to use"
                  width={44}
                  height={44}
                  className="h-auto w-full object-contain"
                />
              </div>
              <h3 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.04em] text-[#1D1D1F]">
                Easy to use
              </h3>
              <p className="mt-3 text-[19px] leading-[1.45] text-[#6E6E73]">
                iPad lets you do everything in powerful yet simple ways on the large Multi-Touch
                display.
              </p>
            </div>

            <div className="max-w-[250px]">
              <div className="mb-5 h-[44px] w-[44px]">
                <Image
                  src="/assets/ipadpro/00.2.png"
                  alt="Powerful"
                  width={44}
                  height={44}
                  className="h-auto w-full object-contain"
                />
              </div>
              <h3 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.04em] text-[#1D1D1F]">
                Powerful
              </h3>
              <p className="mt-3 text-[19px] leading-[1.45] text-[#6E6E73]">
                Neural Accelerators drive AI workloads faster, more efficiently and securely, all
                on your device.
              </p>
            </div>

            <div className="max-w-[250px]">
              <div className="mb-5 h-[44px] w-[44px]">
                <Image
                  src="/assets/ipadpro/00.3.png"
                  alt="Portable"
                  width={44}
                  height={44}
                  className="h-auto w-full object-contain"
                />
              </div>
              <h3 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.04em] text-[#1D1D1F]">
                Portable
              </h3>
              <p className="mt-3 text-[19px] leading-[1.45] text-[#6E6E73]">
                Remarkably thin and light with a durable design, fast Wi-Fi 7, and 5G cellular,
                and all-day battery life.
                <sup className="text-[12px] align-super">◊</sup>
              </p>
            </div>

            <div className="max-w-[250px]">
              <div className="mb-5 h-[44px] w-[44px]">
                <Image
                  src="/assets/ipadpro/00.4.png"
                  alt="Versatile"
                  width={44}
                  height={44}
                  className="h-auto w-full object-contain"
                />
              </div>
              <h3 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.04em] text-[#1D1D1F]">
                Versatile
              </h3>
              <p className="mt-3 text-[19px] leading-[1.45] text-[#6E6E73]">
                It’s your notepad, film studio, scanner, mobile office and canvas when you need
                one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <IpasproCompareSection />

      <IpadproAccessoriesSection />
      <IpadproAppleCareSection />
      <IpadproLegalDisclaimersSection />

    </div>
  );
}
