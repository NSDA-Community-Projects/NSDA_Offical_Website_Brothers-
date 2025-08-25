import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFlag } from "@fortawesome/free-regular-svg-icons";

const About = () => {
  return (
    <section
      id="About"
      className="p-6 md:p-[50px] bg-gradient-to-bl from-[#E6C069] to-[#DFAD3B] flex flex-col gap-20"
    >
      {/* About */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-[48px] tajawal font-bold text-[#023665] mb-4">
            About NSDA
          </h1>
          <p className="nunito text-[16px] md:text-[20px] leading-relaxed">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Vorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis.
          </p>
        </div>
        <img
          className="w-[220px] h-[170px] md:w-[300px] md:h-[230px] object-contain"
          src="/img/first.png"
          alt="About Nsda"
        />
      </div>

      {/* How we began */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-between gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-[48px] text-[#023665] font-bold mb-4">
            How we began
          </h1>
          <p className="nunito text-[16px] md:text-[20px] leading-relaxed">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Vorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate libero et velit interdum.
          </p>
        </div>
        <img
          className="w-[220px] h-[170px] md:w-[300px] md:h-[230px] object-contain"
          src="/img/second.png"
          alt="About Nsda"
        />
      </div>

      {/* Mission & Vision */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Mission */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <FontAwesomeIcon
              className="text-5xl md:text-[8rem] text-[#023665]"
              icon={faFlag}
            />
            <h3 className="tajawal text-2xl md:text-[48px] font-bold">
              Our Mission
            </h3>
          </div>
          <p className="nunito text-[16px] md:text-[20px] leading-relaxed">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>

        {/* Vision */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <FontAwesomeIcon
              className="text-5xl md:text-[8rem] text-[#023665]"
              icon={faEye}
            />
            <h3 className="tajawal text-2xl md:text-[48px] font-bold">
              Our Vision
            </h3>
          </div>
          <p className="nunito text-[16px] md:text-[20px] leading-relaxed">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
