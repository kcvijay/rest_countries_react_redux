import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favItems = useSelector((state) => state.fav);
  return (
    <div>
      <h2>favorites</h2>
    </div>
  );
};

export default Favorites;
