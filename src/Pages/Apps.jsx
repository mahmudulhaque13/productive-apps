import React from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";

const Apps = () => {
  const { apps } = useApps();
  return (
    <div>
      <div>
        <h1 className="text-center">Our All Applications</h1>
        <p className="text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex justify-between">
          <p>({apps.length})Apps Found</p>
          <input
            className="border-1 border-gray-100"
            type="text"
            placeholder="search Apps"
          />
        </div>
      </div>
      <div className="gap-5  grid place-items-center grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {apps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
