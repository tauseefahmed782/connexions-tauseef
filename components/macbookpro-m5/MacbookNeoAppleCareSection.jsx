import Link from "next/link";
import CommonImage from "../common/CommonImage";
import AppleCareOverview from "@/public/assets/care.svg";
import AppleLogo from "@/public/assets/apple-logo.svg";
import MacbookImage from "@/public/assets/applecare.svg";

export default function MacbookNeoAppleCareSection() {
  return (
    <section className="bg-white my-5">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-10 rounded-[28px] bg-[#F5F5F7] px-8 py-10 md:grid-cols-[360px_minmax(0,1fr)] md:px-14 md:py-12">
          <div className="max-w-[500px]">
            <div className="mb-2">
              <CommonImage
                src={AppleCareOverview.src || AppleCareOverview}
                alt="AppleCare"
                className="h-5 w-auto"
              />
            </div>

            <h2 className="text-[28px] md:text-[36px] leading-[1.2] font-bold">
              Your Mac. Handled with AppleCare+.
            </h2>

            <p className="mt-2 max-w-[295px] text-[17px] leading-[1.2] tracking-[-0.2px] text-[#1D1D1F]">
              Enjoy easy, fast repairs for accidents like drops and spills, and
              priority care.
            </p>

            <div className="mt-2">
              <Link href="/contact-us" className="inline-flex text-[17px] text-[#06C]">
                Learn more about AppleCare+ &#8250;
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden md:min-h-[255px] md:justify-end">
            <div className="w-full max-w-[420px]">
              <CommonImage
                src={MacbookImage.src || MacbookImage}
                alt="MacBook with AppleCare"
                className="h-auto w-full"
              />
            </div>

         
          </div>
        </div>
      </div>
    </section>
  );
}
