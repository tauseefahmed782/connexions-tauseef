import Link from "next/link";
import CommonImage from "../common/CommonImage";
import MacbookImage from "@/public/assets/background1.png";
import AirpodsImage from "@/public/assets/Background.png";
import KeyboardImage from "@/public/assets/modal-mac-air-img-1.png";
import MouseImage from "@/public/assets/apple-grid-key.svg";
import TrackpadImage from "@/public/assets/apple-grid-book.svg";
import Image from "next/image";
export default function MacbookNeoAccessoriesSection() {
  return (
    <section className="bg-white sm:px-6 lg:px-20">
      <div className="mx-auto max-w-[1200px] rounded-[28px] bg-[#F5F5F7]  py-10  md:py-12">
        <div className="grid relative grid-cols-1 gap-10 md:grid-cols-[330px_minmax(0,1fr)] md:items-center md:gap-8">
          <div className="max-w-[280px] pl-12">
            <p className="mb-2 text-[21px] font-semibold leading-7 tracking-[-0.3px] text-[#1D1D1F]">
              Accessories
            </p>
            <h2 className="text-[28px] md:text-[36px] leading-[1.2] font-bold">
              Explore Mac accessories.
            </h2>
            <p className="mt-2 max-w-[235px] text-[17px] leading-[1.45] tracking-[-0.2px] text-[#1D1D1F]">
              Explore keyboards, devices and other essentials.
            </p>
            <Link
              href="/contact-us"
              className="mt-2 inline-flex text-[17px] font-normal leading-6 text-[#06C]"
            >
              Shop Apple accessories &#8250;
            </Link>
          </div>

          <div className="absolute right-0 min-h-[240px] overflow-hidden md:min-h-[255px]">
         <Image
             src="assets/macaccessories.svg"
             alt=""
             width={390}
             height={340}
             className="w-full h-auto object-contain"
           />
          </div>
        </div>
      </div>
    </section>
  );
}
