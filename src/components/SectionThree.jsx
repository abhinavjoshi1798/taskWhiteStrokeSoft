import rightImg from "../assets/rightimg.png";
import leftImg from "../assets/leftImg.png";
import lineIcon from "../assets/lineIcon.png";
import s3ri from "../assets/s3ri.png";

export const SectionThree = () => {
  return (
    <section
      className="w-[100%] bg-[#0A0A0B] py-16 px-6 md:px-20
        overflow-hidden pb-[200px]"
    >
      <div className="w-[80%] md:hidden">
        <img src={leftImg} className="size-cover w-[full] h-[full]" />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 relative">
        <div className="absolute w-[100vw] h-[200px] hidden md:flex justify-between items-center">
          <div className="w-[200px] h-[200px] ">
            <img src={leftImg} className="size-cover w-[full] h-[full]" />
          </div>
          <div className="w-[200px] h-[200px]">
            <img src={rightImg} className="size-cover w-[full] h-[full]" />
          </div>
        </div>

        <div className="mx-auto text-center">
          <h2 className="text-[25px] md:text-[32px] text-white leading-snug mb-6 font-semibold">
            What We Offer to
          </h2>
          <div className="flex items-center justify-center bg-transparent rounded-full border border-gray-700 p-1">
            <button className="px-6 py-2 rounded-full bg-white text-black font-semibold text-[16px]">
              Business owner
            </button>
            <button className="px-6 py-2 rounded-full text-gray-400 font-semibold text-[16px]">
              Influencer
            </button>
          </div>
        </div>

        <div className="w-[100%] h-[100%] flex flex-col-reverse md:flex-row items-center gap-3">
          <div className="flex flex-col gap-3 w-[80%] md:w-[50%]">
            <div className="flex gap-2 items-center">
              <img src={lineIcon} className="w-[18px] h-[18px]" />{" "}
              <p className="text-white text-[20px]">
                Outline the benefits for business owners
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={lineIcon} className="w-[18px] h-[18px]" />{" "}
              <p className="text-white text-[20px]">
                Access to a diverse pool of influencers
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={lineIcon} className="w-[18px] h-[18px]" />{" "}
              <p className="text-white text-[20px]">
                Ability to create job posts detailing their requirements.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={lineIcon} className="w-[18px] h-[18px]" />{" "}
              <p className="text-white text-[20px]">
                Platform for initiating and managing conversations with
                influencers.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={lineIcon} className="w-[18px] h-[18px]" />{" "}
              <p className="text-white text-[20px]">
                Opportunity to leverage influencer marketing for brand promotion
                and growth.
              </p>
            </div>
          </div>
          <div className="flex w-[80%] md:w-[50%]">
            <img src={s3ri} className="w-[80%] h-[80%]" />
          </div>
        </div>
      </div>
      <div className="w-[80%] float-right  md:hidden relative">
        <img
          src={rightImg}
          className="size-cover w-[full] h-[full] float-right"
        />
      </div>
    </section>
  );
};
