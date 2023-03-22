import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import appid from ""

import loader from "../assets/loader.gif";
import Weather from "./Weather";

const SingleCountry = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState({
    officialName: "",
    commonName: "",
    continents: "",
    flag: "",
    population: "",
    capital: "",
    currencies: "",
    languages: "",
    borders: [],
  });
  const [weather, setWeather] = useState({
    temp: "",
    tempMin: "",
    tempMax: "",
    icon: "",
    condition: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const pageRedirectHandler = (el) => {
    return navigate(`/${el}`, { replace: false });
  };

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`https://restcountries.com/v3.1/alpha?codes=${params.singlecountry}`)
      .then((res) => {
        setCountry({
          ...country,
          officialName: res.data[0]?.name?.official,
          commonName: res.data[0]?.name?.common,
          continents: res.data[0]?.continents,
          flag: res.data[0]?.flags?.svg,
          population: res.data[0]?.population,
          capital: res.data[0]?.capital || res.data[0]?.name.common,
          currencies: res.data[0]?.currencies,
          languages: res.data[0]?.languages,
          borders: res.data[0]?.borders,
        });
        setIsLoading(false);
      });
  }, [params]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${appid}
      )
      .then((res) =>
        setWeather({
          ...weather,
          temp: res.data?.main?.temp || "-",
          tempMin: res.data?.main?.temp_min || "-",
          tempMax: res.data?.main?.temp_max || "-",
          condition: res.data?.weather[0]?.description || "-",
          icon: res.data?.weather[0]?.icon || "-",
        })
      );
  }, [country]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center m-16">
        <img className="backdrop" src={loader} alt="Loader animation" />
      </div>
    );
  }
  return (
    <div className="max-w-[1200px] my-16 mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-8">
        <figure>
          <img
            className="shadow-md max-h-[220px] max-w-[320px] "
            src={country.flag}
            alt={`Flag of ${country.commonName}`}
          />
          <div className="mt-4">
            <h2 className="text-2xl font-bold">{country.commonName}</h2>
            <p className="text-xl text-slate-400">{country.officialName}</p>
          </div>
        </figure>

        <div>
          <ul>
            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Continent:
              </span>
              {country.continents}
            </li>
            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Capital:
              </span>
              {country.capital || "***"}
            </li>

            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Population:
              </span>
              {country.population.toLocaleString()}
            </li>
            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Currency/ies:
              </span>
              <span className="overflow-x-scroll">
                {country.currencies
                  ? Object.values(country.currencies)
                      .map((el) => el.name)
                      .join(", ")
                  : "***"}
              </span>
            </li>
            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Language/s:
              </span>
              {country.languages
                ? Object.values(country.languages)
                    .map((el) => el)
                    .join(", ")
                : "***"}
            </li>
            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Border countries:
              </span>
              <div className="flex flex-wrap justify-start items-center">
                {country.borders
                  ? country.borders?.map((el) => (
                      <span
                        onClick={() => pageRedirectHandler(el)}
                        key={el}
                        className="bg-sky-500 px-4 py-2 text-white my-2 mr-2 rounded-md shadow-md cursor-pointer text-wrap hover:bg-white hover:text-sky-500 active:shadow-none duration-300"
                      >
                        {el}
                      </span>
                    ))
                  : "***"}
              </div>
            </li>
          </ul>
        </div>
        <Weather
          name={country.commonName}
          capital={country.capital}
          temp={weather.temp ? (weather.temp - 273.15).toFixed(0) : "_"}
          tempMin={weather.temp ? (weather.tempMin - 273.15).toFixed(0) : "_"}
          tempMax={weather.temp ? (weather.tempMax - 273.15).toFixed(0) : "_"}
          condition={weather.condition}
          icon={weather.icon}
        />
      </div>
      <div className="flex justify-between mt-24">
        <button
          onClick={() => navigate(-1)}
          className="border py-2 px-4 mx-2 rounded-md shadow-md hover:bg-sky-400 hover:text-white duration-300"
        >
          &larr;&nbsp;Back
        </button>
        <button
          className="border py-2 px-4 mx-2 rounded-md shadow-md hover:bg-sky-400 hover:text-white duration-300"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default SingleCountry;
