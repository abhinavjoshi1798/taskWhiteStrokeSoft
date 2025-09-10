export const HeroSection = () => {
  return (
    <div className="relative w-[100%] h-[600px] flex justify-center items-center my-[-83px] bg-[#0A0A0B] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600 opacity-40 blur-[120px]"></div>
        <div className="absolute top-[-30%] left-[35%] w-[500px] h-[500px] rounded-full bg-purple-400 opacity-40 blur-[120px]"></div>
        <div className="absolute top-[-20%] left-[55%] w-[500px] h-[500px] rounded-full bg-pink-400 opacity-40 blur-[120px]"></div>
      </div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-white text-3xl sm:text-[50px] font-bold mb-4">
          About Us
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-xs sm:max-w-2xl mx-auto">
          Welcome to [Your Website Name], the ultimate platform connecting
          influencers and brands! Our mission is to bridge the gap between
          creators and businesses, fostering meaningful collaborations that
          drive success for both parties.
        </p>
      </div>
    </div>
  );
};
