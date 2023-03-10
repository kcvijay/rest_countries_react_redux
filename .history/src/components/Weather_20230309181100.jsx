import React from "react";

const Weather = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Current Weather</h2>
      <p className="text-xl text-slate-400">{country[0]?.name?.common}</p>
      <p className="text-[56px] text-slate-500 font-bold">
        {weather?.main?.temp ? (weather?.main?.temp - 273.15).toFixed(0) : "-"}
        °C
      </p>
    </div>
  );
};

export default Weather;
