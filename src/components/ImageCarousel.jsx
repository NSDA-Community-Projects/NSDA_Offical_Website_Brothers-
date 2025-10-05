import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const EventsCards = ({ events }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
        >
            {events.map((event, i) => (
                <SwiperSlide key={i}>
                    <img
                        src={event.image}
                        alt="Event"
                        className="h-[70%] w-full object-cover"
                    />
                    <button className="py-4">Watch Now</button>
                    <p className="font-semibold">{event.description}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default EventsCards;
