import React from "react";
import Banner from "../Components/Banner";
import { Link } from "react-router";
import AppCard from "../Components/AppCard";
import useApps from "../Hooks/useApps";

const Home = () => {
  // const AllApps = useLoaderData();
  const { apps, loading, error } = useApps();

  const TrendingApp = apps.slice(0, 8);
  return (
    <div>
      <Banner></Banner>
      <div>
        <div>
          <h1 className="text-center">Trending Apps</h1>
          <p className="text-center">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="gap-5  grid place-items-center grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-4">
          {TrendingApp.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center my-5">
        <Link
          className="btn btn-outline"
          to="/apps
        "
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
