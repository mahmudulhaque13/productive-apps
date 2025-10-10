import React from "react";
import bannerImage from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-5xl my-10">
          We Build <br />
          <span className="font-extrabold text-[#9F62F2]">Productive</span> Apps
        </h1>
        <p className="text-gray-500 my-5">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="space-x-5 mx-auto flex justify-center my-8">
          <button className=" rounded-lg px-3 border-1 border-gray-200">
            <a
              className="flex justify-center items-center font-bold"
              href="https://play.google.com/store/games?hl=en&pli=1"
            >
              <img
                src="https://img.icons8.com/fluency/48/google-play.png"
                alt=""
              />
              Google Play
            </a>
          </button>
          <button className=" rounded-lg px-3 border-1 border-gray-200">
            <a
              className="flex justify-center items-center font-bold"
              href="https://www.apple.com/store"
            >
              <img
                src="https://img.icons8.com/fluency/48/apple-app-store.png"
                alt=""
              />
              App Store
            </a>
          </button>
        </div>
        <div>
          <img className="mx-auto" src={bannerImage} alt="" />
        </div>
        <div className="bg-[#9F62F2] text-white ">
          <h1 className="font-bold  text-3xl py-5">
            Trusted by Millions, Built for You
          </h1>
          <div className="flex flex-col justify-around md:flex-row">
            <div className="text-center my-10">
              <p>Total Downloads</p>
              <h1 className="font-bold text-4xl">29.6M</h1>
              <p>21% more than last month</p>
            </div>
            <div className="text-center my-10">
              <p>Total Reviews</p>
              <h1 className="font-bold text-4xl">906K</h1>
              <p>46% more than last month</p>
            </div>
            <div className="text-center my-10">
              <p>Active Apps</p>
              <h1 className="font-bold text-4xl">132+</h1>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
