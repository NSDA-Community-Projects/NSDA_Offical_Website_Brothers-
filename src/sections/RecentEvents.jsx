import React, { useRef, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import SectionNavigation from "../components/SectionNavigation";
import ImageCarousel from "../components/ImageCarousel";

// Images
const eventImages = [
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

const RecentEvents = () => {
    const swiperRef = useRef(null);
    const [current, setCurrent] = useState(1);

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            {/* Left Side */}
            <div className="flex flex-col justify-between space-y-8 md:col-span-1">
                <SectionTitle />
                <SectionNavigation
                currentIndex={current}
                total={eventImages.length}
                onPrev={handlePrev}
                onNext={handleNext}
                />
            </div>

            {/* Right Side */}
            <div className="md:col-span-2">
                <ImageCarousel
                eventImages={eventImages}
                onSlideChange={setCurrent}
                navigationRef={swiperRef}
                />
            </div>
        </section>
    );
}

export default RecentEvents;