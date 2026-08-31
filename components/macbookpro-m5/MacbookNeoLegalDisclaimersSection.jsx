const disclaimers = [
  {
    title: "Power and Battery:",
    body: "Up to 24 hours of battery life applies to MacBook Pro with M5 and the 16\" MacBook Pro with M4 Pro. Battery life for Apple TV app movie playback. Battery life varies by use and configuration. See apple.com/in/batteries for more information.",
  },
  {
    title: "Apple Intelligence:",
    body: "Available in beta. Some features may not be available in all regions or languages. For feature and language availability and system requirements, see support.apple.com/en-in/121115.",
  },
  {
    title: "Display:",
    body: "Screen size is measured diagonally. Actual diagonal screen size of the 24\" iMac is 59.69 cm (23.5\"). The displays on MacBook Air with the M1 chip and the 13\" MacBook Pro measure 33.74 cm (13.3\") diagonally. The displays on the 13\" MacBook Air with M2 or M3, the 15\" MacBook Air, and the 14\" MacBook Pro and 16\" MacBook Pro have rounded corners at the top. When measured as a standard rectangular shape, the screens are 34.46 cm (13.6\"), 38.91 cm (15.3\"), 35.97 cm (14.2\") and 41.05 cm (16.2\") diagonally (actual viewable area is less).",
  },
  {
    title: "Thunderbolt:",
    body: "Port configuration varies by model.",
  },
  {
    title: "Wi-Fi 6E:",
    body: "Wi-Fi 6E is available in countries and regions where supported.",
  },
  {
    title: "AI Performance (86x Faster):",
    body: "Testing conducted by Apple in September 2025 using pre-production 14\" MacBook Pro systems with Apple M5 and Intel-based MacBook Pro systems. AI performance tested with Adobe Premiere Pro (Beta). Performance tests reflect approximate performance.",
  },
  {
    title: "Battery Improvement (14 Hours More):",
    body: "Testing conducted by Apple in September 2025 using pre-production 14\" MacBook Pro systems with Apple M5. Wireless web and video streaming tests performed under controlled conditions. Battery life varies by use and configuration.",
  },
  {
    title: "Performance (7.8x Faster):",
    body: "Testing conducted by Apple between August and October 2024 comparing M4 Max MacBook Pro with Intel-based MacBook Pro (2019). Performance tests reflect approximate results.",
  },
  {
    title: "Battery Improvement (11 Hours More):",
    body: "Testing conducted by Apple between August and October 2024 comparing M4 Max MacBook Pro systems. Battery life varies depending on usage and configuration.",
  },
  {
    title: "AI Performance (6x Faster than M1):",
    body: "Testing conducted by Apple in September 2025 using pre-production M5 systems and previous-generation MacBook Pro systems. Performance reflects approximate results.",
  },
  {
    title: "Performance (3.5x Faster than M1 Max):",
    body: "Testing conducted by Apple between August and October 2024 comparing M4 Max and M1 Max MacBook Pro systems. Results are approximate.",
  },
  {
    title: "Storage:",
    body: "1GB = 1 billion bytes and 1TB = 1 trillion bytes; actual formatted capacity is less.",
  },
  {
    title: "Accessories:",
    body: "Accessories are sold separately; availability varies by region.",
  },
  {
    title: "Touch ID:",
    body: "Magic Keyboard with Touch ID is included with select iMac models and available as an option on others.",
  },
  {
    title: "Feature, App and Service Availability:",
    body: "Features are subject to change. Some features, applications and services may not be available in all regions or languages.",
  },
  {
    title: "App Store:",
    body: "Apps are available on the App Store.",
  },
  {
    title: "Display Brightness:",
    body: "Up to 1,600 nits peak brightness in temperatures less than 25° C.",
  },
  {
    title: "Mac and iPhone:",
    body: "Requires iCloud and internet connection. iPhone Mirroring requires compatible devices, same Apple Account with two-factor authentication, and Bluetooth/Wi-Fi enabled. Some features may not be supported.",
  },
  {
    title: "FaceTime:",
    body: "FaceTime calling requires compatible devices and Wi-Fi. Cellular availability depends on carrier policies; data charges may apply.",
  },
  {
    title: "LiDAR Data Visualisation:",
    body: "Aerial LiDAR data rendered using MATLAB® from Tuscaloosa dataset. Licensed under CC BY 4.0 and BSD-2-Clause License.",
  },
];

export default function MacbookNeoLegalDisclaimersSection() {
  return (
    <section className="bg-white px-4 pb-20 pt-4 sm:px-6 lg:px-20">
      <div className="mx-auto max-w-[1200px] pt-2">
        <h2 className="text-[12px] font-normal leading-[1.33337] tracking-[-0.12px] text-[#6E6E73]">
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
