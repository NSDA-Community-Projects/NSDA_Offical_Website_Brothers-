import { SlUser } from "react-icons/sl";
const TeamCard = ({ name, description, role, campus, callToAction }) => {
  return (
    <div className="bg-white rounded-xl p-6 w-[240px] text-center hover:shadow-lg transition duration-300 flex-shrink-0 cursor-pointer">
      <div className="flex justify-center mb-4">
        <SlUser className="text-yellow-500 text-6xl" />
      </div>

      <h3 className="text-xl font-semibold text-yellow-600 mb-2">{name}</h3>

      <ul className="text-sm text-gray-700 mb-4 text-left space-y-1">
        <li>• {description}</li>
        <li>• {role}</li>
        <li>• {campus}</li>
        <li>• {callToAction}</li>
      </ul>

      <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
        Join Now
      </button>
    </div>
  );
};

export default TeamCard;
