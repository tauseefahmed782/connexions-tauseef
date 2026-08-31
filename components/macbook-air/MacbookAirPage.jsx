import Image from "next/image";
import HeroProduct from "@/public/assets/macbook-air/hero-product-clean.png";
import FeatureGridTop from "@/public/assets/macbook-air/feature-grid-top.png";
import FeatureGridBottom from "@/public/assets/macbook-air/feature-grid-a.png";
import SecondLeft from "@/public/assets/macbook-air/secound_left.png";
import SecondLeftOne from "@/public/assets/macbook-air/secound_left1.png";
import SecondLeftTwo from "@/public/assets/macbook-air/secound_left2.png";
import SecondLeftThree from "@/public/assets/macbook-air/secound_left3.png";
import SecondLeftFour from "@/public/assets/macbook-air/secound_left4.png";
import SecondRight from "@/public/assets/macbook-air/secound-right.png";
import AppleM5Left from "@/public/assets/macbook-air/Apple M5 (1).png";
import AppleM5Right from "@/public/assets/macbook-air/Apple M5 (2).png";
import BatteryImage from "@/public/assets/macbook-air/battery.png";
import PosterImage from "@/public/assets/macbook-air/poster.png";
import MacAiImage from "@/public/assets/macbook-air/macbook-air.png";
import AppleIntelligenceImage from "@/public/assets/macbook-air/mac.png";
import MacPoweringImage from "@/public/assets/macbook-air/mac ai.png";
import IconOne from "@/public/assets/macbook-air/1.png";
import IconTwo from "@/public/assets/macbook-air/2.png";
import IconThree from "@/public/assets/macbook-air/3.png";
import IconFour from "@/public/assets/macbook-air/4.png";
import BackImage from "@/public/assets/macbook-air/back.png";
import BackOneImage from "@/public/assets/macbook-air/back1.png";
import ZeroOneIcon from "@/public/assets/macbook-air/0.1.png";
import ZeroTwoIcon from "@/public/assets/macbook-air/0.2.png";
import ZeroThreeIcon from "@/public/assets/macbook-air/0.3.png";
import MultiScreensImage from "@/public/assets/macbook-air/img1.png";
import SecurityImage from "@/public/assets/macbook-air/img2.png";
import TouchIdIcon from "@/public/assets/macbook-air/icon.png";
import ProcessorIcon from "@/public/assets/macbook-air/processor.png";
import ArrowIcon from "@/public/assets/macbook-air/aarow.png";
import MLogoIcon from "@/public/assets/macbook-air/m-logo.png";
import MacOsCompareIcon from "@/public/assets/macbook-air/mac-os.png";
import LaptopIcon from "@/public/assets/macbook-air/laptop.png";
import BatteryCompareIcon from "@/public/assets/macbook-air/b-attery.png";
import MacbookNeoNewToMacSection from "@/components/macbookpro-m5/MacbookNeoNewToMacSection";
import MacbookNeoCompareSection from "@/components/macbook-neo/MacbookNeoCompareSection";
import MacbookNeoAccessoriesSection from "@/components/macbook-neo/MacbookNeoAccessoriesSection";
import MacbookNeoAppleCareSection from "@/components/macbook-neo/MacbookNeoAppleCareSection";
import MacbookNeoLegalDisclaimersSection from "@/components/macbook-neo/MacbookNeoLegalDisclaimersSection";

const colourRows = [
  { label: "Sky Blue", image: SecondLeftOne },
  { label: "Silver", image: SecondLeftTwo },
  { label: "Starlight", image: SecondLeftThree },
  { label: "Midnight", image: SecondLeftFour },
];

function ProductHero() {
  return (
    <section className="bg-white px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px] rounded-[30px] bg-[#EAF5FC] px-6 py-10 text-center sm:px-10 sm:py-14">
        <p className="text-[22px] font-semibold leading-7 tracking-[-0.3px] text-[#1D1D1F] sm:text-[34px] sm:leading-10">
          MacBook Air
        </p>
        <h1 className="mt-1 text-[40px] font-bold leading-none tracking-[-1.8px] text-[#274E6E] sm:text-[72px]">
          Power. Moves.
        </h1>
        <p className="mt-3 text-[22px] font-semibold leading-7 tracking-[-0.3px] text-[#F06D1B] sm:text-[30px]">
          Now supercharged by M5.
        </p>

        <div className="mt-6 sm:mt-8">
          <Image
            src={HeroProduct}
            alt="MacBook Air"
            priority
            className="mx-auto h-auto w-full max-w-[1040px]"
            sizes="(max-width: 768px) 100vw, 1040px"
          />
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-[980px] text-center">
        <p className="text-[17px] leading-7 tracking-[-0.2px] text-[#1D1D1F] sm:text-[20px] sm:leading-8">
          MacBook Air features the M5 chip, delivering blazing speed and powerful AI
          capabilities to enhance the way teams work. With up to 18 hours of battery
          life and double the starting storage from previous generations, the
          incredibly light MacBook Air is ready to go wherever the workday takes you.
        </p>
        <p className="mt-7 text-[14px] font-medium leading-6 text-[#1D1D1F]">
          Experience MacBook Air Next-Gen Performance with{" "}
          <span className="text-[#8DB319]">Connexions</span>
        </p>
      </div>
    </section>
  );
}

function SizesAndColours() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] gap-5 lg:grid-cols-2">
        <article className="rounded-[30px] bg-[#F5F5F7] px-6 py-8 sm:px-8 sm:py-10 ">
          <h2 className="text-center text-[24px] font-bold leading-[1.02] tracking-[-1.2px] text-[#1D1D1F] sm:text-[32px]">
            Two perfectly
            <br />
            portable sizes.
          </h2>

          <div className="mt-8 flex flex-col items-center gap-8 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="w-full max-w-[360px] sm:max-w-[335px] lg:max-w-[346px]">
              <Image
                src={SecondRight}
                alt="MacBook Air 13-inch and 15-inch sizes"
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 346px"
              />
            </div>

            <div className="pb-2 text-center sm:text-left">
              <div>
                <p className="text-[19px] font-semibold leading-none tracking-[-0.3px] text-[#1D1D1F] sm:text-[32px]">
                  34.46 cm
                </p>
                <p className="mt-1 text-[16px] leading-7 tracking-[-0.2px] text-[#1D1D1F] sm:text-[19px]">
                  (13&quot;) display
                </p>
              </div>

              <div className="mt-10">
                <p className="text-[19px] font-semibold leading-none tracking-[-0.3px] text-[#1D1D1F] sm:text-[32px]">
                  38.91 cm
                </p>
                <p className="mt-1 text-[16px] leading-7 tracking-[-0.2px] text-[#1D1D1F] sm:text-[19px]">
                  (15&quot;) display
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-[30px] bg-[#F5F5F7] pl-6 py-10 sm:pl-8 sm:py-12">
          <h2 className="text-center text-[24px] font-bold leading-[1.02] tracking-[-1.2px] text-[#1D1D1F] sm:text-[32px]">
            Get it done
            <br />
            with flying colours.
          </h2>

          <div className="mx-auto mt-10 max-w-[560px] space-y-10 sm:mt-12">
            {colourRows.map((row) => (
              <div key={row.label} className="flex items-center gap-3 sm:gap-4">
                <p className="w-[98px] flex-shrink-0 text-[16px] font-medium leading-7 tracking-[-0.2px] text-[#1D1D1F] sm:w-[118px] sm:text-[19px]">
                  {row.label}
                </p>
                <div className="flex-1">
                  <Image
                    src={row.image}
                    alt={row.label}
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function PerformanceSection() {
  return (
    <section className="bg-white px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px] rounded-[30px] bg-[#F5F5F7] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div className="overflow-hidden rounded-[24px]">
            <Image
              src={AppleM5Right}
              alt="MacBook Air performance preview"
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 640px"
            />
          </div>

          <div className="px-2 sm:px-4">
            <div className="flex items-start gap-5">
              <Image
                src={AppleM5Left}
                alt="Apple M5 chip"
                className="h-[70px] w-[70px] sm:h-[82px] sm:w-[82px]"
                sizes="82px"
              />
              <h2 className="text-[24px] font-bold leading-[0.98] tracking-[-1.2px] text-[#1D1D1F] sm:text-[32px]">
                Fast-track
                <br />
                demanding tasks.
              </h2>
            </div>

            <p className="mt-10 text-[16px] font-medium leading-8 tracking-[-0.2px] text-[#1D1D1F] sm:mt-12 sm:text-[19px]">
              LLM prompt processing performance
            </p>

            <div className="mt-8 grid grid-cols-2 gap-8 sm:mt-10 sm:gap-12">
              <div>
                <p className="text-[16px] leading-7 tracking-[-0.2px] text-[#1D1D1F] sm:text-[19px]">
                  Up to
                </p>
                <p className="mt-1 text-[19px] font-semibold leading-none tracking-[-0.3px] text-[#1D1D1F] sm:text-[42px]">
                  3.8x
                </p>
                <p className="mt-4 text-[16px] leading-[1.3] tracking-[-0.2px] text-[#1D1D1F] sm:text-[19px]">
                  faster than PC laptop
                  <br />
                  with Intel Core Ultra X7
                </p>
              </div>

              <div>
                <p className="text-[16px] leading-7 tracking-[-0.2px] text-[#1D1D1F] sm:text-[19px]">
                  Up to
                </p>
                <p className="mt-1 text-[19px] font-semibold leading-none tracking-[-0.3px] text-[#1D1D1F] sm:text-[42px]">
                  9.5x
                </p>
                <p className="mt-4 text-[16px] leading-[1.3] tracking-[-0.2px] text-[#1D1D1F] sm:text-[19px]">
                  faster than MacBook Air with M1<sup>◊</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BatteryPosterSection() {
  return (
    <section className="bg-white px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] gap-5 lg:grid-cols-[0.34fr_0.66fr]">
        <article className="rounded-[30px] bg-[#F5F5F7] px-8 py-10 text-center sm:px-10 sm:py-12">
          <h2 className="text-[24px] font-bold leading-[1.02] tracking-[-1.2px] text-[#1D1D1F] sm:text-[32px]">
            Take charge
            <br />
            on the go.
          </h2>

          <p className="mt-14 text-[16px] font-semibold leading-8 tracking-[-0.2px] text-[#1D1D1F] sm:text-[19px]">
            Up to
          </p>

          <div className="mx-auto mt-8 w-full max-w-[230px]">
            <Image
              src={BatteryImage}
              alt="18 hours battery life"
              className="h-auto w-full"
              sizes="230px"
            />
          </div>

          <p className="mt-8 text-[16px] font-semibold leading-8 tracking-[-0.2px] text-[#1D1D1F] sm:text-[19px]">
            of battery life<sup>◊</sup>
          </p>
        </article>

        <article className="overflow-hidden rounded-[30px] bg-[#F5F5F7]">
          <Image
            src={PosterImage}
            alt="MacBook Air battery life lifestyle"
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 780px"
          />
        </article>
      </div>
    </section>
  );
}

function AiSection() {
  return (
    <section className="bg-white px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] gap-5 lg:grid-cols-2">
        <article className="overflow-hidden rounded-[30px] bg-[#F5F5F7] pt-8 sm:pt-10">
          <div className="px-6 text-center sm:px-8">
            <h2 className="text-[24px] font-bold leading-[1.02] tracking-[-1.2px] text-[#1D1D1F] sm:text-[32px]">
              MacBook Air
              <br />
              is built for AI.
            </h2>
          </div>

          <div className="mt-8">
            <Image
              src={MacAiImage}
              alt="MacBook Air built for AI"
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </article>

        <article className="overflow-hidden rounded-[30px] bg-[#F5F5F7] pt-8 sm:pt-10">
          <div className="px-6 text-center sm:px-8">
            <h2 className="text-[24px] font-bold leading-[1.02] tracking-[-1.2px] text-[#1D1D1F] sm:text-[32px]">
              <span className="bg-[linear-gradient(90deg,#0A84FF_0%,#8B5CF6_48%,#FF5ACD_100%)] bg-clip-text text-transparent">
                Apple Intelligence.
              </span>
              <br />
              Do more. Effort less.<sup>◊</sup>
            </h2>
          </div>

          <div className="mt-8">
            <Image
              src={AppleIntelligenceImage}
              alt="Apple Intelligence on MacBook Air"
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </article>
      </div>
    </section>
  );
}

const macOsItems = [
  {
    icon: IconOne,
    text: "Free automatic\nsoftware updates",
  },
  {
    icon: IconTwo,
    text: "Find documents, photos and\nmore with Spotlight",
  },
  {
    icon: IconThree,
    text: "Customisable controls and\nmenu bar",
  },
  {
    icon: IconFour,
    text: "Live Translation lets you\ncommunicate across languages\nin real time◊",
  },
];

function MacOsSection() {
  return (
    <section className="bg-white px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto rounded-[30px] bg-[#F5F5F7] px-6 py-8 sm:px-8 sm:py-10 lg:max-w-[1200px] lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10">
          <article>
            <h2 className="text-center text-[24px] font-bold leading-[1.04] tracking-[-1.2px] text-[#1D1D1F] sm:text-[32px]">
              macOS. Powering
              <br />
              possibility
            </h2>

            <div className="mt-8">
              <Image
                src={MacPoweringImage}
                alt="macOS powering possibility"
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </article>

          <article className="px-2 sm:px-4">
            <div className="space-y-8 sm:space-y-10">
              {macOsItems.map((item) => (
                <div key={item.text} className="flex items-start gap-5">
                  <Image
                    src={item.icon}
                    alt=""
                    className="mt-1 h-10 w-10 flex-shrink-0 sm:h-12 sm:w-12"
                    sizes="48px"
                  />
                  <p className="whitespace-pre-line text-[16px] font-medium leading-[1.25] tracking-[-0.2px] text-[#1D1D1F] sm:text-[19px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function MacIphoneSection() {
  return (
    <section className="bg-white px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto overflow-hidden rounded-[30px] bg-[#F5F5F7] px-6 pt-8 sm:px-8 sm:pt-10 lg:max-w-[1200px]">
        <h2 className="text-center text-[24px] font-bold leading-[1.02] tracking-[-1.2px] text-[#1D1D1F] sm:text-[32px]">
          Mac + iPhone.
          <br />
          Even better together.
        </h2>

        <div className="mt-8 sm:mt-10">
          <Image
            src={BackImage}
            alt="Mac and iPhone together"
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 1120px"
          />
        </div>
      </div>
    </section>
  );
}

const presentationItems = [
  {
    icon: ZeroOneIcon,
    text: "12MP Center Stage camera\nwith Desk View",
  },
  {
    icon: ZeroTwoIcon,
    text: "Three-mic array",
  },
  {
    icon: ZeroThreeIcon,
    text: "Immersive sound system\nwith Spatial Audio",
  },
];

function DisplayPresentationSection() {
  return (
    <section className="bg-white px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] gap-5 lg:grid-cols-2">
        <article className="overflow-hidden rounded-[30px] bg-[#F5F5F7] pt-8 sm:pt-10">
          <div className="px-6 text-center sm:px-8">
            <h2 className="text-[24px] font-bold leading-[1.02] tracking-[-1.2px] text-[#1D1D1F] sm:text-[32px]">
              Liquid Retina display.
              <br />
              Crisp, bright, brilliant.
            </h2>
          </div>

          <div className="mt-8">
            <Image
              src={BackOneImage}
              alt="Liquid Retina display"
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </article>

        <article className="rounded-[30px] bg-[#F5F5F7] px-8 py-10 sm:px-10 sm:py-12">
          <h2 className="text-center text-[24px] font-bold leading-[1.02] tracking-[-1.2px] text-[#1D1D1F] sm:text-[32px]">
            Presentations take
            <br />
            Centre Stage.
          </h2>

          <div className="mx-auto mt-12 grid max-w-[420px] justify-center gap-y-10">
            {presentationItems.map((item) => (
              <div
                key={item.text}
                className="grid grid-cols-[48px_minmax(0,260px)] items-center justify-center gap-x-5 text-left"
              >
                <Image
                  src={item.icon}
                  alt=""
                  className="h-10 w-10 justify-self-center sm:h-12 sm:w-12"
                  sizes="48px"
                />
                <p className="whitespace-pre-line text-[16px] font-medium leading-[1.3] tracking-[-0.2px] text-[#1D1D1F] sm:text-[19px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function ScreensSecuritySection() {
  return (
    <section className="bg-white px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] gap-5 lg:grid-cols-2">
        <article className="overflow-hidden rounded-[30px] bg-[#F5F5F7] pt-8 sm:pt-10">
          <div className="px-6 text-center sm:px-8">
            <h2 className="text-[24px] font-bold leading-[1.02] tracking-[-1.2px] text-[#1D1D1F] sm:text-[32px]">
              Multiple screens.
              <br />
              Singular focus.
            </h2>
          </div>

          <div className="mt-8">
            <Image
              src={MultiScreensImage}
              alt="Multiple screens singular focus"
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </article>

        <article className="overflow-hidden rounded-[30px] bg-[#F5F5F7] pt-8 sm:pt-10">
          <div className="px-6 text-center sm:px-8">
            <h2 className="text-[24px] font-bold leading-[1.02] tracking-[-1.2px] text-[#1D1D1F] sm:text-[32px]">
              Security that
              <br />
              sets the standard.
            </h2>
          </div>

          <div className="relative mt-8">
            <Image
              src={SecurityImage}
              alt="Security that sets the standard"
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 560px"
            />

            <div className="absolute right-[10%] top-[24%] flex items-center gap-3 sm:right-[11%] sm:top-[25%]">
              <Image
                src={TouchIdIcon}
                alt="Touch ID"
                className="h-9 w-9 sm:h-11 sm:w-11"
                sizes="44px"
              />
              <p className="text-[16px] font-medium leading-6 tracking-[-0.2px] text-[#1D1D1F] sm:text-[19px]">
                Touch ID
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

const compareCards = [
  {
    group: "m1",
    icon: ProcessorIcon,
    text: "Fly through demanding\nAI tasks up to 9.5x faster.◊",
  },
  {
    group: "m1",
    icon: ArrowIcon,
    text: "Bigger, brighter\nLiquid Retina display.",
  },
  {
    group: "intel",
    icon: MacOsCompareIcon,
    text: "Apple silicon and macOS Tahoe deliver enhanced speed, performance, privacy, and security.",
  },
  {
    group: "intel",
    icon: ProcessorIcon,
    text: "Built for AI, including powerful Apple Intelligence features.◊",
  },
  {
    group: "m1",
    icon: LaptopIcon,
    text: "Beautiful color options.Find the right one for you.",
  },
  {
    group: "m1",
    icon: MLogoIcon,
    text: "12MP Center Stage camera with Desk View.",
  },
  {
    group: "intel",
    icon: BatteryCompareIcon,
    text: "Up to 18 hours of battery life.Up to 6 more hours than previous models.◊",
  },
  {
    group: "intel",
    icon: ArrowIcon,
    text: "Bigger, brighter Liquid Retina display.",
  },
];

function ComparePreviousSection() {
  const m1Cards = compareCards.filter((card) => card.group === "m1");
  const intelCards = compareCards.filter((card) => card.group === "intel");

  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-[24px] font-bold leading-[1.08] tracking-[-1.2px] text-[#1D1D1F] sm:text-[32px]">
          Here&apos;s how MacBook Air with M5
          <br />
          compares to previous models.
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-center text-[16px] font-bold leading-7 tracking-[-0.2px] text-[#1D1D1F] sm:text-[19px]">
              Compared to MacBook Air (M1)
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:auto-rows-fr">
              {m1Cards.map((card) => (
                <div
                  key={`${card.group}-${card.text}`}
                  className="flex h-[196px] flex-col items-center justify-start rounded-[24px] bg-[#F5F5F7] px-6 py-8 text-center sm:h-[210px]"
                >
                  <Image
                    src={card.icon}
                    alt=""
                    className="mx-auto h-11 w-11 sm:h-12 sm:w-12"
                    sizes="48px"
                  />
                  <p className="mt-5 whitespace-pre-line text-[16px] font-medium leading-[1.35] tracking-[-0.2px] text-[#1D1D1F] sm:text-[19px]">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-center text-[16px] font-bold leading-7 tracking-[-0.2px] text-[#1D1D1F] sm:text-[19px]">
              Compared to MacBook Air (Intel-based)
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:auto-rows-fr">
              {intelCards.map((card) => (
                <div
                  key={`${card.group}-${card.text}`}
                  className="flex h-[196px] flex-col items-center justify-start rounded-[24px] bg-[#F5F5F7] px-6 py-8 text-center sm:h-[210px]"
                >
                  <Image
                    src={card.icon}
                    alt=""
                    className="mx-auto h-11 w-11 sm:h-12 sm:w-12"
                    sizes="48px"
                  />
                  <p className="mt-5 whitespace-pre-line text-[16px] font-medium leading-[1.35] tracking-[-0.2px] text-[#1D1D1F] sm:text-[19px]">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisualSection({ image, alt, className = "" }) {
  return (
    <section className="bg-white px-4 py-3 sm:px-6 lg:px-8">
      <div className={`mx-auto max-w-[1200px] overflow-hidden rounded-[26px] ${className}`}>
      </div>
    </section>
  );
}

export default function MacbookAirPage() {
  return (
    <>
      <ProductHero />
      <SizesAndColours />
      <PerformanceSection />
      <BatteryPosterSection />
      <AiSection />
      <MacOsSection />
      <MacIphoneSection />
      <DisplayPresentationSection />
      <ScreensSecuritySection />
      <ComparePreviousSection />
      <VisualSection
        image={FeatureGridBottom}
        alt="MacBook Air continuity, display, camera, audio and security features"
      />
      <MacbookNeoNewToMacSection />
      <MacbookNeoCompareSection />
      <MacbookNeoAccessoriesSection />
      <MacbookNeoAppleCareSection />
      <MacbookNeoLegalDisclaimersSection />
    </>
  );
}
