import React, { useState } from "react";

const EventsCards = ({events, currentIndex}) => {

    return (
        <>
            <div className="relative overflow-X-hidden md:overflow-hidden w-full">
                <div className="flex gap-4 transition-transform duration-300 h-full text-sm"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / 5)}%)`,
                        width: `${(events.length * 100) / 5}%`,
                    }}>

                    {
                        events.map((event, i) => (
                            <div key={i} className="w-1/3 shrink-0 h-full">
                                <img src={event.image} alt="Event Image" className="h-[70%] w-full object-cover" />
                                <button className="py-4">Watch Now</button>
                                <p className="font-semibold">{event.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default EventsCards;