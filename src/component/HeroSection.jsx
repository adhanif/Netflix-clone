import React from "react";
import NetflixLogo from "../assets/netflix-3.svg";
import heroImg from "../assets/hero.jpg";

const HeroSection = () => {
  return (
    <div
      className="relative overflow-hidden bg-no-repeat bg-center md:h-[600px] lg:h-[700px] object-fill bg-opacity-50"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div
        className=" h-[700px] bg-opacity-50 "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
      >
        <div className=" flex flex-row justify-between  items-center px-10 xl:px-28 py-6  mx-0 xl:mx-14 ">
          <div>
            <img
              src={NetflixLogo}
              alt=""
              className="h-[1.8rem] w-[6rem]   lg:h-[2.5rem] lg:w-[10rem]"
            />
          </div>

          <div className="flex  items-center  space-x-2 lg:space-x-6  ">
            <div>
              <select
                className="border rounded  sm:px-6 py-[5px] sm:py-[3px] font-medium text-sm sm:text-base"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", color: "#fff" }}
              >
                <option>English</option>
                <option>Deutsch</option>
              </select>
            </div>
            <button
              type="button"
              className="text-sm font-bold text-white bg-netCol hover:bg-netColHover px-[1rem] sm:px-[17px] py-1.5 rounded cursor-pointer "
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="container mx-auto text-center mt-[4rem] md:mt-24 lg:mt-48 ">
          <p className="    text-3xl   lg:text-5xl font-custom font-black text-white px-2 ">
            Unlimited movies, TV shows, and more
          </p>
          <p className="text-lg  lg:text-2xl text-white mt-5 mb-5">
            Watch anywhere. Cancel anytime
          </p>
          <p className="text-lg  lg:text-2xl text-white mt-5 mb-5">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="container mx-auto flex justify-center space-x-0 sm:space-x-3 flex-col sm:flex-row px-5 sm:px-0">
            <input
              type="text"
              className="rounded px-6 py-[0.8rem] font-medium  md:w-[23rem] bg-opacity-50 bg-zinc-900 border-[1px] text-white"
              placeholder="Email address"
            />
            <button
              type="button"
              className="text-2xl font-medium text-white bg-netCol hover:bg-netColHover py-[0.8rem] px-[2rem] rounded cursor-pointer mt-5 sm:mt-0"
            >
              Get Started {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
