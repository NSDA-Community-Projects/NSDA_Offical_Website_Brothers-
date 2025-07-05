import Image from "../assets/image.png"

const TeamCard = ({ name, description, role, campus, callToAction }) => {
  return (
    <div className="bg-white  p-6 w-[360px]  text-center flex-shrink-0 cursor-pointer ">
      <div className="flex justify-center mb-4  ">
        <img src={Image} className="w-[91px] h-[98px] p-1 object-contain" />
      </div>

      <h3 className="text-xl font-semibold text-yellow-600 mb-2">{name}</h3>

      <ul className="text-[24px] text-[#000000] font-nunito mb-4 text-left space-y-1 list-none">
        <li> {description}</li>
        <li> {role}</li>
        <li> {campus}</li>
        <li> {callToAction}</li>
      </ul>

      <button className="bg-yellow-500 text-[#FFFFFF] px-4 py-2 rounded-lg hover:bg-yellow-600 transition ">
        Join Now
      </button>
    </div>
  );
};
export default TeamCard;
