import React from "react";

const Weather = ({ name, temp, max_temp, min_temp, condition }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Current Weather</h2>
      <p className="text-xl text-slate-400">{name}</p>
      <p className="text-[56px] text-slate-500 font-bold">
        {temp}
        °C
      </p>
      <p className="text font-bold">
        Min: {min_temp}
        &mdash; Max: {max_temp}
      </p>
      <p className="capitalize">{condition}</p>
    </div>
  );
};

export default Weather;
