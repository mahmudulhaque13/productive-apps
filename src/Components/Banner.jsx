import React from "react";
import bannerImage from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-5xl">
          We Build <br />
          <span className="font-extrabold">Productive</span> Apps
        </h1>
        <p>
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="space-x-5 mx-auto ">
          <button className="border-1 border-gray-200"> btn1</button>
          <button className="border-1 border-gray-200">btn2</button>
        </div>
        <div>
          <img className="mx-auto" src={bannerImage} alt="" />
        </div>
        <div>
          <h1>Trusted by Millions, Built for You</h1>
          <div className="flex flex-col justify-around md:flex-row">
            <div className="text-center">
              <p>Total Downloads</p>
              <h1>29.6M</h1>
              <p>21% more than last month</p>
            </div>
            <div className="text-center">
              <p>Total Reviews</p>
              <h1>906K</h1>
              <p>46% more than last month</p>
            </div>
            <div className="text-center">
              <p>Active Apps</p>
              <h1>132+</h1>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
