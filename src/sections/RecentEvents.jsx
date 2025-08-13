import React, { useState } from "react";
import EventTitle from "../components/EventTitle";
import EventButtons from "../components/EventButtons";
import EventsCards from "../components/EventsCards";

const RecentEvents = () => {

    const events = [
        {
            image: "https://images.unsplash.com/photo-1619490287893-862fd1808407?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D",
            description: "Replay Our Powerful Podcast Event and Get Inspired.",
        },
        {
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXAlMjBtZWV0aW5nfGVufDB8fDB8fHww",
            description: "Together Again: A Recap of Our Amaizing Gathering.",
        },
        {
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D",
            description: "A Look Back: Reviewed Projects by Our Talented Mentees.",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1681554601855-e04b390b5a4a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D",
            description: "Lorem ipsum: dolor sit, amet consectetur adipisicing elit.",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
            description: "Lorem ipsum: dolor sit, amet consectetur adipisicing elit.",
        },
    ];

    // For the scrolling feature
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        if (currentIndex < events.length - 1) setCurrentIndex(currentIndex + 1);
    }

    const prevCard = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
    }

    return (
        <>
            <div className="flex flex-col md:flex-row gap-4 h-[80vh] mt-10 pl-6 md:pl-16 lg:pl-24">
                <div className="flex md:flex-col items-center justify-between md:pb-16 w-full md:w-1/3 h-full text-[#023766]">
                    
                    <EventTitle />
                    <EventButtons 
                    currentIndex={currentIndex}
                    total={events.length}
                    onNext={nextCard}
                    onPrev={prevCard} />

                </div>

                <EventsCards events={events} currentIndex={currentIndex} />

            </div>
        </>
    )
}

export default RecentEvents;