import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="min-h-[100px] text-center bg-slate-800 text-white py-4">
      <p className="text-lg">&copy; Vijay KC, {year}</p>
      <p>
        Data provided by <Link to="https://restcountries.com"></Link>
      </p>
    </div>
  );
};

export default Footer;
