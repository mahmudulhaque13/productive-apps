import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";

const AppsDetails = () => {
  const { id } = useParams();

  const [apps, loading, error] = useApps();

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
    <div>
      <div className="card bg-base-100 w-76 shadow-sm">
        <figure className="m-auto">
          <img className="h-40 w-40" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="flex justify-between">
            <span>{downloads}</span>
            <span>{ratingAvg}</span>
          </div>
          <button
            onClick={handleInstall}
            className="border-1 border-gray-100 bg-violet-400 h-5"
          >
            Install Now {size}
          </button>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppsDetails;
