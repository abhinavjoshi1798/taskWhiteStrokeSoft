import rightHalfImage from "../assets/section2Img.png";

export const SectionTwo = () => {
  return (
    <section
      className="w-[100%] bg-[#0A0A0B] py-16 px-6 md:px-20
        overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <p className="w-fit  text-[20px] font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#2AEBEB] via-[#6174FF] via-[#B63CFB] to-[#FF47E3]">
            Why Choose Us
          </p>
          <h2 className="text-[25px] md:text-[32px] text-white leading-snug mb-4 font-semibold">
            CreatorWRK because we're
            <br />
            More than just a platform <br /> Meet Together
          </h2>
          <p className="text-gray-400 text-base font-normal max-w-xl mx-auto md:mx-0">
            We're a catalyst for meaningful connections and collaborations. With
            a user-friendly interface and a commitment to fostering genuine
            interactions, we empower business owners and influencers alike to
            thrive in a dynamic marketplace.
          </p>
        </div>
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-[100%] h-[100%]  flex items-center justify-center">
            <img
              src={rightHalfImage}
              alt="About us"
              className="object-cover w-full h-full rounded-full max-w-[800px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
