import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import { CiSearch } from "react-icons/ci";

const Apps = () => {
  const [apps] = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-4xl mt-20">
          Our All Applications
        </h1>
        <p className="text-center mt-10 text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex justify-between m-10">
          <p className="font-bold">({searchedApps.length})Apps Found</p>
          <label className="input">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="search Apps"
            />
          </label>
        </div>
      </div>
      <div className="gap-5  grid place-items-center grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {searchedApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
