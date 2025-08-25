"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const TeamSwiper = () => {
  return (
    <div className="w-full bg-black/1 flex items-center py-10  mx-auto px-4 ">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        className=" pt-5  swiper-team flex" // 👈
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3.5 },
        }}
      >
        {/* Card 1 */}
        <SwiperSlide className=" py-3   ">
          <div className="bg-white  rounded-2xl w-[315px] shadow-lg  p-5 flex flex-col justify-between mx-auto">
            <div className="text-center space-y-4">
              <FontAwesomeIcon
                className="text-[50px] text-[#DFAD3B] lg:text-[73px] h-[50px] lg:h-[73px]"
                icon={faUserTie}
              />
              <p className="tajawal text-[#E6C069] font-extrabold">Team 1</p>
            </div>
            <div className="py-5 text-center space-y-2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="bg-[#DFAD3B] w-max px-2 mx-auto text-white w-[315px] py-1 rounded-md">
              Join Now
            </button>
          </div>
        </SwiperSlide>

        {/* Card 2 */}
        <SwiperSlide className="w-[315px] py-3 ">
          <div className="bg-white w-[315px]  rounded-2xl  shadow-lg p-5 flex flex-col justify-between mx-auto">
            <div className="text-center space-y-4">
              <FontAwesomeIcon
                className="text-[50px] text-[#DFAD3B] lg:text-[73px] h-[50px] lg:h-[73px]"
                icon={faUserTie}
              />
              <p className="tajawal text-[#E6C069] font-extrabold">Team 2</p>
            </div>
            <div className="py-5 text-center space-y-2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="bg-[#DFAD3B] w-max px-2 mx-auto text-white w-[315px] py-1 rounded-md">
              Join Now
            </button>
          </div>
        </SwiperSlide>

        {/* Card 3 */}
        <SwiperSlide className="w-[315px] py-3 ">
          <div className="bg-white w-[315px] rounded-2xl  shadow-lg p-5 flex flex-col justify-between mx-auto">
            <div className="text-center space-y-4">
              <FontAwesomeIcon
                className="text-[50px] text-[#DFAD3B] lg:text-[73px] h-[50px] lg:h-[73px]"
                icon={faUserTie}
              />
              <p className="tajawal text-[#E6C069] font-extrabold">Team 3</p>
            </div>
            <div className="py-5 text-center space-y-2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="bg-[#DFAD3B] w-max px-2 mx-auto text-white w-[315px] py-1 rounded-md">
              Join Now
            </button>
          </div>
        </SwiperSlide>

        {/* Card 4 */}
        <SwiperSlide className="w-[315px] py-3 ">
          <div className="bg-white w-[315px] rounded-2xl shadow-lg p-5 flex flex-col justify-between mx-auto">
            <div className="text-center space-y-4">
              <FontAwesomeIcon
                className="text-[50px] text-[#DFAD3B] lg:text-[73px] h-[50px] lg:h-[73px]"
                icon={faUserTie}
              />
              <p className="tajawal text-[#E6C069] font-extrabold">Team 4</p>
            </div>
            <div className="py-5 text-center space-y-2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="bg-[#DFAD3B] w-max px-2 mx-auto text-white w-[315px] py-1 rounded-md">
              Join Now
            </button>
          </div>
        </SwiperSlide>

        {/* Card 5 */}
        <SwiperSlide className=" py-3 ">
          <div className="bg-white w-[315px] rounded-2xl  shadow p-5 flex flex-col justify-between mx-auto">
            <div className="text-center space-y-4">
              <FontAwesomeIcon
                className="text-[50px] text-[#DFAD3B] lg:text-[73px] h-[50px] lg:h-[73px]"
                icon={faUserTie}
              />
              <p className="tajawal text-[#E6C069] font-extrabold">Team 5</p>
            </div>
            <div className="py-5 text-center space-y-2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="bg-[#DFAD3B] w-max px-2 mx-auto text-white w-[315px] py-1 rounded-md">
              Join Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TeamSwiper;
