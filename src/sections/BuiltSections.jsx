// src/sections/BuiltSection.jsx
import React from 'react';
import LeaderCard from '../components/ui/LeaderCard';
import COLORS from '../constants/colors';

import vennIllustration from '../assets/venn-diagram-illustration.png';
import campusesIllustration from '../assets/map-illustration.png';

const BuiltSection = () => {
  const builtText = `Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  const leaders = [
    {
      name: 'Name 1',
      role: 'Role',
      description: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit.',
      profileLink: '/view-profile',
    },
    {
      name: 'Name 2',
      role: 'Role',
      description: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit.',
      profileLink: '/view-profile',
    },
    {
      name: 'Name 3',
      role: 'Role',
      description: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit.',
      profileLink: '/view-profile',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16" style={{ backgroundColor: COLORS.backgroundWhite }}>
      <div className="max-w-7xl mx-auto space-y-20">

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl font-bold" style={{ color: COLORS.textBlueDark }}>
              How we are Built
            </h2>
            <p className="mt-4 leading-relaxed" style={{ color: COLORS.textGrayDark }}>
              {builtText}
            </p>
          </div>
          <div className="md flex justify-center">
            <img
              src={vennIllustration}
              alt="How we are Built diagram"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-4" style={{ color: COLORS.textBlueDark }}>
              Our Leaders
            </h2>
            <p className="mb-8" style={{ color: COLORS.textGrayDark }}>
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {leaders.map((leader, idx) => (
                <LeaderCard key={idx} {...leader} />
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-4xl font-bold" style={{ color: COLORS.textBlueDark }}>
              United Across Campuses
            </h2>
            <div className="flex flex-col md:flex-row items-center mt-4 gap-8">
              {/* Text */}
              <p className="leading-relaxed md:w-1/2 text-left" style={{ color: COLORS.textGrayDark }}>
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate. Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate.
              </p>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={campusesIllustration}
                  alt="United Across Campuses illustration"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BuiltSection;
