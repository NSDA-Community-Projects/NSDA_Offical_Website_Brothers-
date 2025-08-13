import React from "react";

const EventTitle = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold">
                    Recent<br />
                    <span className="relative">
                        Eve<span className="absolute left-1 -bottom-1 bg-[#023766] h-2 w-full"></span>
                    </span>nts
                </h1>
                <p className="mt-6 md:mt-12 max-w-82">Amaizing moments await. Secure your spot and stay in the loop!</p>
            </div>
        </>
    )
}

export default EventTitle;