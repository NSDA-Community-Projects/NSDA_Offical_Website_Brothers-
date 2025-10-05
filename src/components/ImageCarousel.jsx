import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageCarousel = ({ slides, onSlideChange, navigationRef }) => {
    return (
        <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={(swiper) => {
            onSlideChange(swiper.activeIndex + 1);
        }}
        onInit={(swiper) => {
            navigationRef.current = swiper;
        }}
        className="w-full"
        >
            {
                slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div className="overflow-hidden rounded-2xl shadow-md">
                    <img src={slide.img} alt={slide.name} className="w-full h-48 object-cover" />
                    <div className="p-3 bg-white">
                        <h3 className="font-semibold">{slide.name}</h3>
                        <p className="text-sm text-gray-500">{slide.desc}</p>
                    </div>
                    </div>
                </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default ImageCarousel;
