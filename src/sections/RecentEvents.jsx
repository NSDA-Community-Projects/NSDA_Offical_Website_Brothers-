import React from "react";
import EventTitle from "../components/EventTitle";
import EventButtons from "../components/EventButtons";
import EventsCards from "../components/EventsCards";

const RecentEvents = () => {

    return (
        <>
            <div className="flex gap-4 h-[80vh] mt-10 pl-6 md:pl-16 lg:pl-24">
                <div className="flex flex-col justify-between md:pb-16 w-1/3 h-full text-[#023766]">
                    
                    <EventTitle/>
                    <EventButtons/>

                </div>

                <EventsCards/>
                
            </div>
        </>
    )
}

export default RecentEvents;