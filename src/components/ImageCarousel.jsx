import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageCarousel = ({ eventImages, onSlideChange, navigationRef }) => {
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
        className="w-full h-[502px]"
        >
            {
                eventImages.map((image, i) => (
                <SwiperSlide key={i}>
                    <div className="h-full">
                        <img src={image.image} alt="Carousel Image" className="w-[360px] h-[420px] object-cover" />
                        <div className="p-3 bg-white">
                            <h3 className="font-semibold">Watch Now</h3>
                            <p className="text-sm text-gray-500">{image.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default ImageCarousel;
