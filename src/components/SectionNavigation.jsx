import React, { useState } from "react";

const SectionNavigation = ({ currentIndex, total, onPrev, onNext }) => {

    return (
        <div className="flex items-center gap-6 w-[110px] h-[20px] ml-[137px] mb-10 text-[#023665]">
            {/* Left button */}
            <button
            onClick={onPrev}
            className="">
                &lt;
            </button>

            {/* Slide counter */}
            <span className="font-semibold">
                {currentIndex} / {total}
            </span>
            
            {/* Right button */}
            <button
            onClick={onNext}
            className="">
                &gt;
            </button>
        </div>
    )
}

export default SectionNavigation;