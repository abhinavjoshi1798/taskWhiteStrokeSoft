import rightHalfImage from "../assets/rhs1.png";
import sectionOneSideImg from "../assets/sectionOneSideImg.png";

export const SectionOne = () => {
  return (
    <section
      className="w-[100%]  bg-[#0A0A0B] py-16 px-6 md:px-20 mt-[80px]
    overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <p className="w-fit  text-[20px] font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#2AEBEB] via-[#6174FF] via-[#B63CFB] to-[#FF47E3]">
            About us
          </p>
          <h2 className="text-[25px] md:text-[32px] text-white leading-snug mb-4 font-semibold">
            The Ultimate Hub Where <br />
            Business Owners And Influencers <br /> Meet Together
          </h2>
          <p className="text-gray-400 text-base font-normal max-w-xl mx-auto md:mx-0">
            Welcome to CREATORWRK, where the worlds of business and influence
            converge. Our platform offers a seamless space for business owners
            to post job opportunities and for influencers to engage directly
            with these opportunities.
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
      <div className="absolute w-[400px] h-[500px] top-[20%] left-[-11%] rotate-348">
        <img
          src={sectionOneSideImg}
          width={400}
          height={400}
          alt="sideimg"
          className="object-cover w-full h-full rounded-full"
        />
      </div>
    </section>
  );
};
