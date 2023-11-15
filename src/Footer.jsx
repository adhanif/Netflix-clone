import React from "react";

const Footer = () => {
  return (
    <div className="container flex flex-col justify-center mx-auto py-[5rem] text-gray-400 text-[0.875rem] px-10 sm:px-20 lg:px-40">
      <div>
        <ul>
          <li>
            <a href="#" className="underline text-[1rem]">
              Questions? Contact us.
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mt-5 ">
          <li>
            <a href="#" className="underline ">
              FAQ
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Cancel Membership
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Help Center
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Account
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Media Center
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Investor Relations
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Jobs
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Netflix Shop
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Redeem Gift Cards
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Buy Gift Cards
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Ways to Watch
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Privacy
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Cookie Preferences
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Impressum
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Contact Us
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Speed Test
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Legal Guarantee
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Legal Notices
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Only on Netflix
            </a>
          </li>
          <li>
            <a href="" className="underline">
              Ad Choices
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <select
          className="border rounded  sm:px-6 py-[5px] sm:py-[3px] font-medium text-sm sm:text-base"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "#fff",
          }}
        >
          <option>English</option>
          <option>Deutsch</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
