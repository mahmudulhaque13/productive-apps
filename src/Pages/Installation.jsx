import React, { useEffect, useState } from "react";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("install"));
    if (saveList) setInstalled(saveList);
  }, []);

  return (
    <div>
      <h1 className="text-center">Your Installed Apps</h1>
      <p className="text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between">
        <p>{installed.length} Apps Found</p>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Size</option>
            <option value="size-dsc">High-Low</option>
            <option value="size-asc">Low-High</option>
          </select>
        </label>
      </div>
      <div className="space-y-3">
        {installed.map((app) => (
          <div className="card card-side bg-base-100 shadow-sm">
            <figure>
              <img src={app.image} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{app.title}</h2>
              <div className="flex space-x-4">
                <span>{app.downloads}</span>
                <span>{app.ratingAvg}</span>
                <span>{app.size}mb</span>
              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Uninstall</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
