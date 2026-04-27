const disclaimers = [
  {
    title: "Accessories:",
    body: "Accessories are sold separately; availability varies by region.",
  },
  {
    title: "Apple Arcade:",
    body: "Apple Arcade requires a subscription.",
  },
  {
    title: "Apple Intelligence:",
    body: "Available in beta. Some features may not be available in all regions or languages.",
  },
  {
    title: "Display:",
    body: 'Screen size is measured diagonally. The displays on the 13" MacBook Neo, 13" and 15" MacBook Air, and 14" and 16" MacBook Pro have rounded corners at the top; actual viewable area is less.',
  },
  {
    title: "FaceTime:",
    body: "FaceTime calling requires a FaceTime-enabled device for the caller and recipient, and a Wi-Fi connection.",
  },
  {
    title: "Feature, App and Service Availability:",
    body: "Features are subject to change. Some features, applications and services may not be available in all regions or languages.",
  },
  {
    title: "iPhone Mirroring:",
    body: "Available on supported Mac computers with Apple silicon or Intel models with a T2 Security Chip. Requires the same Apple Account with two-factor authentication, Bluetooth and Wi-Fi enabled, and supported continuity conditions.",
  },
  {
    title: "Power and Battery:",
    body: "Battery life varies by use and configuration. See apple.com/in/batteries for more information.",
  },
  {
    title: "Storage:",
    body: "1GB = 1 billion bytes and 1TB = 1 trillion bytes; actual formatted capacity is less.",
  },
  {
    title: "Touch ID:",
    body: "Magic Keyboard with Touch ID availability varies by iMac configuration.",
  },
];

export default function MacbookNeoLegalDisclaimersSection() {
  return (
    <section className="bg-white px-4 pb-20 pt-4 sm:px-6 lg:px-20">
      <div className="mx-auto max-w-[1200px] pt-2">
        <h2 className="text-[20px] font-normal leading-[1.33337] tracking-[-0.12px] text-[#6E6E73]">
          &#9674;Legal Disclaimers
        </h2>

        <ul className="mt-4 space-y-[10px] text-[12px] font-normal leading-[1.33337] tracking-[-0.12px] text-[#6E6E73]">
          {disclaimers.map((item) => (
            <li key={item.title}>
              <span>{item.title} </span>
              <span>{item.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
