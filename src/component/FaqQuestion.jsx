import React from "react";
import { useState } from "react";

const FaqQuestion = ({ question, ans }) => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div
        className="flex  flex-row justify-between items-center  lg:mx-20 text-white bg-faq hover:bg-faqHover p-5 cursor-pointer mt-2"
        onClick={handleDisplay}
      >
        <h1 className="text-[1.125rem]  lg:text-[1.5rem]"> {question}</h1>
        <div>
          <div className={display ? `hidden` : `show`}>
            <svg
              className="w-[36px] h-[36px] text-white"
              fill="white"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.1"
                d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
              ></path>
            </svg>
          </div>

          <div className={display ? `show` : `hidden`}>
            <svg
              className="w-[36px] h-[36px] text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        className={display ? `show bg-faq py-5 lg:mx-20  mt-[2px]` : `hidden`}
      >
        <h1 className="text-[1.125rem]  lg:text-[1.5rem] px-5 text-justify">
          {ans}
        </h1>
      </div>
    </>
  );
};

export default FaqQuestion;
