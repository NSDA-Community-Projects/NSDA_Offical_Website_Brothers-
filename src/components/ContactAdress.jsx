import { MailOpen, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const ContactAddress = () => {
  return (
    <div className="w-full mb-8 md:w-auto md:mb-0 space-y-5 text-left">
      <h1 className="text-[#023665] leading-tight text-[40px] lg:text-[48px] max-w-[356px] tajawal font-bold">
        Become part of something great
      </h1>
      <p className="font-[400] max-w-[472px] nunito">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        nobis ullam at repellat aut facere animi, iure doloremque debitis enim.
      </p>

      <ul className="flex-col flex gap-[30px] w-[198px] mt-6">
        <li className="flex space-x-2">
          <div className="pt-1">
            <MailOpen size={25} />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[#DFAD3B] tajawal font-bold text-[20px]">
              Email
            </h2>
            <a href="#" className="nunito text-[16px] font-[400]">
              example@gmail.com
            </a>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <div className="pt-1">
            <Phone size={25} />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[#DFAD3B] tajawal font-bold text-[20px]">
              Phone
            </h2>
            <a href="#" className="nunito text-[16px] font-[400]">
              +1234567890
            </a>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <div className="pt-1">
            <FaTelegramPlane size={25} />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[#DFAD3B] tajawal font-bold text-[20px]">
              Telegram
            </h2>
            <a href="#" className="nunito text-[16px] font-[400]">
              @telegramusername
            </a>
          </div>
        </li>
      </ul>

      <div className="bg-[#023665] w-[234px] h-[2px] mt-8"></div>
      <div className="space-y-4">
        <h1 className="tajawal font-bold text-[20px] text-[#DFAD3B]">
          Our socials
        </h1>
        <div className="flex gap-[1rem] max-w-[145px]">
          {[FaTiktok, FaInstagram, FaFacebookF, FaLinkedin].map((Icon, i) => (
            <div
              key={i}
              className="p-2 rounded-full bg-[#023665]/10 cursor-pointer 
                         transition-all duration-300 
                         hover:scale-125 hover:bg-[#DFAD3B]/20 hover:text-[#DFAD3B]"
            >
              <Icon size={20} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
