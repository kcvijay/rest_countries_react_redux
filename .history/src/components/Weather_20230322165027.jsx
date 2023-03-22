import React from "react";

const Weather = ({
  name,
  capital,
  temp,
  icon,
  tempMax,
  tempMin,
  condition,
  visibility,
  wind,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Current Weather</h2>
      <p className="text-xl text-slate-400">
        {name} / {capital}
      </p>

      <p className="text-[56px] text-slate-500 font-bold">
        {temp}°<span className="text-[32px]">C</span>
      </p>

      <p className="text">
        <span className="font-bold inline-block w-[90px]">Min:</span> {tempMin}
        °C
      </p>
      <p>
        <span className="font-bold inline-block w-[90px]">Max:</span> {tempMax}
        °C
      </p>
    </div>
  );
};

export default Weather;
