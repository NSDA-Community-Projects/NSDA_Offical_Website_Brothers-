import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

const cardData = [
  {
    icon: '/Vector.png',
    title: 'Sadaqah Jariyah',
    text: 'Our open-source code is a form of sadaqah jariyah—continuous charity that lives on and benefits others.',
  },
  {
    icon: '/Group.png',
    title: 'Nujum AI-Code',
    text: 'We build open-source AI tools rooted in purpose and shared growth, freely available for the Ummah.',
  },
  {
    icon: '/mentor.png',
    title: 'Mentorship',
    text: 'Mentorship programs led by Muslim professionals to support growth in tech and faith-based leadership.',
  },
  {
    icon: '/ppl.png',
    title: 'Muslim Devs',
    text: 'We’re cultivating a vibrant ecosystem of Muslim developers who build, contribute, and uplift together.',
  },
];

export default function WhatWeAreBuilding() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold ajawal-bold text-[#0B2A5B] mb-2">
          What We're Building
        </h2>
        <p className="text-sm text-gray-600 mb-8">
          Unlock a world of opportunities and accelerate your journey with us
        </p>

        {/* framed container */}
        <div className="relative rounded-2xl border-2 border-[#0B2A5B] p-6 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardData.map((card, index) => (
              <article
                key={index}
                className="relative bg-[#DFAD3B] rounded-lg p-5 pt-12 shadow-sm hover:shadow-md transition-all"
                aria-labelledby={`card-title-${index}`}
              >
                {/* decorative icon badge */}
                <div className="absolute -top-0 left-0 w-12 h-12 bg-[#023665] rounded-br-3xl rounded-md flex items-center justify-center shadow-md">
                  <img
                    src={card.icon}
                    alt=""
                    className="w-6 h-6 object-contain"
                    aria-hidden="true"
                  />
                </div>

                <h3 id={`card-title-${index}`} className="text-[#023665] text-lg nunito font-bold mb-2">
                  {card.title}
                </h3>

                <p className="text-[#0B2A5B] text-sm mb-4 nunito leading-relaxed">
                  {card.text}
                </p>

                <a
                href="#"
                className="text-white font-semibold text-sm hover:underline"
              >
                Join Now →
              </a>
              </article>
            ))}
          </div>

          {/* CTA pill overlapping bottom center */}
          <div className="pointer-events-none" aria-hidden>
            {/* spacer so absolute button can overlap visually */}
          </div>

          <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2">
            <a
              href="#"
              className="flex items-center gap-3 pointer-events-auto bg-[#0B2A5B] text-white font-bold md:py-3 px-6 rounded-md shadow-lg hover:bg-[#0a2547] transition"
            >
              Become part of Nejm <FaTelegramPlane />
            </a>
          </div>
        </div>

        {/* give bottom spacing so CTA doesn't overlap adjacent content */}
        <div className="h-12" />
      </div>
    </section>
  );
}
