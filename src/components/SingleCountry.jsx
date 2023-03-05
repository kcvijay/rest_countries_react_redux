import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import loader from "../assets/loader.gif";

const SingleCountry = () => {
  const params = useParams();
  const nav = useNavigate();
  const [country, setCountry] = useState([]);
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

  console.log(country);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center m-16">
        <img src={loader} alt="Loader animation" />
      </div>
    );
  }
  return (
    <div className="max-w-[1200px] my-16 mx-auto">
      <div>
        <button
          onClick={() => nav(-1)}
          className="border py-2 px-4 rounded-md shadow-md hover:bg-sky-400 hover:text-white duration-300"
        >
          &larr;&nbsp;Back
        </button>
      </div>
      <div className="grid md:grid-cols-3 mt-8">
        <img src={country.flags?.svg} alt="" />
        <div>Details</div>
        <div>Weather</div>
      </div>
    </div>
  );
};

export default SingleCountry;
