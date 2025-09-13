import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-[1000] ${
        isScrolled ? "bg-white/10 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-[83px] px-6 md:px-20">
        <div className="w-fit">
          <img src={logo} alt="Logo" className="h-[50px]" />
        </div>

        <div className="hidden sm:flex gap-3">
          <button className="border-2 border-gray-400 p-3 rounded-3xl w-[100px] text-white cursor-pointer">
            LogIn
          </button>
          <button className="border-2 border-gray-400 p-3 rounded-3xl w-[100px] text-white bg-gradient-to-b from-[#7C7C7C] via-[#413F42] to-[#201F21] cursor-pointer">
            SignUp
          </button>
        </div>

        <div className="sm:hidden">
          <button className="border-2 border-gray-400 p-3 rounded-3xl w-[100px] text-white bg-gradient-to-b from-[#7C7C7C] via-[#413F42] to-[#201F21] cursor-pointer">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
