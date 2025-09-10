import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { SectionOne } from "../components/SectionOne"
import { SectionThree } from "../components/SectionThree"
import { SectionTwo } from "../components/SectionTwo"

export const AboutUs = () => {
    return (
        <div className="w-[100%] min-h-[100vh]">
           <Navbar />
           <HeroSection />
           <SectionOne /> 
           <SectionTwo />
           <SectionThree />
        </div>
    )
}