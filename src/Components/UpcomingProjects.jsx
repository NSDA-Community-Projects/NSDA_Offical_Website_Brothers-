import Coding from "../assets/Images/coding.jpg";
import Computer from "../assets/Images/computer.jpg";
import Mic from "../assets/Images/mic.jpg";

const UpcomingProjects = () => {
  return (
    <section
      className="w-[1543px] h-[899px] relative py-10"
      style={{
        background: "linear-gradient(115.43deg, #FFDB8B 5.93%, #DFAD3B 58.47%)",
      }}
    >
      <h2 className="absolute top-[224px] left-[79px] w-[300px] h-[154px] text-[64px] font-bold leading-[100%] text-[#B18013] font-tajawal">
        Upcoming Projects
        <div className="mt-2">
          <div className="w-[82px] h-[8px] bg-[#B18013] rounded-full"></div>
        </div>
        <p className="w-[347px] h-[54px] text-[20px] leading-[100%] font-medium font-nunito text-white">
          Amazing moments await. Secure your spot and stay in the loop!
        </p>
      </h2>
      <div className=" grid-cols-1 md:grid-cols-3 flex gap-4 w-[1120px] ml-[476px] mt-[50px]  p-10">
        <div className="w-[360px] h-[410px] relative rounded-xl overflow-hidden pt-10">
          <img
            src={Mic}
            alt="background"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full px-4 py-3">
            <p className="font-tajawal font-medium text-[10px] text-white leading-[100%] mb-1">
              29/07/2025
            </p>
            <p className="font-tajawal font-bold text-[16px] text-white leading-[100%]">
              Stay inspired. Reserve your spot for our next podcast event!
            </p>
          </div>
        </div>
        <div className=" w-[360px] h-[410px] relative rounded-xl overflow-hidden pt-10">
          <img
            src={Coding}
            alt="background"
            className="  object-cover  w-full h-full"
          />
          <div className="absolute bottom-0 left-0 w-full px-4 py-3">
            <p className="font-tajawal font-medium text-[10px] text-white leading-[100%] mb-1">
              27/09/2025
            </p>
            <p className="font-tajawal font-bold text-[16px] text-white leading-[100%]">
              Join Our Coding Hackathon and Turn Ideas into Innovations!
            </p>
            <button className="bg-[#010B40]  w-[101px] h-[23px]  font-Tajawal font-medium text-[12px] leading-[100%] tracking-[0.01em] text-white mt-1">
              REGISTER NOW
            </button>
          </div>
        </div>
        <div className=" w-[360px] h-[410px] relative rounded-xl overflow-hidden pt-10 opacity-50%">
          <img
            src={Computer}
            alt="background"
            className=" object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 w-full px-4 py-3">
            <p className="font-tajawal font-medium text-[10px] text-white leading-[100%] mb-1">
              19/12/2025
            </p>
            <p className="font-tajawal font-bold text-[16px] text-white leading-[100%]">
              Gain Insights and Support Experienced Mentors
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-gray-600">  2 / 5  </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjects;
