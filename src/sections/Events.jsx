"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const RecentEvents = () => {
  return (
    <section
      id="Event"
      className="pl-6 lg:flex gap-[50px] md:pl-12 lg:pl-[56px] py-[10rem] "
    >
      {/* Header */}
      <div className="max-w-[400px] relative mb-12">
        <div className="w-[75px] top-[40%] absolute h-[0.5rem] bg-[#023665]" />
        <h1 className="text-[#023665] leading-tight tajawal text-4xl md:text-5xl lg:text-[62px] font-bold">
          Recent Events
        </h1>
        <p className="nunito font-[500]  py-5 text-base md:text-lg">
          Amazing moments await. Secure your spot and stay in the loop!
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Mousewheel]}
        pagination={{ clickable: true }}
        mousewheel={true}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 2.3 },
        }}
        className="pb-16"
      >
        {/* Slide 1 */}
        <SwiperSlide className="w-[324px]">
          <div className="h-[400px] relative shadow-lg  overflow-hidden bg-transparent">
            <img
              src="/img/Event1.jpg"
              alt="Event 1"
              className="h-[100%] w-full object-cover"
            />
            <div className="p-4 text-center absolute bottom-0 bg-white/20 left-0 right-0  z-40">
              <p className="text-[#B18013] font-bold">Event One</p>
              <p className="text-gray-600 text-sm leading-tight">
                A short description about Event one.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="w-[324px]">
          <div className="h-[400px] relative shadow-lg  overflow-hidden bg-transparent">
            <img
              src="/img/Event2.png"
              alt="Project 2"
              className="h-[100%] w-full object-cover"
            />
            <div className="p-4 text-center absolute bottom-0 bg-white/50 left-0 right-0 ">
              <p className="text-[#B18013] font-bold">Event Two</p>
              <p className=" text-sm leading-tight">
                A short description about Event two.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="w-[324px]">
          <div className="h-[400px] relative shadow-lg  overflow-hidden bg-white">
            <img
              src="/img/Event3.png"
              alt="Project 3"
              className="h-[100%] w-full object-cover"
            />
            <div className="p-4 text-center absolute bottom-0 bg-black/50 left-0 right-0  text-white">
              <p className="text-[#B18013] font-bold">Event Three</p>
              <p className="text-white text-sm leading-tight">
                A short description about Event three.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide className="w-[324px]">
          <div className="h-[400px] relative shadow-lg  overflow-hidden bg-white">
            <img
              src="/img/Event4.png"
              alt="Project 4"
              className="h-[100%] w-full object-cover"
            />
            <div className="p-4 text-center absolute bottom-0 bg-black/50 left-0 right-0 ">
              <p className="text-[#B18013] font-bold">Event Four</p>
              <p className="text-white text-sm leading-tight">
                A short description about Event four.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default RecentEvents;
