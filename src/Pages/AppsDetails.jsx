import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { FiDownload } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";

const AppsDetails = () => {
  const { id } = useParams();

  const [apps, loading] = useApps();

  const app = apps.find((app) => String(app.id) === id);
  if (loading) return <p>Loading...</p>;

  const {
    title,
    image,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
    ratings,
  } = app || {};

  const handleInstall = () => {
    const existingList = JSON.parse(localStorage.getItem("install"));
    let updatedList = [];
    if (existingList) {
      const isExist = existingList.some((ap) => ap.id === app.id);
      if (isExist) return alert("Alredy existing");
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("install", JSON.stringify(updatedList));
  };

  return (
    <div className="bg-gray-100">
      <div className="flex gap-10 my-10">
        <div>
          <img className="w-55 h-55 bg-white" src={image} alt="" />
        </div>
        <div>
          <div className="pb-5">
            <h1 className="font-bold text-xl mb-3">{title}</h1>
            <p className="text-gray-500">
              Developed by
              <span className="text-violet-600 font-bold"> productive.io</span>
            </p>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col justify-center items-center">
              <span className="text-green-500 ">
                <FiDownload />
              </span>
              <p className="text-gray-500">Downloads</p>
              <h1 className="font-bold text-2xl">{downloads}M</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-orange-500">
                <IoIosStar />
              </span>
              <p className="text-gray-500">Average Ratings</p>
              <h1 className="font-bold text-2xl">{ratingAvg}</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-violet-700">
                <BiSolidLike />
              </span>
              <p className="text-gray-500">Total Reviews</p>
              <h1 className="font-bold text-2xl">{reviews}</h1>
            </div>
          </div>
          <button
            onClick={handleInstall}
            className="mt-5 bg-green-500 text-white rounded-sm p-2"
          >
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default AppsDetails;
