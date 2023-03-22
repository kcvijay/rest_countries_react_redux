import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFav } from "../features/countries/countrySlice";
import { Link } from "react-router-dom";

const CountryCard = ({
  cca3,
  name,
  flag,
  officialName,
  population,
  capital,
  continent,
}) => {
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  const addToFavHandler = (index) => {
    dispatch(addToFav(index));
    setAddedToFavorites(true);
  };

  return (
    <Link to={`/${cca3}`}>
      <div className="w-[330px] h-[430px] border border-sky-100 rounded-md shadow-md  overflow-hidden cursor-pointer hover:shadow-none duration-300 -z-10">
        <img
          className="h-[220px] w-[330px] object-cover shadow-sm"
          src={flag}
          alt="flag of a country"
        />

        <div className="p-4">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-slate-400">{officialName}</p>
          <ul className="mt-2">
            <li>
              <span className="inline-block w-[130px] font-bold">
                Population:{" "}
              </span>
              {population}
            </li>

            <li>
              <span className="inline-block w-[130px] font-bold">
                Capital:{" "}
              </span>
              {capital}
            </li>

            <li>
              <span className="inline-block w-[130px] font-bold">
                Continent:{" "}
              </span>
              {continent}
            </li>
            <li>
              <button
                className={`flex justify-evenly gap-4 items-center border px-4 py-2 rounded-md mt-6 ${
                  addedToFavorites ? "bg-yellow-400" : ""
                }`}
                onClick={(index) => addToFavHandler(index)}
              >
                <p>
                  {addedToFavorites ? "Added to Favorites" : "Add to Favorites"}
                </p>
                <p className="material-icons">star</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
