import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="min-h-[150px] text-center bg-slate-800 text-white py-8">
      <p className="text-lg">&copy; Vijay KC, {year}</p>
      <p>
        Data provided by{" "}
        <Link
          className="hover:underline"
          to="https://restcountries.com"
          target="_blank noreferer"
        >
          RestCountries
        </Link>{" "}
        and{" "}
        <Link
          className="hover:underline"
          to="https://openweatermap.org"
          target="_blank noreferer"
        >
          OpenWeatherMap
        </Link>
      </p>
      <p>
        Source code is available at{" "}
        <Link
          className="hover:underline"
          to="https://github.com"
          target="_blank noreferer"
        >
          GitHub
        </Link>
      </p>
    </div>
  );
};

export default Footer;
