import Image from "next/image";
import HeroProduct from "@/public/assets/macbook-air/hero-product-clean.png";
import FeatureGridTop from "@/public/assets/macbook-air/feature-grid-top.png";
import FeatureGridBottom from "@/public/assets/macbook-air/feature-grid-a.png";
import SecondLeft from "@/public/assets/macbook-air/secound_left.png";
import SecondRight from "@/public/assets/macbook-air/secound-right.png";
import AppleM5Left from "@/public/assets/macbook-air/Apple M5 (1).png";
import AppleM5Right from "@/public/assets/macbook-air/Apple M5 (2).png";
import BatteryImage from "@/public/assets/macbook-air/battery.png";
import PosterImage from "@/public/assets/macbook-air/poster.png";
import MacbookNeoNewToMacSection from "@/components/macbookpro-m5/MacbookNeoNewToMacSection";
import MacbookNeoCompareSection from "@/components/macbook-neo/MacbookNeoCompareSection";
import MacbookNeoAccessoriesSection from "@/components/macbook-neo/MacbookNeoAccessoriesSection";
import MacbookNeoAppleCareSection from "@/components/macbook-neo/MacbookNeoAppleCareSection";
import MacbookNeoLegalDisclaimersSection from "@/components/macbook-neo/MacbookNeoLegalDisclaimersSection";

function ProductHero() {
  return (
    <section className="bg-white px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px] rounded-[30px] bg-[#EAF5FC] px-6 py-10 text-center sm:px-10 sm:py-14">
        <p className="text-[22px] font-semibold leading-7 tracking-[-0.3px] text-[#1D1D1F] sm:text-[34px] sm:leading-10">
          MacBook Air
        </p>
        <h1 className="mt-1 text-[40px] font-semibold leading-none tracking-[-1.8px] text-[#274E6E] sm:text-[72px]">
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
        <article className="rounded-[30px] bg-[#F5F5F7] px-6 py-8 sm:px-8 sm:py-10 lg:min-h-[560px]">
          <h2 className="text-center text-[34px] font-semibold leading-[1.02] tracking-[-1.4px] text-[#1D1D1F] sm:text-[42px] lg:text-[58px]">
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
                <p className="text-[34px] font-semibold leading-none tracking-[-1px] text-[#1D1D1F] sm:text-[42px]">
                  34.46 cm
                </p>
                <p className="mt-1 text-[18px] leading-7 tracking-[-0.2px] text-[#1D1D1F]">
                  (13&quot;) display
                </p>
              </div>

              <div className="mt-10">
                <p className="text-[34px] font-semibold leading-none tracking-[-1px] text-[#1D1D1F] sm:text-[42px]">
                  38.91 cm
                </p>
                <p className="mt-1 text-[18px] leading-7 tracking-[-0.2px] text-[#1D1D1F]">
                  (15&quot;) display
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-[30px] bg-[#F5F5F7] px-6 py-8 sm:px-8 sm:py-10 lg:min-h-[560px]">
          <h2 className="text-center text-[34px] font-semibold leading-[1.02] tracking-[-1.4px] text-[#1D1D1F] sm:text-[42px] lg:text-[58px]">
            Get it done
            <br />
            with flying colours.
          </h2>

          <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-center sm:gap-5">
            <div className="grid flex-shrink-0 grid-cols-1 gap-[28px] text-[18px] font-medium leading-7 tracking-[-0.2px] text-[#1D1D1F] sm:w-[112px] sm:pt-2">
              <p>Sky Blue</p>
              <p>Silver</p>
              <p>Starlight</p>
              <p>Midnight</p>
            </div>

            <div className="w-full">
              <Image
                src={SecondLeft}
                alt="MacBook Air colours"
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 346px"
              />
            </div>
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
              <h2 className="text-[34px] font-semibold leading-[0.98] tracking-[-1.2px] text-[#1D1D1F] sm:text-[54px]">
                Fast-track
                <br />
                demanding tasks.
              </h2>
            </div>

            <p className="mt-10 text-[22px] font-medium leading-8 tracking-[-0.3px] text-[#1D1D1F] sm:mt-12 sm:text-[28px]">
              LLM prompt processing performance
            </p>

            <div className="mt-8 grid grid-cols-2 gap-8 sm:mt-10 sm:gap-12">
              <div>
                <p className="text-[18px] leading-7 tracking-[-0.2px] text-[#1D1D1F] sm:text-[24px]">
                  Up to
                </p>
                <p className="mt-1 text-[56px] font-semibold leading-none tracking-[-2px] text-[#1D1D1F] sm:text-[76px]">
                  3.8x
                </p>
                <p className="mt-4 text-[18px] leading-[1.3] tracking-[-0.2px] text-[#1D1D1F] sm:text-[24px]">
                  faster than PC laptop
                  <br />
                  with Intel Core Ultra X7
                </p>
              </div>

              <div>
                <p className="text-[18px] leading-7 tracking-[-0.2px] text-[#1D1D1F] sm:text-[24px]">
                  Up to
                </p>
                <p className="mt-1 text-[56px] font-semibold leading-none tracking-[-2px] text-[#1D1D1F] sm:text-[76px]">
                  9.5x
                </p>
                <p className="mt-4 text-[18px] leading-[1.3] tracking-[-0.2px] text-[#1D1D1F] sm:text-[24px]">
                  faster than MacBook Air
                  <br />
                  with M1<sup>◊</sup>
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
          <h2 className="text-[34px] font-semibold leading-[1.02] tracking-[-1.2px] text-[#1D1D1F] sm:text-[54px]">
            Take charge
            <br />
            on the go.
          </h2>

          <p className="mt-14 text-[28px] font-semibold leading-8 tracking-[-0.3px] text-[#1D1D1F] sm:text-[38px]">
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

          <p className="mt-8 text-[28px] font-semibold leading-8 tracking-[-0.3px] text-[#1D1D1F] sm:text-[38px]">
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
