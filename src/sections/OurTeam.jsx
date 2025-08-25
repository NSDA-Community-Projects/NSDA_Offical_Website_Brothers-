import TeamSwiper from "../components/Swipper";

const OurTeam = () => {
  return (
    <section id="Team" className="py-[5rem] ">
      <div className="text-center h-[140px] md:h-[130px] bg-[#DFAD3B]">
        <h1 className="text-[#023665] text-[46px] font-bold tajawal">
          Meet Our Teams
        </h1>
        <p className="text-[22px] nunito">
          Get to know our core teams, their roles and how t become a member
        </p>
      </div>
      <div>
        <TeamSwiper />
      </div>
    </section>
  );
};

export default OurTeam;
