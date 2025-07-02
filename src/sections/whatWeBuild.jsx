import {  FaTelegramPlane } from "react-icons/fa";

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
    <section className=" py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
          What We're Building
        </h2>
        <p className="text-gray-600 mb-8">
          Unlock a world of opportunities and accelerate your journey with us
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-[#DFAD3B] border border-yellow-300 p-5 rounded-xl text-left shadow-sm hover:shadow-md transition"
            >
              <div className="inline-block mb-4 p-3 bg-[#023665] rounded-br-3xl">
                <img
                  src={card.icon}
                  alt={card.title + ' icon'}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-[#023665] text-lg font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-gray-800 text-sm mb-4">{card.text}</p>
              <a
                href="#"
                className="text-white font-semibold text-sm hover:underline"
              >
                Join Now →
              </a>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="inline-block bg-[#121E5D] text-white font-bold py-2 px-6 rounded-full hover:bg-blue-800 transition"
        >
          Become part of Nejm <FaTelegramPlane />
        </a>
      </div>
    </section>
  );
}
