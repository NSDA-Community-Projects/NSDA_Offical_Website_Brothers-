import React from 'react';
import colors from '../../constants/colors'; 

const LeaderCard = ({ name, role, description, profileLink }) => {
  return (
    <div
      className="rounded-lg p-4 w-full max-w-xs"
      style={{ border: `1px solid ${colors.primary}` }}
    >
      <div className="flex items-center gap-3 pb-2">
        <svg
          className="w-10 h-10"
          fill="none"
          stroke={colors.accent}
          strokeWidth={1}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zm0 1.5c-3 0-6 1.5-6 4.5v1.5h12V18c0-3-3-4.5-6-4.5z"
          />
        </svg>
        <div>
          <h3 className="font-semibold" style={{ color: colors.textPrimary }}>
            {name}
          </h3>
          <p className="text-sm" style={{ color: colors.textGrayDark }}>
            {role}
          </p>
        </div>
      </div>

      <hr style={{ borderColor: colors.border }} className="mb-3" />
      <p className="text-sm text-left mb-3" style={{ color: colors.textPrimary }}>
        {description}
      </p>

      <a
        href={profileLink}
        className="text-sm font-medium hover:underline"
        style={{ color: colors.textPrimary }}
      >
        View profile →
      </a>
    </div>
  );
};

export default LeaderCard;
