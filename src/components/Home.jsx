import React, { useEffect, useState } from "react";
import axios from "axios";

import CountryCard from "./CountryCard";
import loader from "../assets/loader.gif";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
    setIsLoading(false);
  }, []);

  const allCountries = countries.map((country) => {
    return (
      <CountryCard
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
      <div className="flex justify-center items-center">
        <img src={loader} alt="Loader animation" />
      </div>
    );
  }

  return (
    <div className="mx-8 my-16 flex justify-center content-center flex-wrap gap-8">
      {allCountries}
    </div>
  );
};

export default Home;
