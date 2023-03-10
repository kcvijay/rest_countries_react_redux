import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

import loader from "../assets/loader.gif";

const SingleCountry = () => {
  const params = useParams();
  const nav = useNavigate();
  const [country, setCountry] = useState([]);
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://restcountries.com/v3.1/alpha?codes=${params.singlecountry}`)
      .then((res) => {
        setCountry(res.data);
        setIsLoading(false);
      });
  }, [params]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=${country[0]?.latlng[0]}&lon=${country[0]?.latlng[1]}&appid=645c2dc9bdf404bc19b5ee2818538af9`
  //     )
  //     .then((res) => setWeather(res.data));
  // }, [country]);

  console.log(weather);

  const clickBorderHandler = (el) => {
    nav(`/${el}`, { replace: false });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center m-16">
        <img className="backdrop" src={loader} alt="Loader animation" />
      </div>
    );
  }
  return (
    <div className="max-w-[1200px] my-16 mx-auto">
      <div className="flex justify-between">
        <button
          onClick={() => nav(-1)}
          className="border py-2 px-4 mx-2 rounded-md shadow-md hover:bg-sky-400 hover:text-white duration-300"
        >
          &larr;&nbsp;Back
        </button>
        <button
          className="border py-2 px-4 mx-2 rounded-md shadow-md hover:bg-sky-400 hover:text-white duration-300"
          onClick={() => nav("/")}
        >
          Home
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-8">
        <figure>
          <div className="mb-4">
            <h2 className="text-2xl font-bold">{country[0]?.name?.common}</h2>
            <p className="text-xl text-slate-400">
              {country[0]?.name?.official}
            </p>
          </div>

          <img
            className="shadow-md max-h-[240px] max-w-[350px] "
            src={country[0]?.flags?.svg}
            alt={`Flag of ${country[0]?.name?.common}`}
          />
        </figure>

        <div>
          <ul>
            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Continent:
              </span>
              {country[0]?.continents[0]}
            </li>
            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Capital:
              </span>
              {country[0]?.capital || "***"}
            </li>

            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Population:
              </span>
              {country[0]?.population.toLocaleString()}
            </li>
            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Currency/ies:
              </span>
              <span className="overflow-x-scroll">
                {country[0]?.currencies
                  ? Object.values(country[0]?.currencies)
                      .map((el) => el.name)
                      .join(", ")
                  : "***"}
              </span>
            </li>
            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Language/s:
              </span>
              {country[0]?.languages
                ? Object.values(country[0]?.languages)
                    .map((el) => el)
                    .join(", ")
                : "***"}
            </li>
            <li>
              <span className="inline-block w-[160px] font-bold mb-3">
                Border countries:
              </span>
              <div className="flex flex-wrap justify-start items-center">
                {country[0]?.borders
                  ? country[0]?.borders?.map((el) => (
                      <span
                        onClick={() => clickBorderHandler(el)}
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
        <div>
          {/* <h2>{country[0]?.name?.common}</h2>
          <p>{(weather.main.temp - 273.15).toFixed(0)}°C</p>
          <p>
            Max: {(weather.main.temp_max - 273.15).toFixed(0)}, Min:{" "}
            {(weather.main.temp_min - 273.15).toFixed(0)}
          </p>
          <p>Wind: </p>
          <p style={{ textTransform: "capitalize" }}>
            {weather.weather[0].description}
          </p> */}

          <h2 className="text-2xl font-bold">Current Weather</h2>
          <p className="text-xl text-slate-400">Vietnam</p>
          <p className="text-[56px] text-slate-500 font-bold">23°C</p>
          <p className="text font-bold">Min: 20°C, Max: 30°C</p>
          <p style={{ textTransform: "capitalize" }}></p>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
