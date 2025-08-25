import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardItem = ({ icon, title }) => (
  <div className="bg-[#DFAD3B] rounded-[15px] flex flex-col gap-5 shadow-sm min-h-[260px] hover:scale-105 duration-200 ">
    <div className="bg-[#023665] w-[88px] h-[80px] flex items-center justify-center rounded-br-[50px] rounded-tl-[15px] rounded-tr-[5px] rounded-bl-[5px]">
      <FontAwesomeIcon className="text-[45px] text-white" icon={icon} />
    </div>
    <div className="px-4 pb-4 pt-0 flex flex-col gap-4 nunito">
      <h1 className="text-[24px] font-[700] text-[#023665]">{title}</h1>
      <p className="font-[400] text-[15px] text-[#010B40]">
        Mention that the codes made are made open source as sedeqa jariya, this
        connects with faith. et velit interdum, ac aliquet odio mattis. Class
        aptent taciti sociosqu ad litora torquent per
      </p>
      <button className="text-white font-[600] text-[15px]">
        <span className="underline">Join Now</span> →
      </button>
    </div>
  </div>
);
