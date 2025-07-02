import teamsData from "../data/teamsData";
import TeamCard from "./TeamCard";

const TeamSection = () => {
  return (
    <section>
      {/* Yellow Header */}
      <div className="bg-yellow-500 py-6 text-center max-w-[1600px] mx-auto mt-10 px-4">
        <h2 className="text-3xl font-bold text-[#003865]">Meet Our Teams</h2>
        <p
          className="color-[#010B40] font-nunito text-center text-lg md:text-xl font-normal leading-none px-4 py-2 rounded-md max-w-[736px] mx-auto"
        >
          Get to know our core teams, their roles and how to become a member
        </p>
      </div>

      {/* Team Cards */}
      <div className="bg-[#f6f1ed]  px-4 py-12 rounded-[15px] max-w-[95%] md:max-w-[1610px] mx-auto ">
        <div className="flex flex-wrap justify-center gap-6">
          {teamsData.map((team, index) => (
            <TeamCard key={index} {...team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
