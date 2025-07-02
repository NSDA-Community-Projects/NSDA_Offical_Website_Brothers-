import React from "react";

const EventsCards = () => {

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
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXAlMjBtZWV0aW5nfGVufDB8fDB8fHww",
            description: "Together Again: A Recap of Our Amaizing Gathering.",
        },
        {
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D",
            description: "A Look Back: Reviewed Projects by Our Talented Mentees.",
        },
    ];

    return (
        <>
            <div className="relative overflow-hidden w-full">
                <div className="flex gap-4 transition-transform duration-300 h-full text-sm">
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