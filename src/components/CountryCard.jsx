import React from "react";

const CountryCard = ({
  name,
  flag,
  officialName,
  population,
  capital,
  continent,
}) => {
  return (
    <div className="w-[330px] border border-sky-100 rounded-md shadow-md  overflow-hidden cursor-pointer  hover:-translate-y-1 hover:shadow-none duration-300">
      <img
        className="h-[220px] w-[330px] object-cover border-b-2 border-b-slate-100"
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
            <span className="inline-block w-[130px] font-bold">Capital: </span>
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
  );
};

export default CountryCard;
