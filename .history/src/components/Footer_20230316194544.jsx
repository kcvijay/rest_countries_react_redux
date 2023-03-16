import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="min-h-[100px] text-center bg-slate-800 text-white py-4">
      <p className="text-lg">Vijay KC, {year}</p>
    </div>
  );
};

export default Footer;
