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
                        <div className="text-sm  py-3">
                            <h3 className="text-gray-500">Watch Now</h3>
                            <p className="font-semibold mt-2">{image.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default ImageCarousel;
