import React from "react";

const HowWeBuilt = () => {
  return (
    <section
      id="howWeBuilt"
      className="m-8 md:m-12 flex flex-col md:flex-row md:justify-between md:items-start gap-8"
    >
      <div className="flex-1 max-w-full md:max-w-[420px]">
        <h2 className="tajawal text-[#023665] text-3xl md:text-[46px] font-bold leading-tight">
          How we are Built
        </h2>
        <p className="Nunito text-[16px] md:text-[18px] w-full md:w-[338px] mt-4">
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odi­­o mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Vorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          Class aptent taciti sociosqu
        </p>
      </div>

      <div className="flex-1 flex flex-col md:flex-row items-start gap-6">
        {/* Visual stack (circles) */}
        <div className="flex-1 min-w-[280px] flex flex-col items-center">
          <div className="w-[150px] h-[150px] md:w-[210px] md:h-[210px] bg-[#023665]/60 rounded-full" />
          <div className="flex mt-[-28%] md:mt-[-20%] space-x-[-8px]">
            <div className="w-[150px] h-[150px] md:w-[210px] md:h-[210px] bg-[#020F59]/60 -mr-6 rounded-full" />
            <div className="w-[150px] h-[150px] md:w-[210px] md:h-[210px] bg-[#DFAD3B]/60 rounded-full" />
          </div>
        </div>

        {/* Non-loop content area (replace with your own) */}
        <div className="flex-1 w-full">
          {/* 
            Replace the following blocks with your own content.
            This section is intentionally not a loop to allow easy manual edits later.
          */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-5 h-5 rounded-full  bg-[#023665]/60  mt-1" />
            <div>
              <p className="Tajawal font-bold text-[20px] md:text-[24px]">
                NSDA central Team
              </p>
              <p className="Nunito text-[14px] md:text-[16px]">
                Leads national visions, branding and inter-campus strategy.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-5 h-5 rounded-full  bg-[#020F59]/60 mt-1" />
            <div>
              <p className="Tajawal font-bold text-[20px] md:text-[24px]">
                Campus Chapters
              </p>
              <p className="Nunito text-[14px] md:text-[16px]">
                Run events, recuit members and connect students locally.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 md:ml-3 mb-6">
            <div className="w-5 h-5 rounded-full bg-[#DFAD3B]/60 mt-1" />
            <div>
              <p className="Tajawal font-bold text-[20px] md:text-[24px]">
                Coordinated Growth
              </p>
              <p className="Nunito text-[14px] md:text-[16px]">
                Monthly syncs and shared resources ensuring consistent growth.
              </p>
            </div>
          </div>

          {/* Add more blocks here as plain content (no loop) */}
        </div>
      </div>
      {/* Our Leaders and United across Campus */}
    </section>
  );
};

export default HowWeBuilt;
