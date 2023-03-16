import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allCountires } from "../features/countries/countriesAction";
import { reset } from "../features/countries/countriesSlice";

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
  return (
    <Link to={`${cca3}`}>
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
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
