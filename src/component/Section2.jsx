import React from "react";

export default function Section({
  flexDirectionClasses,
  heading,
  paragraph,
  image,
  video,
  videoDivClasses,
}) {
  return (
    <div
      className={`container mx-auto py-[72px]  dark:bg-[#000000] text-white font-custom justify-center items-center ${flexDirectionClasses}`}
    >
      {/* -------------- left side / text part --------------------- */}
      <div className="px-5 sm:px-0 w-full lg:w-1/2 ">
        <h2 className="text-[2rem]  lg:text-[3rem] text-center lg:text-left  font-[700] sm:font-extrabold">
          {heading}
        </h2>
        <p className="mt-[16px] text-[1.125rem] lg:text-[1.5rem] text-center lg:text-left ">
          {paragraph}
        </p>
      </div>
      {/* -------------- right side / img part --------------------- */}
      <div className="px-5 sm:px-0 relative w-full  lg:w-1/2 mt-5">
        {/* -------------- image "screen frame" --------------------- */}
        <img
          className="box-content overflow-clip w-[100%] border-0"
          src={image}
          alt=""
        />
        {/* --------- div for the running video in the screen ------- */}

        <div
          className={`inset-0 z-[-1] overflow-hidden  -translate-y-2/4 -translate-x-2/4 block absolute  ${videoDivClasses}`}
        >
          <video
            className="inline-block object-contain box-content overflow-clip "
            autoPlay
            playsInline
            muted
            loop
            data-uia="nmhp-card-animation-asset-video"
            __idm_id__="5103617"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
