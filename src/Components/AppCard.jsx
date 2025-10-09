import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { id, image, downloads, title, ratingAvg } = app;
  return (
    <Link to={`/app/${id}`}>
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
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
