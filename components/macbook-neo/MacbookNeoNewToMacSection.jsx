import { Bolt, CheckCheck, LaptopMinimalCheck } from "lucide-react";

const cards = [
  {
    title: "Easy to learn.",
    description:
      "Mac is designed to be easy to learn and use, so you can start doing what you love in no time at all.",
    icon: CheckCheck,
  },
  {
    title: "Superfast.",
    description:
      "The combination of Apple silicon and macOS means Mac delivers incredible power and speed to everything you do.",
    icon: Bolt,
  },
  {
    title: "Built to last.",
    description:
      "With a durable aluminium enclosure and free software updates, Mac is in it for the long haul, inside and out.",
    icon: LaptopMinimalCheck,
  },
];

export default function MacbookNeoNewToMacSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-semibold tracking-[-1.4px] text-[#1D1D1F] md:mb-14 md:text-[54px]">
          New to Mac?
        </h2>

        <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[308px] flex-col items-center rounded-[22px] bg-[#F5F5F7] px-8 py-12 text-center"
            >
              <div className="mb-8 flex h-12 items-center justify-center text-[#1D1D1F]">
                <card.icon strokeWidth={2.2} className="h-11 w-11" />
              </div>

              <h3 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.7px] text-[#1D1D1F]">
                {card.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[255px] text-[18px] font-normal leading-[1.45] tracking-[-0.2px] text-[#1D1D1F]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
