import { FaTelegramPlane } from "react-icons/fa";
import Navbar from "../components/Navbar";
export default function HeroSection() {
  return (
    <section className="w-full  bg-[radial-gradient(ellipse_at_center,_#fff3c4_0%,_#ffffff_100%)]  px-4 text-center">
      
      <Navbar />
      <div className="max-w-4xl py-8 mx-auto flex flex-col justify-center items-center">
        <h1 className="text-[70px] md:text-5xl amiri-bold text-[#003049] leading-tight">
          Empowering Muslim Students <br />
          in Tech-Innovate with Faith
        </h1>

        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <p className="text-gray-500 text-sm mt-1">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        </p>

      
        <div className="flex justify-center items-center gap-2 mt-6">
          
          <img src="circles.png" alt="Top Speakers" className="w-15 h-8 mb-1" />
          <span className="text-sm text-gray-700">Meet our core team members</span>
        </div>


        <button className="mt-6 px-6 py-3 cursor-pointer border-2 border-[#003049] text-[#003049] rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#003049] hover:text-white transition">
          Become part of <span className="font-bold">Nejm</span>
          <FaTelegramPlane />
        </button>

        <div className="grid grid-cols-2 sm:grid-cols-4 p-6 px-20 gap-4 mt-12 text-sm text-[#003049] w-full font-medium bg-[rgb(255,254,254)] ">
          <div className="flex flex-col items-center">
            <img src="speaker.png" alt="Top Speakers" className="w-8 h-8 mb-1" />
            Top Speakers
          </div>
          <div className="flex flex-col items-center">
            <img src="guidance.png" alt="Expert Guidance" className="w-8 h-8 mb-1" />
            Expert Guidance
          </div>
          <div className="flex flex-col items-center">
            <img src="community.png" alt="Strong Community" className="w-8 h-8 mb-1" />
            Strong Community
          </div>
          <div className="flex flex-col items-center">
            <img src="support.png" alt="Ongoing Support" className="w-8 h-8 mb-1" />
            Ongoing Support
          </div>
        </div>
      </div>
    </section>
  );
}
