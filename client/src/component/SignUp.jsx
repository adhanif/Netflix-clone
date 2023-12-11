import React from "react";
import NetflixLogo from "../assets/netflix-3.svg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full md:bg-hero-image bg-no-repeat bg-center bg-fixed bg-cover ">
      <div className="min-h-screen w-full bg-background sm:w-full ">
        <div className="p-7">
          <img
            src={NetflixLogo}
            alt=""
            className="h-[1.8rem] w-[6rem]   lg:h-[2.5rem] lg:w-[10rem] cursor-pointer"
            onClick={handleNavigate}
          />
        </div>
        <div className="container md:w-[29rem] mx-auto  px-16 py-14 rounded bg-black bg-opacity-70 mb-10">
          <h1 className="text-[2rem] font-medium text-white mb-8">Signup</h1>

          <div className="relative mb-3">
            <input
              type="email"
              className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput1"
              placeholder="name@example.com"
            />
            <label
              htmlFor="floatingInput"
              className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              Username
            </label>
          </div>

          <div className="relative mb-3">
            <input
              type="email"
              className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label
              htmlFor="floatingInput"
              className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              Email or phone number
            </label>
          </div>

          <div className="relative mb-3">
            <input
              type="password"
              className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingPassword"
              placeholder="Password"
            />
            <label
              htmlFor="floatingPassword"
              className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              Password
            </label>
          </div>
          <div>
            <button
              type="button"
              className="text-[16px] w-full font-[500] text-white bg-netCol hover:bg-netColHover py-[0.8rem] px-[2rem] rounded cursor-pointer mt-10  mb-3"
            >
              Sign Up
            </button>
          </div>

          <div className="flex  justify-between">
            <div>
              <p className="text-[13px] text-gray-400  cursor-pointer hover:underline">
                Need help?
              </p>
            </div>
          </div>
          <p className="text-[16px] mt-5" style={{ color: "#737373" }}>
            Already have Netflix?{" "}
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={handleLogin}
            >
              Sign in now.
            </span>
          </p>
          <p className="text-[13px] mt-5" style={{ color: "#737373" }}>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <span
              className="text-blue cursor-pointer hover:underline"
              style={{ color: "#0071eb" }}
            >
              Learn more.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
