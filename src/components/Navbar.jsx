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
      className={`w-[100%] h-[83px] flex justify-between items-center px-[5px] sm:px-[50px] z-[1000] fixed top-0 left-0 ${
        isScrolled ? "bg-white/10 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div>
        <img src={logo} alt="Logo" className="h-[50px]" />
      </div>
      <div className="hidden sm:flex gap-3">
        <button className="border-2 border-solid border-gray-400 p-3 rounded-3xl w-[100px] text-white cursor-pointer">
          LogIn
        </button>
        <button className="border-2 border-solid border-gray-400 p-3 rounded-3xl w-[100px] text-white bg-gradient-to-b from-[#7C7C7C] via-[#413F42] to-[#201F21] cursor-pointer">
          SignUp
        </button>
      </div>
      <div className="sm:hidden">
        <button className="border-2 border-solid border-gray-400 p-3 rounded-3xl w-[100px] text-white bg-gradient-to-b from-[#7C7C7C] via-[#413F42] to-[#201F21] cursor-pointer">
          Register
        </button>
      </div>
    </div>
  );
};
