const ContactForm = () => {
  return (
    <form
      action="#"
      className="w-full p-4 bg-[#DFAD3B] flex flex-col gap-4 md:grid md:w-[752px] md:h-[550px] md:bg-[#DFAD3B] md:grid-cols-2 md:grid-rows-[1fr_1fr_3fr_1fr]  rounded-[15px] md:p-[35px] md:gap-3"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="text-[#023665] tajawal font-bold text-base md:text-lg"
        >
          Name
        </label>
        <input className="w-full px-2 md:max-w-[325px] bg-[#F5E1B3]/70 h-[48px] md:h-[53px] rounded-[10px] " />
      </div>
      {/* Phone */}
      <div>
        <label
          htmlFor="name"
          className="text-[#023665] tajawal font-bold text-base md:text-lg"
        >
          Phone
        </label>
        <input
          type="tel"
          className="w-full px-2 md:max-w-[325px] bg-[#F5E1B3]/70 h-[48px] md:h-[53px] rounded-[10px] "
        />
      </div>
      {/* Email */}
      <div className="md:col-span-2 ">
        <label
          htmlFor="email"
          className="text-[#023665] tajawal font-bold text-base md:text-lg"
        >
          Email
        </label>
        <input
          className="w-full px-2 bg-[#F5E1B3]/70 h-[48px] md:h-[53px] rounded-[10px]"
          id="email"
          type="email"
        />
      </div>
      {/* TextArea */}
      <div className="md:col-span-2 ">
        <label
          htmlFor="name"
          className="text-[#023665] tajawal font-bold text-base md:text-lg"
        >
          Name
        </label>
        <textarea className="w-full h-[100px] p-2 md:h-[140px] bg-[#F5E1B3]/70  rounded-[10px]" />
      </div>
      <div className="md:col-span-2 flex justify-start items-end mt-auto">
        <button className="bg-[#023665] duration-500 hover:-translate-y-1 tajawal font-bold text-base md:text-[20px] text-white rounded-[10px] w-full md:w-[183px] md:my-10 h-[48px] md:h-[53px]">
          Get in Touch
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
