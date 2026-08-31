import Image from "next/image";
import Link from "next/link";
import Iphoneecompare from "@/components/iphone-17e/iphoneecompare";

export default function Iphone17ePage() {
  return (
    <div className="bg-white font-sfpro text-[#1D1D1F]">
      <section className="px-4 py-8 sm:px-6 lg:px-20 lg:py-10">
        <div
          className="mx-auto max-w-[1380px] overflow-hidden rounded-[28px] px-4 pb-16 pt-14 sm:px-6 lg:px-12 lg:pb-20 lg:pt-16"
          style={{
            background: "linear-gradient(180deg, #FFEEFC 0%, #FDF9FF 100%)",
          }}
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto max-w-[720px] text-center">
              <div className="mx-auto max-w-[220px]">
                <Image
                  src="/assets/iphone17e/logo-e.png"
                  alt="iPhone 17e"
                  width={440}
                  height={96}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>
              <h1
                className="mt-2 text-[46px] font-bold leading-[1.02] tracking-[-0.05em] md:text-[55px]"
                style={{
                  background:
                    "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Value put to work.
              </h1>
            </div>

            <div className="mx-auto mt-12 max-w-[980px] md:mt-16">
              <Image
                src="/assets/iphone17e/hero-section.png"
                alt="iPhone 17e hero"
                width={1600}
                height={710}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

            <p className="mx-auto mt-8 max-w-[560px] text-center text-[17px] leading-7 text-[#1D1D1F] md:text-[17px]">
              Elevate your mobile experience with iPhone 17e and Connexions.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact-us"
                className="inline-flex rounded-full border border-[#1D1D1F] px-5 py-2 text-[14px] font-medium text-[#1D1D1F]"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1320px] px-4 pb-16 pt-10 sm:px-6 lg:px-20">
        <p className="mx-auto max-w-[1020px] text-center text-[18px] leading-[1.35] tracking-[-0.02em] text-[#000] sm:text-[22px] lg:text-[24px]">
          iPhone 17e comes with many of the same great features as iPhone 17 at a wallet-friendly
          price. Packed with the same enhanced scratch resistance of Ceramic Shield 2, the
          latest-generation A19 chip, a 48MP Fusion camera, fast MagSafe wireless charging, USB-C
          and storage starting at 256GB. It&apos;s a whole lot of iPhone. For a lot less.
        </p>
      </div>

      <section className="px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-4 lg:grid-cols-[1.65fr_1fr]">
            <article className="overflow-hidden rounded-[22px] bg-[#F5F5F7] pt-8 text-center md:pt-10">
              <h2 className="mx-auto max-w-[640px] px-6 text-[24px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1D1D1F] md:px-10 md:text-[24px]">
                Built to last. Durable{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Ceramic Shield 2
                </span>
                <br />
                front with 3x better scratch resistance.
                <sup className="ml-1 text-[12px] align-super text-[#1D1D1F]">{"\u25CA"}</sup>
              </h2>
              <div className="mt-10 md:mt-10">
                <Image
                  src="/assets/iphone17e/shield.png"
                  alt="Ceramic Shield 2"
                  width={1200}
                  height={760}
                  className="h-auto w-full object-contain"
                />
              </div>
            </article>

            <article className="overflow-hidden rounded-[22px] bg-[#F5F5F7] px-6 pt-8 text-center md:px-10 md:pt-10">
              <h2 className="mx-auto max-w-[420px] text-[24px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1D1D1F] md:text-[24px]">
                Make easy connections
                <br />
                with{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  USB-C.
                </span>
              </h2>
              <div className="mx-auto mt-10 flex h-[280px] max-w-[108px] items-end justify-center md:mt-14 md:h-[360px] md:max-w-[124px]">
                <Image
                  src="/assets/iphone17e/usb.png"
                  alt="USB-C"
                  width={420}
                  height={920}
                  className="h-full w-auto object-contain"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
        <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[22px] bg-[#F5F5F7] px-6 py-10 md:px-10 md:py-12">
          <h2 className="mx-auto max-w-[700px] text-center text-[24px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1D1D1F] md:text-[24px]">
            Long-lasting{" "}
            <span
              style={{
                background:
                  "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              battery life
            </span>{" "}
            for results all day.
          </h2>

          <div className="mx-auto mt-8 max-w-[676px] md:mt-10">
            <Image
              src="/assets/iphone17e/kpi.png"
              alt="Battery life performance"
              width={1400}
              height={900}
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="mx-auto mt-8 grid max-w-[720px] gap-6 border-[#D2D2D7] md:mt-10 md:grid-cols-[1.1fr_1fr_1fr] md:gap-0">
            <div className="border-b border-[#D2D2D7] pb-4 md:border-b-0 md:pr-10">
              <p className="text-[15px] font-semibold leading-6 text-[#6E6E73]">Compare with:</p>
              <div className="mt-2 border-b border-[#D2D2D7] pb-2">
                <select className="w-full bg-transparent text-[17px] font-semibold leading-6 text-[#1D1D1F] outline-none">
                  <option>iPhone 11</option>
                </select>
              </div>
            </div>

            <div className="border-b border-[#D2D2D7] pb-4 md:border-b-0 md:border-l md:px-10">
              <p className="text-[15px] font-semibold leading-6 text-[#6E6E73]">Up to</p>
              <p
                className="mt-1 text-[24px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[24px]"
                style={{
                  background:
                    "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                50% charge
                <br />
                in 30 minutes
              </p>
              <p className="mt-2 text-[15px] leading-5 text-[#6E6E73]">
                with a 20W power
                <br />
                adapter or higher
                <sup className="text-[10px] align-super">{"\u25CA"}</sup>
              </p>
            </div>

            <div className="md:border-l md:px-10">
              <p className="text-[15px] font-semibold leading-6 text-[#6E6E73]">Up to</p>
              <p
                className="mt-1 text-[24px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[24px]"
                style={{
                  background:
                    "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                6 more
                <br />
                hours
              </p>
              <p className="mt-2 text-[15px] leading-5 text-[#6E6E73]">per full charge</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
        <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[22px] bg-[#F5F5F7] px-6 pt-10 md:px-10 md:pt-12">
          <h2 className="mx-auto max-w-[760px] text-center text-[24px] font-bold leading-[1.12] tracking-[-0.04em] text-[#1D1D1F] md:text-[24px]">
            Fast wireless charging and
            <br />
            accessories. All in a snap with
            <br />
            <span
              style={{
                background:
                  "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              MagSafe.
            </span>
            <sup className="ml-1 text-[12px] align-super text-[#1D1D1F]">{"\u25CA"}</sup>
          </h2>

          <div className="mx-auto mt-8 max-w-[980px] md:mt-10">
            <Image
              src="/assets/iphone17e/wireless.png"
              alt="MagSafe accessories"
              width={1400}
              height={980}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
        <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[22px] bg-[#F5F5F7] px-6 py-10 md:px-10 md:py-12">
          <h2 className="text-center text-[24px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1D1D1F] md:text-[24px]">
            <span
              style={{
                background:
                  "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              A19 chip.
            </span>{" "}
            Blasts through tasks. On the go.
          </h2>

          <div className="mx-auto mt-8 max-w-[980px] md:mt-10">
            <Image
              src="/assets/iphone17e/a19.png"
              alt="A19 chip performance"
              width={1600}
              height={980}
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="mx-auto mt-8 grid max-w-[620px] gap-6 border-[#D2D2D7] md:mt-10 md:grid-cols-[1.2fr_1fr_1fr] md:gap-0">
            <div className="border-b border-[#D2D2D7] pb-4 md:border-b-0 md:pr-10">
              <p className="text-[15px] font-semibold leading-6 text-[#6E6E73]">Compare with:</p>
              <div className="mt-2 border-b border-[#D2D2D7] pb-2">
                <select className="w-full bg-transparent text-[17px] font-semibold leading-6 text-[#1D1D1F] outline-none">
                  <option>iPhone 11</option>
                </select>
              </div>
            </div>

            <div className="border-b border-[#D2D2D7] pb-4 md:border-b-0 md:border-l md:px-10">
              <p className="text-[15px] font-semibold leading-6 text-[#6E6E73]">Up to</p>
              <p
                className="mt-1 text-[24px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[24px]"
                style={{
                  background:
                    "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                2x faster
              </p>
              <p className="mt-2 text-[15px] font-semibold leading-5 text-[#6E6E73]">CPU</p>
            </div>

            <div className="md:border-l md:px-10">
              <p className="text-[15px] font-semibold leading-6 text-[#6E6E73]">Up to</p>
              <p
                className="mt-1 text-[24px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[24px]"
                style={{
                  background:
                    "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                2.2x faster
              </p>
              <p className="mt-2 text-[15px] font-semibold leading-5 text-[#6E6E73]">4-core GPU</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
        <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[22px]">
          <div className="relative">
            <Image
              src="/assets/iphone17e/poster.png"
              alt="iPhone 17e poster"
              width={1600}
              height={980}
              className="h-auto w-full object-cover"
            />
            <h2 className="absolute left-6 top-6 max-w-[320px] text-[24px] font-bold leading-[1.08] tracking-[-0.04em] text-white md:left-10 md:top-10 md:text-[24px]">
              Keeps work moving
              <br />
              while out and about.
            </h2>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
        <div className="mx-auto max-w-[1320px] grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <article className="overflow-hidden rounded-[22px] bg-[#F5F5F7] px-6 pt-10 text-center md:px-10 md:pt-12">
            <h2 className="mx-auto max-w-[520px] text-[24px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1D1D1F] md:text-[24px]">
              <span
                style={{
                  background:
                    "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Advanced security
              </span>{" "}
              built
              <br />
              in so data stays
              <br />
              protected.
            </h2>
            <div className="mx-auto mt-10 max-w-[190px] md:mt-14 md:max-w-[230px]">
              <Image
                src="/assets/iphone17e/apple.png"
                alt="Advanced security"
                width={520}
                height={520}
                className="h-auto w-full object-contain"
              />
            </div>
          </article>

          <div className="grid gap-4">
            <article className="overflow-hidden rounded-[22px] bg-[#F5F5F7] px-6 py-10 text-center md:px-10 md:py-12">
              <div className="mx-auto max-w-[56px]">
                <Image
                  src="/assets/iphone17e/storage.png"
                  alt="Storage"
                  width={112}
                  height={112}
                  className="h-auto w-full object-contain"
                />
              </div>
              <h2 className="mx-auto mt-6 max-w-[360px] text-[24px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1D1D1F] md:text-[24px]">
                <span
                  style={{
                    background:
                      "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  256GB
                </span>{" "}
                starting
                <br />
                storage.
                <sup className="ml-1 text-[12px] align-super text-[#1D1D1F]">{"\u25CA"}</sup>{" "}
                More space
                <br />
                for all your needs.
              </h2>
            </article>

            <article className="overflow-hidden rounded-[22px] bg-[#F5F5F7] px-6 py-10 text-center md:px-10 md:py-12">
              <div className="mx-auto max-w-[56px]">
                <Image
                  src="/assets/iphone17e/esim.png"
                  alt="eSIM"
                  width={112}
                  height={112}
                  className="h-auto w-full object-contain"
                />
              </div>
              <h2 className="mx-auto mt-6 max-w-[360px] text-[24px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1D1D1F] md:text-[24px]">
                <span
                  style={{
                    background:
                      "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  eSIM.
                </span>{" "}
                Flexible.
                <br />
                Secure. Seamless.
                <sup className="ml-1 text-[12px] align-super text-[#1D1D1F]">{"\u25CA"}</sup>
              </h2>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
        <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[22px] bg-[#F5F5F7] px-6 pt-10 text-center md:px-10 md:pt-12">
          <h2 className="text-[24px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1D1D1F] md:text-[24px]">
            <span
              style={{
                background:
                  "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Zero-touch deployment.
            </span>
            <br />
            Zero hassle for IT.
          </h2>

          <div className="mx-auto mt-8 max-w-[420px] md:mt-10 md:max-w-[470px]">
            <Image
              src="/assets/iphone17e/zero.png"
              alt="Zero-touch deployment"
              width={900}
              height={1200}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
        <div className="mx-auto max-w-[1320px] grid gap-4 lg:grid-cols-[0.82fr_1.38fr]">
          <article className="overflow-hidden rounded-[22px] bg-black px-6 pt-10 text-center text-white md:px-10 md:pt-12">
            <h2 className="text-[24px] font-bold leading-[1.1] tracking-[-0.04em] md:text-[24px]">
              Get safety features like
              <br />
              Crash Detection.
            </h2>
            <div className="mx-auto mt-8 max-w-[360px] md:mt-10">
              <Image
                src="/assets/iphone17e/crash.png"
                alt="Crash Detection"
                width={760}
                height={1320}
                className="h-auto w-full object-contain"
              />
            </div>
          </article>

          <article className="overflow-hidden rounded-[22px] bg-[#F5F5F7] px-6 pt-10 text-center md:px-10 md:pt-12">
            <h2 className="text-[24px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1D1D1F] md:text-[24px]">
              iOS and{" "}
              <span
                style={{
                  background:
                    "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Apple Intelligence.
              </span>
              <sup className="ml-1 text-[12px] align-super text-[#1D1D1F]">{"\u25CA"}</sup>
              <br />
              Effortlessly helpful every day.
            </h2>
            <div className="mx-auto mt-8 max-w-[720px] md:mt-10">
              <Image
                src="/assets/iphone17e/ios.png"
                alt="iOS and Apple Intelligence"
                width={1400}
                height={980}
                className="h-auto w-full object-contain"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
        <div className="mx-auto max-w-[1320px] rounded-[22px] bg-[#F5F5F7] px-6 py-10 md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
            <div>
              <h2 className="text-[42px] font-bold leading-[1.02] tracking-[-0.05em] text-[#1D1D1F] md:text-[56px]">
                Worth the upgrade?
                <br />
                All signs point to
                <br />
                yes.
              </h2>
            </div>

            <div className="max-w-[260px] lg:ml-auto lg:w-full">
              <p className="text-[15px] font-semibold leading-[1.2] text-[#6E6E73]">
                Select an iPhone to
                <br />
                compare to
                <br />
                iPhone 17e:
              </p>
              <div className="mt-3 border-b border-[#D2D2D7] pb-2">
                <select className="w-full bg-transparent text-[17px] font-semibold leading-6 text-[#1D1D1F] outline-none">
                  <option>iPhone 11</option>
                </select>
              </div>
            </div>
          </div>

          <p className="mt-10 text-[18px] font-semibold leading-7 text-[#6E6E73] md:mt-12 md:text-[24px]">
            A few ways iPhone 17e gives you more:
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <article className="rounded-[18px] bg-white px-6 py-10 text-center md:px-8 md:py-12">
              <p className="text-[16px] font-semibold leading-6 text-[#6E6E73]">Up to</p>
              <p
                className="mt-2 text-[34px] font-bold leading-[1.02] tracking-[-0.04em] md:text-[48px]"
                style={{
                  background:
                    "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                2x
                <br />
                faster
              </p>
              <p className="mt-2 text-[18px] font-semibold leading-7 text-[#6E6E73] md:text-[20px]">
                CPU performance
              </p>
            </article>

            <article className="rounded-[18px] bg-white px-6 py-10 text-center md:px-8 md:py-12">
              <p className="text-[16px] font-semibold leading-6 text-[#6E6E73]">Up to</p>
              <p
                className="mt-2 text-[34px] font-bold leading-[1.02] tracking-[-0.04em] md:text-[48px]"
                style={{
                  background:
                    "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                6 more
                <br />
                hours
              </p>
              <p className="mt-2 text-[18px] font-semibold leading-7 text-[#6E6E73] md:text-[20px]">
                per full charge
              </p>
            </article>

            <article className="overflow-hidden rounded-[18px] bg-white px-6 pt-8 text-center md:px-8 md:pt-10">
              <p className="mx-auto max-w-[280px] text-[18px] font-semibold leading-[1.15] text-[#6E6E73] md:text-[20px]">
                Ceramic Shield 2 front with
                <br />
                3x better scratch
                <br />
                resistance
              </p>
              <div className="mx-auto mt-6 max-w-[170px] md:mt-8 md:max-w-[190px]">
                <Image
                  src="/assets/iphone17e/3x.png"
                  alt="Ceramic Shield 2 durability"
                  width={420}
                  height={520}
                  className="h-auto w-full object-contain"
                />
              </div>
            </article>

            <article className="overflow-hidden rounded-[18px] bg-white px-6 pt-8 text-center md:px-8 md:pt-10">
              <p className="mx-auto max-w-[260px] text-[18px] font-semibold leading-[1.15] text-[#6E6E73] md:text-[20px]">
                Fast wireless charging and
                <br />
                accessories with MagSafe
              </p>
              <div className="mx-auto mt-6 max-w-[150px] md:mt-8 md:max-w-[170px]">
                <Image
                  src="/assets/iphone17e/mag.png"
                  alt="MagSafe charging"
                  width={340}
                  height={420}
                  className="h-auto w-full object-contain"
                />
              </div>
            </article>

            <article className="rounded-[18px] bg-white px-6 py-10 text-center md:px-8 md:py-12">
              <p className="text-[18px] font-semibold leading-7 text-[#6E6E73] md:text-[20px]">
                4x starting storage
              </p>
              <p
                className="mt-2 text-[34px] font-bold leading-[1.02] tracking-[-0.04em] md:text-[48px]"
                style={{
                  background:
                    "linear-gradient(270deg, #C63C71 0%, #C23C7B 23%, #B83D8E 39%, #9544A5 66%, #8047AE 79%, #694CA7 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                256GB
              </p>
            </article>

            <article className="rounded-[18px] bg-white px-6 py-10 text-center md:px-8 md:py-12">
              <div className="mx-auto max-w-[66px]">
                <Image
                  src="/assets/iphone17e/ai.png"
                  alt="Apple Intelligence"
                  width={132}
                  height={132}
                  className="h-auto w-full object-contain"
                />
              </div>
              <p className="mt-6 text-[22px] font-semibold leading-8 text-[#6E6E73] md:text-[24px]">
                Apple Intelligence
              </p>
            </article>
          </div>
        </div>
      </section>

      <Iphoneecompare />

      <section className="px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-center text-[32px] font-bold leading-[1.04] tracking-[-0.05em] text-[#1D1D1F] md:text-[40px]">
            Designed to make a difference.
          </h2>

          <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-2">
            <article className="rounded-[22px] bg-[#F5F5F7] px-6 py-10 text-center md:px-10 md:py-12">
              <div className="mx-auto max-w-[48px]">
                <Image
                  src="/assets/iphone17e/lock.png"
                  alt="Privacy"
                  width={96}
                  height={96}
                  className="h-auto w-full object-contain"
                />
              </div>
              <h3 className="mx-auto mt-6 max-w-[420px] text-[24px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1D1D1F] md:text-[24px]">
                Privacy. That&apos;s iPhone.
              </h3>
              <p className="mx-auto mt-3 max-w-[480px] text-[18px] leading-[1.45] text-[#1D1D1F] md:text-[17px]">
                From the Passwords app to Private Browsing on Safari to the Health app, iPhone
                helps keep you in control of what you share.
              </p>
            </article>

            <article className="rounded-[22px] bg-[#F5F5F7] px-6 py-10 text-center md:px-10 md:py-12">
              <div className="mx-auto max-w-[48px]">
                <Image
                  src="/assets/iphone17e/glob.png"
                  alt="Recycled materials"
                  width={96}
                  height={96}
                  className="h-auto w-full object-contain"
                />
              </div>
              <h3 className="mx-auto mt-6 max-w-[560px] text-[24px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1D1D1F] md:text-[24px]">
                Recycled materials? Naturally.
              </h3>
              <p className="mx-auto mt-3 max-w-[560px] text-[18px] leading-[1.45] text-[#1D1D1F] md:text-[17px]">
                Apple is significantly expanding the use of priority materials in iPhone
                batteries, magnets and circuit boards. And iPhone packaging is 100% fibre based
                and can be easily recycled at home.
                <sup className="text-[10px] align-super">{"\u25CA"}</sup>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-center text-[32px] font-bold leading-[1.04] tracking-[-0.05em] text-[#1D1D1F] md:text-[40px]">
            Easy to upgrade. Simple to switch.
          </h2>

          <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-2">
            <article className="rounded-[22px] bg-[#F5F5F7] px-6 py-10 text-center md:px-10 md:py-12">
              <div className="mx-auto max-w-[48px]">
                <Image
                  src="/assets/iphone17e/double.png"
                  alt="Upgrade from another iPhone"
                  width={96}
                  height={96}
                  className="h-auto w-full object-contain"
                />
              </div>
              <h3 className="mx-auto mt-6 max-w-[420px] text-[24px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1D1D1F] md:text-[24px]">
                Upgrading from
                <br />
                another iPhone?
              </h3>
              <p className="mx-auto mt-3 max-w-[500px] text-[18px] leading-[1.45] text-[#1D1D1F] md:text-[17px]">
                Just put your old iPhone next to your new one, and with a few taps you can
                transfer your data automatically.
              </p>
            </article>

            <article className="rounded-[22px] bg-[#F5F5F7] px-6 py-10 text-center md:px-10 md:py-12">
              <div className="mx-auto max-w-[48px]">
                <Image
                  src="/assets/iphone17e/is-o.png"
                  alt="Switch from Android"
                  width={96}
                  height={96}
                  className="h-auto w-full object-contain"
                />
              </div>
              <h3 className="mx-auto mt-6 max-w-[500px] text-[24px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1D1D1F] md:text-[24px]">
                Switching from an
                <br />
                Android phone?
              </h3>
              <p className="mx-auto mt-3 max-w-[520px] text-[18px] leading-[1.45] text-[#1D1D1F] md:text-[17px]">
                When you buy a new iPhone, the Move to iOS app makes it easy to transfer your
                photos, contacts and more.
                <sup className="text-[10px] align-super">{"\u25CA"}</sup>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-center text-[32px] font-bold leading-[1.04] tracking-[-0.05em] text-[#1D1D1F] md:text-[40px]">
            Even more to love.
          </h2>

          <article className="mt-8 overflow-hidden rounded-[22px] bg-[#F5F5F7] px-6 py-10 md:mt-10 md:px-10 md:py-12">
            <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              <div className="max-w-[360px]">
                <p className="text-[18px] font-semibold leading-7 text-[#1D1D1F] md:text-[24px]">
                  iPhone accessories
                </p>
                <h3 className="mt-2 text-[32px] font-bold leading-[1.04] tracking-[-0.05em] text-[#1D1D1F] md:text-[40px]">
                  Perfect pairings.
                </h3>
                <p className="mt-4 text-[18px] leading-[1.45] text-[#1D1D1F] md:text-[17px]">
                  Explore cases, wallets,
                  <br />
                  MagSafe chargers and more.
                </p>
                <a
                  href="/contact-us"
                  className="mt-6 inline-flex text-[18px] font-medium leading-7 text-[#06C] md:text-[22px]"
                >
                  Learn more about iPhone accessories &#8250;
                </a>
              </div>

              <div className="mx-auto w-full max-w-[560px]">
                <Image
                  src="/assets/iphone17e/wireless.png"
                  alt="iPhone accessories"
                  width={1400}
                  height={980}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
        <div className="mx-auto max-w-[1320px] rounded-[22px] bg-[#F5F5F7] px-6 py-10 md:px-10 md:py-12">
          <div className="space-y-10 md:space-y-14">
          <article className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="max-w-[620px]">
              <div className="max-w-[44px]">
                <Image
                  src="/assets/iphone17e/tv.png"
                  alt="Apple TV"
                  width={88}
                  height={36}
                  className="h-auto w-full object-contain"
                />
              </div>
              <h3 className="mt-4 text-[32px] font-bold leading-[1.04] tracking-[-0.05em] text-[#1D1D1F] md:text-[40px]">
                Buy an iPhone and get
                <br />
                3 months of Apple TV free.
              </h3>
              <ul className="mt-5 space-y-2 text-[18px] leading-[1.45] text-[#1D1D1F] md:text-[17px]">
                <li>
                  Stream hundreds of exclusive Apple Originals and enjoy new releases weekly with
                  no ads.
                </li>
                <li>
                  Watch on your favourite Apple devices, streaming platforms, smart TVs and more.
                </li>
                <li>Six people can share a single Apple TV subscription.</li>
              </ul>
            </div>

            <div className="mx-auto w-full max-w-[280px]">
              <Image
                src="/assets/iphone17e/a-tv.png"
                alt="Apple TV offer"
                width={560}
                height={760}
                className="h-auto w-full object-contain"
              />
            </div>
          </article>

          <article className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="max-w-[620px]">
              <div className="max-w-[68px]">
                <Image
                  src="/assets/iphone17e/care.png"
                  alt="AppleCare Plus"
                  width={136}
                  height={36}
                  className="h-auto w-full object-contain"
                />
              </div>
              <h3 className="mt-4 text-[32px] font-bold leading-[1.04] tracking-[-0.05em] text-[#1D1D1F] md:text-[40px]">
                Your iPhone.
                <br />
                Handled with AppleCare+.
              </h3>
              <p className="mt-5 max-w-[620px] text-[18px] leading-[1.45] text-[#1D1D1F] md:text-[22px]">
                Get easy, fast repairs for accidents like drops and spills, theft and loss coverage
                up to twice in 12 months, and priority care.
              </p>
              <Link
                href="/contact-us"
                className="mt-6 inline-flex text-[18px] font-medium leading-7 text-[#06C] md:text-[22px]"
              >
                Learn more about AppleCare+ &#8250;
              </Link>
            </div>

            <div className="mx-auto w-full max-w-[320px]">
              <Image
                src="/assets/iphone17e/+care.png"
                alt="AppleCare Plus iPhone"
                width={640}
                height={760}
                className="h-auto w-full object-contain"
              />
            </div>
          </article>

          <article className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="max-w-[620px]">
              <p className="text-[18px] font-semibold leading-7 text-[#1D1D1F] md:text-[24px]">
                iPhone and AirPods
              </p>
              <h3 className="mt-2 text-[32px] font-bold leading-[1.04] tracking-[-0.05em] text-[#1D1D1F] md:text-[40px]">
                iPhone and AirPods.
                <br />
                Best buds.
              </h3>
              <p className="mt-5 max-w-[620px] text-[18px] leading-[1.45] text-[#1D1D1F] md:text-[17px]">
                iPhone and AirPods work together seamlessly to listen to music, take calls and
                interact with Siri throughout the day. Your favourite playlists sound better than
                ever with Personalised Spatial Audio and Active Noise Cancellation.
              </p>
              <Link
                href="/contact-us"
                className="mt-6 inline-flex text-[18px] font-medium leading-7 text-[#06C] md:text-[17px]"
              >
                Learn more about AirPods &#8250;
              </Link>
            </div>

            <div className="mx-auto w-full max-w-[300px]">
              <Image
                src="/assets/iphone17e/pods.png"
                alt="iPhone and AirPods"
                width={600}
                height={760}
                className="h-auto w-full object-contain"
              />
            </div>
          </article>
          </div>
        </div>
      </section>
    </div>
  );
}
