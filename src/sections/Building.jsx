import {
  faDisplay,
  faCode,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import { FaTelegramPlane } from "react-icons/fa";
import { CardItem } from "../components/CardItems";

const Building = () => {
  return (
    <div className="py-20">
      <div className="text-center">
        <h1 className="tajawal font-[700] text-[46px] text-[#023665]">
          What We’re Building
        </h1>
        <p className="text-[18px] text-[#010B40] nunito font-[400]">
          Unlock a world of opportunities and accelerate your journey with us
        </p>
      </div>

      {/* Responsive container for cards */}
      <div className="mx-4 mt-12 relative  border-[#121E5D] border-2 rounded-[15px] p-6 py-10 lg:p-8 lg:py-16 bg-transparent">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardItem icon={faDisplay} title="Sadaqah jariyah" />
          <CardItem icon={faCode} title="Nujum Al-code" />
          <CardItem icon={faPersonChalkboard} title="Mentorship" />
          <CardItem icon={faDisplay} title="Muslim Dev" />
        </div>

        {/* Floating badge stays within flow on all screen sizes */}
        <div className="max-w-[280px] hover:scale-105 duration-500 -bottom-[2%] md:-bottom-[5%] left-[25%] lg:left-[40%] text-white bg-[#121E5D]  rounded-xl text-center text-[19px] nunito mt-10  mx-auto sm:m-0 sm:absolute">
          <p className="px-7 text-[20px] py-2">
            Become part of{" "}
            <span className="font-extrabold">
              Nejm <FaTelegramPlane className="inline-block text-[#DFAD3B]" />{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Building;
