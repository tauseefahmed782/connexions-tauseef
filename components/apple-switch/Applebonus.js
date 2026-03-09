import Link from "next/link";

export default function AppleBonusSection() {
  return (
    <section className="relative w-full h-[420px] flex items-center justify-center text-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/Applebonus.svg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6">
        
        {/* Top Line */}
        <div className="w-24 h-[3px] bg-white mx-auto mb-6"></div>

        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
          Get An Apple Bonus!
        </h2>

        <p className="text-gray-200 text-lg mb-6">
          Switch from Windows to Mac and get up to
          <br />
          <span className="font-medium">
            4,000 extra trade-in value
          </span>
        </p>
              <Link href={"/contact-us"}>

        <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
          Try now
        </button>
</Link>
      </div>
    </section>
  );
}