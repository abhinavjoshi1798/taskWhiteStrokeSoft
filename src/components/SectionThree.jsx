export const SectionThree = () => {
  return (
    <section
      className="w-[100%] bg-[#0A0A0B] py-16 px-6 md:px-20
        overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
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
      </div>
    </section>
  );
};
