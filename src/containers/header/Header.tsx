import React from "react";
// import people from "/images/people.png";
// import ai from "../../assets/ai.png";

const Header = () => (
  <div
    className="flex flex-col lg:flex-row section__padding font-primary"
    id="home"
  >
    <div className="flex-1 flex flex-col justify-center items-start lg:mr-20 mb-12 lg:mb-0">
      <h1 className="text-white font-semibold text-3xl lg:text-[40px] leading-tight lg:leading-[50px]">
        Let&apos;s Build Something amazing with GPT-3 OpenAI
      </h1>
      <p className="text-gray-400 mt-6 text-sm lg:text-base">
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>

      <div className="w-full flex flex-row mt-8 mb-4">
        <input
          type="email"
          placeholder="Your Email Address"
          className="flex-2 min-h-[30px] w-full px-4 py-2 md:text-base text-xs bg-gray-800 border border-gray-800 text-white rounded-l-md outline-none"
        />
        <button
          type="button"
          className="flex-0.6 min-h-[30px] px-2 md:px-0 w-2/6 bg-primary text-white md:text-base py-2 rounded-r-md text-xs"
        >
          Get Started
        </button>
      </div>

      <div className="w-full flex items-center mt-8">
        <img
          src="/images/people.png"
          alt="people"
          className="w-[140px] h-[30px]"
        />
        <p className="ml-4 text-white text-xs md:text-sm font-medium leading-[38px]">
          1,600 people requested access a visit in last 24 hours
        </p>
      </div>
    </div>

    <div className="flex-1 flex justify-center items-center">
      <img
        src="/images/ai.png"
        alt="ai"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
);

export default Header;
