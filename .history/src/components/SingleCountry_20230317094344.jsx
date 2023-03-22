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

  const { singleCountryData, loading, success, error } = useSelector(
    (state) => state.country
  );
  const { weatherData } = useSelector((state) => state.weather);

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

  const pageRedirectHandler = (el) => {
    return navigate(`/${el}`, { replace: false });
  };

  useEffect(() => {
    dispatch(showSingleCountry(params.singlecountry));

    if (success) {
      setCountry({
        ...country,
        officialName: singleCountryData[0]?.name?.official,
        commonName: singleCountryData[0]?.name?.common,
        continents: singleCountryData[0]?.continents,
        flag: singleCountryData[0]?.flags?.svg,
        population: singleCountryData[0]?.population,
        capital:
          singleCountryData[0]?.capital || singleCountryData[0]?.name.common,
        currencies: singleCountryData[0]?.currencies,
        languages: singleCountryData[0]?.languages,
        borders: singleCountryData[0]?.borders,
      });
    }

    if (error) {
      return (
        <div className="absolute min-h-[100vh] min-w-[100vw] bg-black top-0 left-0 flex justify-center items-center">
          <p className="bg-white p-8">{error.message}</p>
        </div>
      );
    }
  }, [dispatch, params.singlecountry]);

  useEffect(() => {
    dispatch(getWeather(country.capital));
    if (success) {
      setWeather({
        ...weather,
        temp: weatherData?.main?.temp || "-",
        tempMin: weatherData?.main?.temp_min || "-",
        tempMax: weatherData?.main?.temp_max || "-",
        condition: weatherData?.weather[0]?.description || "-",
        icon: weatherData?.weather[0]?.icon || "-",
      });
    }
  }, [dispatch, success, country.capital]);

  if (loading) {
    return (
      <div className="flex justify-center items-center m-16">
        <img className="backdrop" src={loader} alt="Loader animation" />
      </div>
    );
  }

  console.log(weather);
  return (
    <div className="max-w-[1200px] my-16 mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-8">
        <figure>
          <img
            className="shadow-md max-h-[220px] max-w-[320px] "
            src={country.flag}
            alt={country.commonName}
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
                  ? country.borders.map((el) => (
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
