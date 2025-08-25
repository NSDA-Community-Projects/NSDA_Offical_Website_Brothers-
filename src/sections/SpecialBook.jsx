import { FaHeadphonesAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignsPost,
  faPeopleGroup,
  faHeadset,
  faMicrophoneLines,
} from "@fortawesome/free-solid-svg-icons";

const SpecialBook = () => {
  return (
    <div className="flex flex-wrap  sm:flex-nowrap py-4 sm:py-0 items-center shadow-lg  justify-between px-[2rem] px-md:[100px] lg:px-[219px] sm:h-[128px] gap-[2rem] lg:gap-[75px]">
      {/*  */}
      <div className="flex flex-wrap text-center text-nowrap items-center gap-[6px]">
        <div className="w-[48px]  flex-wrap h-[48px] bg-[#DFAD3B] rounded-full flex items-center justify-center text-white ">
          <FontAwesomeIcon icon={faMicrophoneLines} />
        </div>
        <p className="text-black text-[13px] font-[700] tajawal">
          Top Speakers
        </p>
      </div>

      {/*  */}
      <div className="flex flex-wrap text-center text-nowrap items-center gap-[6px]">
        <div className="w-[48px] h-[48px] bg-[#DFAD3B] rounded-full flex items-center justify-center text-white">
          <FontAwesomeIcon icon={faSignsPost} />
        </div>
        <p className="text-black text-[13px] font-[700] tajawal">
          Expert Guidance
        </p>
      </div>
      {/*  */}
      <div className="flex flex-wrap text-center text-nowrap items-center gap-[6px]">
        <div className="w-[48px] h-[48px] bg-[#DFAD3B] rounded-full flex items-center justify-center text-white">
          <FontAwesomeIcon icon={faPeopleGroup} />
        </div>
        <p className="text-black text-[13px] font-[700] tajawal">
          Strong Community
        </p>
      </div>

      {/*  */}
      <div className="flex flex-wrap text-center text-nowrap items-center gap-[6px]">
        <div className="w-[48px] h-[48px] bg-[#DFAD3B] rounded-full flex items-center justify-center text-white">
          <FontAwesomeIcon icon={faHeadset} />
        </div>
        <p className="text-black text-[13px] font-[700] tajawal">
          Ongoing Support
        </p>
      </div>
    </div>
  );
};

export default SpecialBook;
