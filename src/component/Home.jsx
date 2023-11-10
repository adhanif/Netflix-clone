import React from "react";
import Section from "./Section2";
import HeroSection from "./HeroSection";
import tv from "../assets/tv.png";
import tvVideo from "../assets/tvVideo.mp4";
import device from "../assets/device.png";
import deviceVideo from "../assets/deviceVideo.mp4";
import kids from "../assets/kids.png";
import mobile from "../assets/mobile.jpg";

const Home = () => {
  return (
    <>
      <HeroSection />

      <Section
        flexDirectionClasses={"flex flex-col lg:flex-row"}
        heading={"Enjoy on your TV"}
        paragraph={
          "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        }
        image={tv}
        video={tvVideo}
        videoDivClasses={
          "w-[100%]   max-w-[73%] h-[100%] max-h-[54%] top-[46%] left-[50%]"
        }
      />
      <div className="py-1 bg-strip"></div>
      <Section
        flexDirectionClasses={"flex flex-col lg:flex-row-reverse"}
        heading={"Watch everywhere"}
        paragraph={
          "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        }
        image={device}
        video={deviceVideo}
        videoDivClasses={
          "sm:w-[63%] md:max-w-[63%] h-[100%] max-h-[54%] top-[37%] left-[49%]"
        }
      />
      <div className="py-1 bg-strip"></div>
      <Section
        flexDirectionClasses={"flex flex-col lg:flex-row-reverse"}
        heading={"Create profiles for kids"}
        paragraph={
          "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        }
        image={kids}
      />
      <div className="py-1 bg-strip"></div>
      <Section
        flexDirectionClasses={"flex flex-col lg:flex-row-reverse"}
        heading={"Download your shows to watch offline"}
        paragraph={"Watch on a plane, train, or submarine..."}
        image={mobile}
      />
      <div className="py-1 bg-strip"></div>
    </>
  );
};

export default Home;
