import Image from "next/image";

const desktopSections = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];
const mobileSections = ["01", "02", "03", "04", "05", "06", "07"];

export const metadata = {
  title: "Mac mini with M6 and M5 Pro | Connexions",
  description: "Explore Mac mini with M6 and M5 Pro.",
};

function ImageSequence({ sections, folder, width, height, className }) {
  return (
    <div className={className}>
      {sections.map((section, index) => (
        <Image
          key={section}
          src={`/assets/mac-m6-m5-pro/${folder}/${section}.jpg`}
          alt=""
          width={width}
          height={height}
          priority={index === 0}
          sizes="100vw"
          className="block h-auto w-full"
        />
      ))}
    </div>
  );
}

export default function MacMiniPage() {
  return (
    <section aria-label="Mac mini with M6 and M5 Pro" className="w-full overflow-hidden bg-white">
      <ImageSequence
        sections={desktopSections}
        folder="dekstop"
        width={1500}
        height={899}
        className="hidden w-full md:block"
      />
      <ImageSequence
        sections={mobileSections}
        folder="mobile"
        width={600}
        height={2382}
        className="w-full md:hidden"
      />
    </section>
  );
}