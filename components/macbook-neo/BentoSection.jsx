import Image from "next/image";

export default function BentoSection() {
  return (
    <section className="bg-[#fff] py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="mb-12 rounded-[28px] bg-[#F5F5F7] px-6 pt-10 text-center md:px-10 md:pt-14">
          <Image
            src="assets/logoneo.png"
            alt="MacBook Neo"
            width={240}
            height={44}
            className="mx-auto h-auto w-full max-w-[150px] md:max-w-[260px]"
            priority
          />
          <h1 className="mt-2 text-[48px] font-semibold leading-[0.95] tracking-[-2px] text-[#1D1D1F] md:text-[72px]">
            Hello, Neo.
          </h1>
          <div className="mt-8 md:mt-10">
            <Image
              src="/assets/hero section.png"
              alt="MacBook Neo hero"
              width={900}
              height={700}
              className="mx-auto h-auto w-full max-w-[760px]"
              priority
            />
          </div>
        </div>
        <p className="text-center px-4 text-[18px] xl:text-[24px] lg:text-[24px] sm:text-[24px] text-[#000] mb-12">
          Introducing MacBook Neo, an amazing Mac at a surprising price. From
          the durable aluminium design to the vivid detail of the Liquid Retina
          display. With advanced Al capabilities and Apple Intelligence built in
          and ready to go.' And all-day battery life to ake you from morning to
          night. It's a magical new way to fall head over heels with Mac, every
          day. Welcome to the family.{" "}
        </p>
        <p className="text-[17px] text-black text-center mb-12">
          Experience MacBook Neo Next-Gen Performance with{" "}
          <span className="text-[#A6CE39]">Connexions</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* 1 */}
          <div className="md:col-span-12 bg-[#f5f5f7] rounded-[28px] p-8 md:p-12">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="order-2 md:order-1 md:col-span-7">
                <Image
                  src="/assets/macbook-neo.png"
                  alt=""
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="order-1 md:order-2 md:col-span-5">
                <h3 className="text-[24px] md:text-[32px] text-center font-semibold leading-tight">
                  Four stunning colours. One durable design.
                </h3>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="md:col-span-12 bg-[#f5f5f7] rounded-[28px] ">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 p-8 md:p-12">
                <h3 className="text-[24px] md:text-[32px] text-center font-semibold leading-tight">
                  The muscle for your hustle.
                </h3>
                <p className="mt-3 text-[16px] md:text-[19px] text-center text-[#1d1d1f]">
                  Fly through everyday tasks and apps with the A18 Pro chip.
                </p>
              </div>
              <div className="md:col-span-6  ">
                <Image
                  src="assets/A18.png"
                  alt=""
                  width={800}
                  height={480}
                  className="w-full h-[480px] object-cover"
                />
              </div>
            </div>
          </div>
          {/* 4 + 5 */}
          {/* 3 */}
          <div className="md:col-span-6 bg-[#f5f5f7] rounded-[28px] p-0 md:p-0">
            <h3 className="text-[24px] p-8 md:text-[32px] text-center font-semibold mb-6">
              Brilliant 33.02 cm (13″) Liquid Retina display.◊
            </h3>
            {/* <Image
              src="assets/liquid.png"
              alt=""
              width={800}
              height={600}
              className="w-full h-auto pl-20 "
            /> */}
            <Image
              src="assets/liquid.png"
              alt=""
              width={800}
              height={260}
              className="w-full   pl-20"
            />
          </div>
          <div className="md:col-span-6 bg-[#f5f5f7] rounded-[28px] p-8 flex flex-col justify-center items-center">
            <h3 className="text-[24px] md:text-[32px] font-semibold leading-tight mb-8">
              No plug point? <br /> No worries.
            </h3>

            {/* <p className="text-gray-500 text-[17px]">Up to</p>
            <div className="text-[48px] font-semibold leading-none my-2">
              16 hours
            </div>
            <p className="text-gray-500 text-[17px]">of battery life.</p> */}
            <Image
              src="assets/BatteryInfo.png"
              alt="Battery Info"
              width={242}
              height={236}
              className="w-[242px] h-[236px] object-contain"
            />
          </div>

          {/* 6 */}
          {/* <div className="md:col-span-12 bg-[#f5f5f7] rounded-[28px] p-8 md:p-12">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6">
                <h3 className="text-[24px] md:text-[32px] font-semibold mb-6">
                  Vibrant video. Clear sound.
                </h3>

                <div className="space-y-4 text-[17px] text-gray-600">
                  <p>
                    <span className="font-medium text-black">
                      1080p FaceTime HD camera
                    </span>{" "}
                    captures crisp video.
                  </p>
                  <p>
                    <span className="font-medium text-black">
                      Two built-in microphones
                    </span>{" "}
                    enhance your voice.
                  </p>
                  <p>
                    <span className="font-medium text-black">
                      Dual speakers
                    </span>{" "}
                    deliver immersive sound.
                  </p>
                </div>
              </div>

              <div className="md:col-span-6">
                <Image
                  src="assets/Background (1).svg"
                  alt=""
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div> */}
          <div className="md:col-span-12 bg-[#f5f5f7] rounded-[28px] p-8 md:p-12">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6">
                <h3 className="text-[28px] md:text-[36px] font-semibold mb-6">
                  Add more clarity to meetings.
                </h3>

                <div className="space-y-6 text-[17px] text-gray-600">
                  {/* 1 */}
                  <div className="flex items-start gap-4">
                    <Image
                      src="assets/1080p_FaceTime_HD_camera_captures.svg"
                      alt=""
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px]"
                    />
                    <p>
                      <span className="font-medium text-black">
                        1080p FaceTime HD camera
                      </span>{" "}
                      captures crisp video.
                    </p>
                  </div>

                  {/* 2 */}
                  <div className="flex items-start gap-4">
                    <Image
                      src="assets/Two_built_in_microphones_isolate_and_enhance_your_voice.svg"
                      alt=""
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px]"
                    />
                    <p>
                      <span className="font-medium text-black">
                        Two built-in microphones
                      </span>{" "}
                      enhance your voice.
                    </p>
                  </div>

                  {/* 3 */}
                  <div className="flex items-start gap-4">
                    <Image
                      src="assets/Dual_side_firing_speakers_deliver_immersive_sound.svg"
                      alt=""
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px]"
                    />
                    <p>
                      <span className="font-medium text-black">
                        Dual speakers
                      </span>{" "}
                      deliver immersive sound.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-6">
                <Image
                  src="assets/ADDMORE.png"
                  alt=""
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-12 bg-[#f5f5f7] rounded-[28px] p-0">
            <Image
              src="assets/back.png"
              alt=""
              width={1000}
              height={420}
              className="w-full h-auto rounded-[20px] object-cover"
            />
          </div>

          {/* 7 */}
          <div className="md:col-span-6 bg-[#f5f5f7] rounded-[28px] p-0">
            <Image
              src="assets/Background (1).svg"
              alt=""
              width={600}
              height={400}
              className="rounded-[20px]"
            />
          </div>

          {/* 8 */}
          <div className="md:col-span-6 bg-[#f5f5f7] rounded-[28px] p-0">
            <Image
              src="assets/Background (2).svg"
              alt=""
              width={600}
              height={400}
              className="rounded-[20px] "
            />
          </div>

          {/* 9 */}
          <div className="md:col-span-12 bg-[#f5f5f7] rounded-[28px] p-8 md:p-12 pr-0 md:pr-0">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5">
                <h3 className="text-[24px] md:text-[32px] text-center font-semibold">
                  macOS. Simple and intuitive.
                </h3>
                <p className="mt-3 text-[16px] md:text-[19px] text-center text-[#1d1d1f]">
                  Access apps and files, neatly tile multiple windows and
                  control everything with ease.{" "}
                </p>
              </div>
              <div className="md:col-span-7 flex justify-end">
                {/* <Image
                  src="assets/macossimpleandintutive.png"
                  alt=""
                  width={800}
                  height={500}
                /> */}
                <Image
                  src="assets/macossimpleandintutive.png"
                  alt=""
                  width={410}
                  height={220}
                  className="w-[510px] h-[320px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* 10 */}
          <div className="md:col-span-6 bg-[#f5f5f7] rounded-[28px] p-0">
            <Image
              src="assets/macosapps.svg"
              alt=""
              width={600}
              height={600}
              className="rounded-[20px] w-full h-auto"
            />
          </div>

          {/* 11 */}
          <div className="md:col-span-6 bg-[#f5f5f7] rounded-[28px] p-0 text-center">
            <div className="p-8">
              <h3 className="text-[24px] md:text-[32px] text-center font-semibold">
                Mac + iPhone. Better together.
              </h3>
              <p className="mt-3 text-[16px] md:text-[19px] text-center text-[#1d1d1f]">
                Magically pairs with your iPhone to unlock even more
                features.{" "}
              </p>
            </div>
            <Image
              src="assets/maciphone.svg"
              alt=""
              width={430}
              height={400}
              className=" mb-0 p-0 mx-auto"
            />
          </div>

          {/* 12 */}
          <div className="md:col-span-12 bg-[#f5f5f7] rounded-[28px] ">
            <div className="grid md:grid-cols-12 gap-8 items-center">
        <div className="order-2 md:order-1 md:col-span-5 pt-5">
  <Image
    src="assets/No_compromises.png"
    alt=""
    width={390}
    height={340}
    className="w-[368px] h-[320px] object-contain rounded-[20px]"
  />
</div>

              
              <div className="order-1 md:order-2 md:col-span-7 p-8 md:p-12">
  <h3 className="text-[24px] md:text-[32px] font-semibold mb-6">
    No compromises.
  </h3>

  <div className="space-y-6 text-[16px] md:text-[19px] text-[#1d1d1f]">

    {/* 1 */}
    <div className="flex items-start gap-4">
      <Image
        src="assets/Antivirusprotection.svg"
        alt=""
        width={40}
        height={40}
        className="w-[40px] h-[40px]"
      />
      <p>
        <span className="font-medium text-black">
          Antivirus protection.
        </span>{" "}
        MacBook Neo has free, built-in antivirus protections and automatic security updates.
      </p>
    </div>

    {/* 2 */}
    <div className="flex items-start gap-4">
      <Image
        src="assets/AutomaticupdatesGet.svg"
        alt=""
        width={40}
        height={40}
        className="w-[40px] h-[40px]"
      />
      <p>
        <span className="font-medium text-black">
          Automatic updates.
        </span>{" "}
        Get the latest, safest system software to keep you ahead of threats.
      </p>
    </div>

    {/* 3 */}
    <div className="flex items-start gap-4">
      <Image
        src="assets/LockKeyorTouchID.svg"
        alt=""
        width={40}
        height={40}
        className="w-[40px] h-[40px]"
      />
      <p>
        <span className="font-medium text-black">
          Lock Key or Touch ID.
        </span>{" "}
        Wake, lock, and unlock your Mac securely using key or fingerprint.
      </p>
    </div>

  </div>
</div>

            </div>
          </div>
          {/* 13 */}
          {/* smoother */}
            <div className="md:col-span-12 bg-[#f5f5f7] rounded-[28px] ">
            <div className="grid md:grid-cols-12 gap-8 items-center">
                
              <div className="md:col-span-7 p-8 md:p-12">
  <h3 className="text-[24px] md:text-[32px] font-semibold mb-6">
  Smoother workflow.
At your fingertips.
  </h3>

  <div className="space-y-6 text-[16px] md:text-[19px] text-[#1d1d1f]">

   <div className="space-y-6 text-[16px] md:text-[19px] text-[#1d1d1f]">

    {/* 1 */}
    <div className="flex items-start gap-4">
      <Image
        src="assets/workflow.png"
        alt=""
        width={40}
        height={40}
        className="w-[40px] h-[40px]"
      />
      <p>
       
       Multi-Touch trackpad makes it easy to
scroll, swipe and tap through your work.
      </p>
    </div>

    {/* 2 */}
    <div className="flex items-start gap-4">
      <Image
        src="assets/keyboard.png"
        alt=""
        width={40}
        height={40}
        className="w-[40px] h-[40px]"
      />
      <p>
        Magic Keyboard incorporates a precise
and comfortable typing experience into
your daily work stream.
      </p>
    </div>

  

  </div>

  </div>
</div>
        <div className="md:col-span-5 pb-0 md:pb-10 lg-pb-10 xl:pb-10 sm:pb-10 pl-10 md:pl-10 lg-pl-10 xl:pl-10 sm:pl-10">
  <Image
    src="assets/smootheer.svg"
    alt=""
    width={390}
    height={340}
    className="w-full h-auto object-contain"
  />
</div>

            

            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
}
