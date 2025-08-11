import React from 'react';
import COLORS from '../../constants/colors'; 

const MissionVisionCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-16 h-16">
        <img src={icon} alt="" className="w-full h-full object-contain" />
      </div>
      <div>
        <h3
          style={{ color: COLORS.textBlueDark }}
          className="text-4xl font-bold"
        >
          {title}
        </h3>
        <p
          style={{ color: COLORS.textGrayDark }}
          className="mt-2 leading-relaxed"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default MissionVisionCard;
