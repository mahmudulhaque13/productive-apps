import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { FiDownload } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const AppsDetails = () => {
  const { id } = useParams();
  const [apps, loading] = useApps();
  const [isInstalled, setIsInstalled] = useState(false);

  const app = apps.find((app) => String(app.id) === id);

  useEffect(() => {
    if (!app) return;
    const installedList = JSON.parse(localStorage.getItem("install")) || [];
    const alreadyInstalled = installedList.some((ap) => ap.id === app.id);
    setIsInstalled(alreadyInstalled);
  }, [app]);

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
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your App has been installed",
      showConfirmButton: false,
      timer: 1500,
    });

    const existingList = JSON.parse(localStorage.getItem("install")) || [];
    const isExist = existingList.some((ap) => ap.id === app.id);
    if (isExist) {
      setIsInstalled(true);
      return;
    }
    const updatedList = [...existingList, app];
    localStorage.setItem("install", JSON.stringify(updatedList));
    setIsInstalled(true);
  };

  return (
    <div className="bg-gray-100 ">
      <div className="flex flex-col lg:flex-row gap-10 my-10">
        <div>
          <img className="w-56 h-56 bg-white" src={image} alt="" />
        </div>
        <div>
          <div className="pb-5">
            <h1 className="font-bold text-xl mb-3">{title}</h1>
            <p className="text-gray-500">
              Developed by
              <span className="text-violet-600 font-bold"> productive.io</span>
            </p>
          </div>
          <div className="flex gap-10">
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
            disabled={isInstalled}
            className={`mt-5 p-2 rounded-sm text-white transition
              ${
                isInstalled
                  ? "bg-green-500 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }
            `}
          >
            {isInstalled ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <div>
        <h1 className="font-bold p-10 text-xl">Ratings</h1>
        <BarChart width={400} height={300} data={ratings}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="count" fill="orange" />
        </BarChart>
      </div>

      <div>
        <h1 className="font-bold p-10 text-xl">Description</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppsDetails;
