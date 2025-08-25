import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const OurLeadersAndUnited = () => {
  return (
    <section
      id="blog"
      className="px-[20px] flex flex-col lg:flex-row gap-[2rem] lg:gap-[4rem]"
    >
      {/* Our Leaders */}
      <div className="w-full lg:w-[622px] flex flex-col gap-4">
        <h1 className="text-[#023665] tajawal font-bold text-[32px] lg:text-[46px]">
          Our Leaders
        </h1>
        <p className="nunito">
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc vulputate
        </p>

        <div className="w-full lg:w-[622px] py-5 flex flex-col sm:flex-row sm:flex-wrap gap-[15px]">
          {/* User1 */}
          <div className="border-[#010B40] border rounded-[14px] flex-1 min-w-[250px] md:w-[250px]">
            <div className="flex gap-3 p-3">
              <FontAwesomeIcon
                className="text-[50px] lg:text-[73px] h-[50px] lg:h-[73px]"
                icon={faUserTie}
              />
              <div>
                <p className="nunito font-bold text-[16px] lg:text-[18px]">
                  Name 1
                </p>
                <p>Role</p>
              </div>
            </div>
            <div className="border-t text-center space-y-2 nunito p-3">
              <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>View profile →</button>
            </div>
          </div>

          {/* User2 */}
          <div className="border-[#010B40] border rounded-[14px] flex-1 min-w-[250px] md:w-[250px]">
            <div className="flex gap-3 p-3">
              <FontAwesomeIcon
                className="text-[50px] lg:text-[73px] h-[50px] lg:h-[73px]"
                icon={faUserTie}
              />
              <div>
                <p className="nunito font-bold text-[16px] lg:text-[18px]">
                  Name 2
                </p>
                <p>Role</p>
              </div>
            </div>
            <div className="border-t text-center space-y-2 nunito p-3">
              <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>View profile →</button>
            </div>
          </div>

          {/* User3 */}
          <div className="border-[#010B40] border rounded-[14px] flex-1 min-w-[250px] md:w-[250px]">
            <div className="flex gap-3 p-3">
              <FontAwesomeIcon
                className="text-[50px] lg:text-[73px] h-[50px] lg:h-[73px]"
                icon={faUserTie}
              />
              <div>
                <p className="nunito font-bold text-[16px] lg:text-[18px]">
                  Name 3
                </p>
                <p>Role</p>
              </div>
            </div>
            <div className="border-t text-center space-y-2 nunito p-3">
              <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>View profile →</button>
            </div>
          </div>
        </div>
      </div>

      {/* United Across Campuses */}
      <div className="w-full lg:w-auto">
        <h1 className="text-[#023665] tajawal font-bold text-[32px] lg:text-[46px]">
          United Across Campuses
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <p className="nunito w-full lg:w-2/3">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <img
            className="w-full sm:w-[400px] lg:w-auto"
            src="/img/built.png"
            alt="United Across Campuses"
          />
        </div>
      </div>
    </section>
  );
};

export default OurLeadersAndUnited;
