import React from "react";
import Banner from "../Components/Banner";
import { Link, NavLink } from "react-router";
import AppCard from "../Components/AppCard";
import useApps from "../Hooks/useApps";

const Home = () => {
  // const AllApps = useLoaderData();
  const [apps, loading, error] = useApps();

  const TrendingApp = apps.slice(0, 8);
  return (
    <div>
      <Banner></Banner>
      <div className="my-10">
        <div className="my-10">
          <h1 className="text-center font-bold text-3xl">Trending Apps</h1>
          <p className="text-center text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="gap-5  grid place-items-center grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-4">
          {TrendingApp.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
        <div className="flex justify-center items-center my-5">
          <NavLink className="btn btn-outline bg-violet-400" to="/apps">
            Show All
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
