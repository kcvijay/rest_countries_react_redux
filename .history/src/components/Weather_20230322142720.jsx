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

      <div className="flex justify-start">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
        />
        <p className="text-[56px] text-slate-500 font-bold">
          {temp}°<span className="text-[32px]">C</span>
        </p>
      </div>
      <p className="capitalize">{condition}</p>

      <p className="text">
        <span className="font-bold inline-block w-[120px]">Min:</span> {tempMin}
        °C &mdash; <span className="font-bold">Max:</span> {tempMax}°C
      </p>
      <p className="text">
        <span className="font-bold">Visibility: </span>
        {visibility}
      </p>
      <p className="text">
        <span className="font-bold">Wind Speed: </span>
        {wind}
      </p>
    </div>
  );
};

export default Weather;
