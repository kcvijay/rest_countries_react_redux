import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import SingleCountry from "./components/SingleCountry";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Favorites from "./components/Favorites";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route "/favorites" element={<Favorites />} />
          <Route path="/:singlecountry" element={<SingleCountry />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
