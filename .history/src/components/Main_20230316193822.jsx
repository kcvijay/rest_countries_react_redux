import React from "react";

import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex-1">
      <Outlet />
    </div>
  );
};

export default Main;
