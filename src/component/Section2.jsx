import React from "react";

export default function Section2() {
  return (
    <div className="py-[72px] flex flex-row dark:bg-[#000000] text-[#FFFFFF] font-custom justify-center">
      <div className="mx-[32px] flex">
        {/* -------------- left side / text part --------------------- */}
        <div className="basis-1/2">
          <h2 className="text-5xl font-extrabold">Auf Ihrem Fernseher</h2>
          <p className="mt-[16px] text-2xl">
            Streamen Sie mit Smart-TVs, Playstation, Xbox, Chromecast, Apple TV,
            Blu-ray-Player u. v. m.
          </p>
          <div className="my-[16px]"></div>
        </div>
        {/* -------------- right side / img part --------------------- */}
        <div className="pl-[6px] relative">
          <div>
            {/* -------------- image "screen frame" --------------------- */}
            <img
              className="box-content overflow-clip w-[100%] border-0"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt=""
            />
            {/* --------- div for the running video in the screen ------- */}
            <div className="-z-1 overflow-hidden w-[100%] max-w-[73%] h-[100%] max-h-[54%] top-[46%] left-[50%] -translate-y-2/4 -translate-x-2/4 block absolute">
              <video
                className="inline-block object-contain box-content overflow-clip"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
