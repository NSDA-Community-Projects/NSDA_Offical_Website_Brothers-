import React, { useState } from "react";

const EventButtons = ({currentIndex, total, onNext, onPrev}) => {

    return (
        <>
            <div className="flex items-center gap-6 pl-12 pr-6">
                <button onClick={onPrev}>&lt;</button>
                <span>{currentIndex + 1} / {total}</span>
                <button onClick={onNext}>&gt;</button>
            </div>
        </>
    )
}

export default EventButtons;