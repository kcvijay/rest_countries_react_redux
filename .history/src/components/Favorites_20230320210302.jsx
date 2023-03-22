import React from "react";
import { useSelector } from "react-redux";
import CountryCard from "./CountryCard";

const Favorites = ({ favorites }) => {
  const favItems = useSelector((state) => state.countries.favorites);

  console.log(favItems);
  return (
    <div>
      <h2>
        {favItems.map((fav) => {
          return <CountryCard {...favorites} />;
        })}
      </h2>
    </div>
  );
};

export default Favorites;
