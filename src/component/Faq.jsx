import React from "react";
import { useState } from "react";
import FaqQuestion from "./FaqQuestion";

const Faq = () => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div className="container mx-auto px-5 lg:px-20 py-[72px] text-white flex flex-col content-center">
        <h1 className="text-[2rem] lg:text-[3rem] text-center  font-[700] sm:font-extrabold mb-5">
          Frequently Asked Questions
        </h1>
        <FaqQuestion
          question={"What can I watch on Netflix?"}
          ans={
            "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
          }
        />
        <FaqQuestion
          question={"What is Netflix?"}
          ans={`Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.  You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
        `}
        />
        <FaqQuestion
          question={"How much does Netflix cost?"}
          ans="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from €4,99 to €17,99 a month. No extra costs, no contracts."
        />
        <FaqQuestion
          question={"Where can I watch?"}
          ans="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

          You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        />
        <FaqQuestion
          question={"How do I cancel?"}
          ans="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        />
        <FaqQuestion
          question={"Is Netflix good for kids?"}
          ans="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
          Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        />

        <div className="mt-10">
          <div className="px-20">
            <h1 className="text-[1.125rem] md:text-[1.25rem] text-center   text-white mb-5">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h1>
          </div>
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
    </>
  );
};

export default Faq;
