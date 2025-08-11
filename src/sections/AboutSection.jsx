import React from 'react';
import MissionVisionCard from '../components/ui/mvCard';

import aboutIllustration from '../assets/about-illustration.png';
import beganIllustration from '../assets/amico.svg';
import missionIcon from '../assets/fontisto_flag.svg';
import visionIcon from '../assets/tabler_eye-star.svg';

import COLORS from '../constants/colors'; 

const AboutSection = () => {
  const aboutText = `Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. A Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`;

  const beganText = `Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. A Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`;

  const missionText = `Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`;

  const visionText = `Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`;

  return (
    <section
      style={{ backgroundColor: COLORS.backgroundYellow }}
      className="py-16 px-4 sm:px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto space-y-20">

        {/* About NSDA */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-left">
            <h2
              style={{ color: COLORS.textBlueDark }}
              className="text-4xl font-bold"
            >
              About NSDA
            </h2>
            <p
              style={{ color: COLORS.textGrayDark }}
              className="mt-4 leading-relaxed"
            >
              {aboutText}
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={aboutIllustration}
              alt="About NSDA illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* How We Began */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2 text-left">
            <h2
              style={{ color: COLORS.textBlueDark }}
              className="text-4xl font-bold"
            >
              How We Began
            </h2>
            <p
              style={{ color: COLORS.textGrayDark }}
              className="mt-4 leading-relaxed"
            >
              {beganText}
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={beganIllustration}
              alt="How We Began illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 pt-8">
          <MissionVisionCard
            icon={missionIcon}
            title="Our Mission"
            description={missionText}
          />
          <MissionVisionCard
            icon={visionIcon}
            title="Our Vision"
            description={visionText}
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
