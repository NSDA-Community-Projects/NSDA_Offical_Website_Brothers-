import { FaInstagram, FaLinkedin, FaTiktok, FaTelegramPlane } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-12   shadow--sm ">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="w-[139px] h-[119px] my-0" />
      </div>

      {/* Navigation Links */}
<ul className="hidden md:flex items-center gap-6 text-[#010B40] nunito font-medium text-sm">
        <li><a href="#" className="hover:text-[#023665] hover:underline">Home</a></li>
        <li><a href="#about" className="hover:text-[#023665] hover:underline">About</a></li>
        <li><a href="#teams" className="hover:text-[#023665] hover:underline">Teams</a></li>
        <li><a href="#projects" className="hover:text-[#023665] hover:underline">Projects</a></li>
        <li><a href="#events" className="hover:text-[#023665] hover:underline">Events</a></li>
        <li><a href="#blogs" className="hover:text-[#023665] hover:underline">Blogs</a></li>
        <li><a href="#contact" className="hover:text-[#023665] hover:underline">Contact</a></li>
      </ul>

      {/* Social Icons */}
      <div className="flex items-center gap-4 text-[#003049] text-lg">
        <a href="#"><FaTiktok /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FiGithub /></a>
        <a href="#"><FaTelegramPlane /></a>
        <a href="#"><FaLinkedin /></a>
      </div>
    </nav>
  );
}
