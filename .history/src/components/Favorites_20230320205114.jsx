import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favItems = useSelector((state) => state.favorites.favorites);

  console.log(favItems);
  return (
    <div>
      <h2>favorites</h2>
    </div>
  );
};

export default Favorites;
