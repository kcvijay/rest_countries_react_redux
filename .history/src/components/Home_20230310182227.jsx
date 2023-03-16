import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { allCountires } from "../features/countries/countriesAction";
import { reset } from "../features/countries/countriesSlice";

import CountryCard from "./CountryCard";
import loader from "../assets/loader.gif";

const Home = () => {
  const { countriesData, loading, success, error } = useSelector(
    (state) => state.country
  );

  const dispatch = useDispatch();

  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    dispatch(allCountires());

    if (success) {
      setCountryData();
    }
  }, []);

  // const changeHandler = (e) => {
  //   setSearch({ ...search, [e.target.name]: e.target.value });
  // };

  // const filteredCountries = countries.filter((el) => {
  //   return el.name.common.toLowerCase().includes(search.search.toLowerCase());
  // });

  const allCountries = filteredCountries
    .sort((a, b) => {
      return a.name.common.toUpperCase() < b.name.common.toUpperCase()
        ? -1
        : a.name.common.toUpperCase() > b.name.common.toUpperCase()
        ? 1
        : 0;
    })
    .map((country) => {
      return (
        <CountryCard
          key={country.name.common}
          cca3={country.cca3}
          name={country.name.common}
          flag={country.flags.svg}
          officialName={country.name.official || "***"}
          population={country.population.toLocaleString()}
          capital={country.capital || "***"}
          continent={country.continents[0]}
        />
      );
    });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center m-16">
        <img src={loader} alt="Loader animation" />
      </div>
    );
  }

  return (
    <div>
      <form className="mt-16 flex justify-center">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="search.."
          autoComplete="off"
          className="p-2 w-full md:w-[500px] mx-4 border rounded-md shadow-md focus:outline-slate-100 focus:shadow-none duration-300"
          onChange={changeHandler}
        />
      </form>
      <div className="mx-8 my-16 flex justify-center content-center flex-wrap gap-8 -z-10">
        {allCountries}
      </div>
    </div>
  );
};

export default Home;
