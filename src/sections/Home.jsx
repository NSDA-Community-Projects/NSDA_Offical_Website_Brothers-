import { useState } from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="home" className="py-4 px-6 pb-[8rem] hero-bg">
      {/* Navbar */}
      <nav className="flex justify-between items-center nunito text-[18px]">
        {/* Logo */}
        <div>
          <img
            src="/img/logo.png"
            className="w-[120px] h-[90px] md:w-[139px] md:h-[119px]"
            alt="NSDA LOGO"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 py-6">
          {[
            "Home",
            "About",
            "Team",
            "Project",
            "Event",
            "Blogs",
            "Contact",
          ].map((item) => (
            <a
              href={`#${item}`}
              key={item}
              className="hover:underline duration-300 cursor-pointer"
            >
              {item}
            </a>
          ))}
        </ul>

        {/* Social Links (Desktop) */}
        <ul className="hidden md:flex gap-5 py-6 text-[20px]">
          {[
            FaTelegramPlane,
            FaInstagram,
            FaFacebookSquare,
            FaTiktok,
            FaLinkedin,
          ].map((Icon, index) => (
            <li
              key={index}
              className="transition-transform duration-300 hover:scale-125 hover:text-[#023665] cursor-pointer"
            >
              <Icon />
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-3xl" onClick={() => setIsOpen(true)}>
          <HiMenu />
        </button>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop:blur-2xl bg-black/50 bg-opacity-90 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button className="text-2xl" onClick={() => setIsOpen(false)}>
            <HiX />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col gap-4 p-4 text-[18px]">
          {[
            "Home",
            "About",
            "Team",
            "Project",
            "Event",
            "Blogs",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:underline duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </ul>

        {/* Social Links */}
        <div className="flex gap-5 p-4 text-[22px]">
          {[
            FaTelegramPlane,
            FaInstagram,
            FaFacebookSquare,
            FaTiktok,
            FaLinkedin,
          ].map((Icon, index) => (
            <div
              key={index}
              className="transition-transform duration-300 hover:scale-125 hover:text-[#023665] cursor-pointer"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center mt-6">
        <h1 className="amiri-bold text-[40px] md:text-[70px] text-center px-4 md:px-[121px] py-6 text-[#023665]">
          Empowering Muslim Students in Tech-Innovate with Faith
        </h1>
        <p className="nunito text-[#010B40] text-center max-w-[687px] px-4">
          Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos
        </p>

        <div className="w-[280px] py-16 flex items-center gap-2 p-2">
          <div className="flex -space-x-3">
            <div className="w-6 h-6 border bg-white rounded-full" />
            <div className="w-6 h-6 border bg-white rounded-full" />
            <div className="w-6 h-6 border bg-white rounded-full" />
            <div className="w-6 h-6 border bg-white rounded-full" />
          </div>

          <p className="text-[#010626] font-light text-[18px]">
            Meet our core teams
          </p>
        </div>

        <div className="max-w-[280px] border-[#020F59] border-2 rounded-xl text-center text-[19px] nunito">
          <p className="px-7 py-2">
            Become part of{" "}
            <span className="font-extrabold">
              Nejm <FaTelegramPlane className="inline-block text-[#020F59]" />{" "}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
