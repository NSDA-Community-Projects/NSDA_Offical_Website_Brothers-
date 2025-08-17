import {
  FaEnvelope,
  FaPhone,
  FaTelegramPlane,
  FaTiktok,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="flex flex-col  mt-20 md:flex-row justify-between gap-10 p-8 max-w-6xl mx-auto  items-start ">
      {/* Left Section */}
      <div className=" w-[341px] h-[110px]  space-y-6 ">
        <p className="text-[46px] font-bold  text-[#023665] leading-snug font-Tajawal ">
          Become Part of <br /> Something Great
        </p>
        <p className="mt-4 text-[#000000] font-nunito text-[16px] ">
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent.
        </p>

        {/* Contact Info */}
        <div className="w-[192px] h-[191px] mt-6 space-y-4  gap-[29px] ">
          <div className="flex items-center gap-3">
            <FaEnvelope className="w-[24.24px] h-[23.47px] text-[#010B40]" />
            <span className=" w-[47px] h-[23px] font-Tajawal font-bold text-[19.39px] text-[#DFAD3B]">
              Email
            </span>
          </div>
          <p className="w-[154px] h-[21px] font-nunito text-[#000000]">
            example@gmail.com
          </p>
          <div className="flex items-center gap-3">
            <FaPhone className="w-[21.77px] h-[21.77px] text-[#010B40]" />
            <span className="text-[#DFAD3B] w-[53px] h-[23px] font-Tajawal font-bold text-[19.39px] ">
              Phone
            </span>
          </div>
          <p className="text-[#000000] w-[143px] h-[21px] size-[15.52px] ">
            +251 594 791 9764
          </p>
          <div className="flex items-center gap-3">
            <FaTelegramPlane className="w-[29.09px] h-[29.09px] text-[#010B40] " />
            <span className="w-[81px] h-[23px] font-Tajawal font-bold size-[19.39px] text-[#DFAD3B]">
              Telegram
            </span>
          </div>
          <p className="w-[83px] h-[21px] font-Nunito size-15.52px text-[#000000] ">
            NSDA//t.me
          </p>
          <div className=" mt-10 border-1 w-[234px] h-[2px] text-[#023665] "></div>
        </div>

        {/* Socials */}
        <div className="mt-26">
          <h4 className="w-[97px] h-[24px] font-Tajawal font-bold text-[#DFAD3B] size-[20px] ">
            Our Socials
          </h4>
          <div className="flex gap-4 mt-2 text-2xl ">
            <a href="#" className="w-[25px] h-[25px]">
              <FaTiktok className=" w-[16.33px] h-[18.75px] text-[#000000] " />
            </a>
            <a href="#" className="w-[25px] h-[25px]">
              <FaInstagram className="w-[20.83px] h-[20.83px] text-[#000000]" />
            </a>
            <a href="#" className="w-[25px] h-[25px]">
              <FaFacebook className="w-[16.33px] h-[18.75px] text-[#000000]" />
            </a>
            <a href="#" className="w-[25px] h-[25px]">
              <FaLinkedin className="#000000" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className=" bg-[#DFAD3B] flex-1 p-6 md:p-8 rounded-lg ">
        <form className="space-y-4 w-[714.40px] p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="text-start">
              <label
                htmlFor="#"
                className="w-[51px] h-[23px] font-Tajawal font-bold text-[#023665] text-[19px]"
              >
                Name
              </label>
              <input
                type="text"
                className="p-3  rounded-[9.5px]  w-[308.75px] h-[53.2px] bg-[#F5E1B3]"
              />
            </div>
            <div className="text-center ">
              <label
                htmlFor="Phone"
                className="w-[52px] h-[23px] font-Tajawal font-bold text-[#023665] text-[19px]"
              >
                Phone
              </label>
              <input
                type="text"
                className="p-3 rounded-[9.5px] w-[308.75px] h-[53.2px] bg-[#F5E1B3]"
              />
            </div>
          </div>
          <label
            htmlFor=""
            className="w-[46px] h-[23px] font-Tajawal font-bold text-[#023665] text-[19px]"
          >
            Email
          </label>
          <input
            type="email"
            className="p-3 rounded-[9.5px] w-[647.9px] h-[53.2px] bg-[#F5E1B3]"
          />
          <label
            htmlFor=""
            className="w-[72px] h-[23px] font-Tajawal font-bold text-[#023665] text-[19px]"
          >
            Message
          </label>
          <textarea
            rows="5"
            className="p-3 border rounded-[9.5px]  w-[647.9000244140625px] h-[142.5px] bg-[#F5E1B3]"
          ></textarea>
          <button
            type="submit"
            className=" bg-[#023665] w-[173.85px] h-[53.2px] mt-8  rounded-[9.5px] flex items-center justify-center "
          >
            <p className="w-[102px] h-[23px] font-Tajawal font-bold text-[#FFFFFF]">
              Get in Touch
            </p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
