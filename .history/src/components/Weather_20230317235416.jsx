import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../features/weather/weatherAction";

const Weather = () => {
  const dispatch = useDispatch();
  const { weatherData, loading, success } = useSelector(
    (state) => state.weather
  );
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

      <p className="text font-bold">
        Min: {tempMin}°C &mdash; Max: {tempMax}°C
      </p>
    </div>
  );
};

export default Weather;
