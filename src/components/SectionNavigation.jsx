import React, { useState } from "react";

const SectionNavigation = ({ currentIndex, total, onPrev, onNext }) => {

    return (
        <div className="flex items-center gap-4">
            {/* Left button */}
            <button
            onClick={onPrev}
            className="px-3 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
                &lt;
            </button>

            {/* Slide counter */}
            <span className="font-semibold">
                {currentIndex}/{total}
            </span>
            
            {/* Right button */}
            <button
            onClick={onNext}
            className="px-3 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
                &gt;
            </button>
        </div>
    )
}

export default SectionNavigation;