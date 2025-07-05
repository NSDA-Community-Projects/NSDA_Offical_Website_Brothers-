import teamsData from "../data/teamsData";
import TeamCard from "./TeamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const TeamSection = () => {
  return (
    <section>
      <div className="bg-[#DFAD3B] text-center w-[1600px] mx-auto  px-4">
        <h2 className=" font-bold text-[#023665] font-tajawal text-[48px] leading-[100%] tracking-[0em]">
          Meet Our Teams
        </h2>
        <p className="color-[#010B40] font-nunito text-center text-lg md:text-xl font-normal leading-none px-4 py-2 rounded-md max-w-[736px] mx-auto">
          Get to know our core teams, their roles and how to become a member
        </p>
      </div>

      <div className="bg-[#f6f1ed]  px-4 py-12 rounded-[15px] w-[1610px] md:max-w-[1610px] mx-auto ">
        <div className="flex flex-wrap justify-center gap-6">
          {teamsData.map((team, index) => (
            <TeamCard key={index} {...team} />
          ))}
        </div>
        <div className="items-center">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "dot",
              bulletActiveClass: "dot-active",
            }}
            className="w-full"
          >
            {[1, 2, 3, 4, 5].map((slide, i) => (
              <SwiperSlide key={i}></SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center gap-[14px] mt-5 "></div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
