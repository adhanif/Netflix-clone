import React from "react";
import NetflixLogo from "../assets/netflix-3.svg";
import heroImg from "../assets/hero.jpg";

const HeroSection = () => {
  return (
    <div
      className="relative overflow-hidden bg-no-repeat bg-center bg-cover h-[700px] object-fill bg-opacity-50"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div
        className=" h-[700px] bg-opacity-50 "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
      >
        <div className="container flex flex-col sm:flex-row justify-between mx-auto items-center px-28 py-6">
          <div>
            <img src={NetflixLogo} alt="" className="h-10" />
          </div>

          <div className="flex items-center  space-x-0 sm:space-x-6 flex-col md:flex-row">
            <div>
              <select
                className="border rounded px-6 py-1 font-medium "
                style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", color: "#fff" }}
              >
                <option>English</option>
                <option>Deutsch</option>
                {/* <option>Maybe</option> */}
              </select>
            </div>
            <button
              type="button"
              className="text-sm font-medium text-white bg-netCol px-3 py-1.5 rounded cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="container mx-auto text-center mt-48 ">
          <p className="text-5xl font-custom font-extrabold text-white px-2 ">
            Unlimited movies, TV shows, and more
          </p>
          <p className="text-2xl text-white mt-5 mb-5">
            Watch anywhere. Cancel anytime
          </p>
          <p className="text-xl text-white mt-5 mb-5">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
