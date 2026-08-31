import Image from "next/image";

const desktopSections = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const mobileSections = ["one", "two", "three", "four", "five", "six", "seven"];

export const metadata = {
  title: "Mac Studio with M5 Max and M5 Ultra | Connexions",
  description: "Explore Mac Studio with M5 Max and M5 Ultra.",
};

function ImageSequence({ sections, folder, width, height, className }) {
  return (
    <div className={className}>
      {sections.map((section, index) => (
        <Image
          key={section}
          src={"/assets/" + folder + "/" + section + ".jpg"}
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

export default function MacStudioPage() {
  return (
    <section aria-label="Mac Studio with M5 Max and M5 Ultra" className="w-full overflow-hidden bg-white">
      <ImageSequence
        sections={desktopSections}
        folder="mac-desktop"
        width={1500}
        height={1078}
        className="hidden w-full md:block"
      />
      <ImageSequence
        sections={mobileSections}
        folder="mac-mobile"
        width={600}
        height={2396}
        className="w-full md:hidden"
      />
    </section>
  );
}
