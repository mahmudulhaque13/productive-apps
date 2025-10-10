import React from "react";
import { Link } from "react-router";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";

const AppCard = ({ app }) => {
  const { id, image, downloads, title, ratingAvg } = app;
  return (
    <Link to={`/app/${id}`}>
      <div>
        <div className="card bg-base-100 w-80 shadow-sm">
          <figure className="m-auto">
            <img className="h-48 w-48" src={image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">{title}</h2>

            <div className="flex justify-between">
              <span className="flex justify-center items-center px-1 text-green-600 font-bold border-1 border-gray-200 bg-gray-100 rounded-sm">
                <FiDownload />
                {downloads}M
              </span>
              <span className="p-1 flex justify-center items-center text-[#FF8811] border-1 border-gray-100 rounded-sm bg-[#FFF0E1]  ">
                <FaStar />
                {ratingAvg}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
