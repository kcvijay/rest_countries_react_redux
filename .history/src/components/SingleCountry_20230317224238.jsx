import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showSingleCountry } from "../features/countries/countryAction";
import { getWeather } from "../features/weather/weatherAction";

import loader from "../assets/loader.gif";
import Weather from "./Weather";

const SingleCountry = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { countryData, loading } = useSelector((state) => state.country);
  const { weatherData } = useSelector((state) => state.weather);

  const pageRedirectHandler = (el) => {
    return navigate(`/${el}`, { replace: false });
  };

  useEffect(() => {
    dispatch(showSingleCountry(params.singlecountry));
  }, [dispatch]);

  console.log(countryData[0]?.capital[0]);

  useEffect(() => {
    dispatch(
      getWeather(countryData[0]?.capital[0], process.env.REACT_APP_APP_ID)
    );
  }, [dispatch]);

  if (loading) {
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
            src={countryData[0]?.flags?.svg}
            alt={countryData[0]?.name?.common}
          />
          <div className="mt-4">
            <h2 className="text-2xl font-bold">
              {countryData[0]?.name?.common}
            </h2>
            <p className="text-xl text-slate-400">
              {countryData[0]?.name?.official}
            </p>
          </div>
        </figure>

        <div>
          <ul>
            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Continent:
              </span>
              {countryData[0]?.continents}
            </li>
            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Capital:
              </span>
              {countryData[0]?.capital || countryData[0]?.name.common}
            </li>

            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Population:
              </span>
              {countryData[0]?.population.toLocaleString()}
            </li>
            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Currency/ies:
              </span>
              <span className="overflow-x-scroll">
                {countryData[0]?.currencies
                  ? Object.values(countryData[0]?.currencies)
                      .map((el) => el.name)
                      .join(", ")
                  : "***"}
              </span>
            </li>
            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Language/s:
              </span>
              {countryData[0]?.languages
                ? Object.values(countryData[0]?.languages)
                    .map((el) => el)
                    .join(", ")
                : "***"}
            </li>
            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Border countries:
              </span>
              <div className="flex flex-wrap justify-start items-center">
                {countryData[0]?.borders
                  ? countryData[0]?.borders.map((border) => (
                      <span
                        onClick={() => pageRedirectHandler(border)}
                        key={border}
                        className="bg-sky-500 px-4 py-2 text-white my-2 mr-2 rounded-md shadow-md cursor-pointer text-wrap hover:bg-white hover:text-sky-500 active:shadow-none duration-300"
                      >
                        {border}
                      </span>
                    ))
                  : "***"}
              </div>
            </li>
          </ul>
        </div>
        <Weather
          name={countryData[0]?.name.common}
          capital={countryData[0]?.capital}
          temp={
            weatherData?.main?.temp
              ? (weatherData?.main?.temp - 273.15).toFixed(0)
              : "_"
          }
          tempMin={
            weatherData?.main?.temp_min
              ? (weatherData?.main?.temp_min - 273.15).toFixed(0)
              : "_"
          }
          tempMax={
            weatherData?.main?.temp_max
              ? (weatherData?.main?.temp_max - 273.15).toFixed(0)
              : "_"
          }
          condition={weatherData?.main?.description}
          icon={weatherData?.main?.icon}
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
