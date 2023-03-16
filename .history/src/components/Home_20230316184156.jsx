import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { showAllCountries } from "../features/countries/countriesAction";

import CountryCard from "./CountryCard";
import loader from "../assets/loader.gif";

const Home = () => {
  const { countriesData, loading, success, error } = useSelector(
    (state) => state.countries
  );

  const dispatch = useDispatch();

  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    dispatch(showAllCountries);

    if (success) {
      setCountryData(countriesData);
    }

    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success, countriesData]);

  // const changeHandler = (e) => {
  //   setSearch({ ...search, [e.target.name]: e.target.value });
  // };

  // const filteredCountries = countries.filter((el) => {
  //   return el.name.common.toLowerCase().includes(search.search.toLowerCase());
  // });

  // const allCountries = filteredCountries
  //   .sort((a, b) => {
  //     return a.name.common.toUpperCase() < b.name.common.toUpperCase()
  //       ? -1
  //       : a.name.common.toUpperCase() > b.name.common.toUpperCase()
  //       ? 1
  //       : 0;
  //   })

  return (
    <div>
      <form className="mt-16 flex justify-center">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="search.."
          autoComplete="off"
          className="p-2 w-full md:w-[500px] mx-4 border rounded-md shadow-md focus:outline-slate-200 focus:shadow-none duration-300"
        />
      </form>
      <div className="mx-8 my-16 flex justify-center content-center flex-wrap gap-8 -z-10">
        {!loading ? (
          <div className="flex justify-center items-center m-16">
            <img src={loader} alt="Loader animation" />
          </div>
        ) : (
          countryData.map((country) => {
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
          })
        )}
      </div>
    </div>
  );
};

export default Home;
