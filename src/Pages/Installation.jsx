import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("install"));
    if (saveList) setInstalled(saveList);
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...installed].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "size-dsc") {
      return [...installed].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installed;
    }
  })();

  const handleUnInstall = (id) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Uninstall Successful",
      showConfirmButton: false,
      timer: 1500,
    });

    const existingList = JSON.parse(localStorage.getItem("install"));
    let updatedList = existingList.filter((app) => app.id !== id);
    setInstalled(updatedList);
    localStorage.setItem("install", JSON.stringify(updatedList));
  };

  return (
    <div>
      <h1 className="text-center font-bold text-4xl m-10">
        Your Installed Apps
      </h1>
      <p className="text-center text-gray-500">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between my-10">
        <p className="font-bold">{sortedItem.length} Apps Found</p>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Size</option>
            <option value="size-asc">Low-High</option>
            <option value="size-dsc">High-Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-2">
        {sortedItem.map((app) => (
          <div className="card h-24 card-side bg-base-100 shadow-sm">
            <figure>
              <img className="h-24 w-24" src={app.image} alt="" />
            </figure>
            <div className="card-body justify-between">
              <h2 className="card-title">{app.title}</h2>
              <div className="flex space-x-3">
                <span className="flex  justify-center items-center text-green-500">
                  <FiDownload />
                  {app.downloads}M
                </span>
                <span className="flex  justify-center items-center text-orange-500">
                  <IoIosStar />
                  {app.ratingAvg}
                </span>
                <span>{app.size}mb</span>
              </div>

              <div className="card-actions justify-end mb-5">
                <button
                  onClick={() => handleUnInstall(app.id)}
                  className="btn -mt-14 bg-green-500"
                >
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
