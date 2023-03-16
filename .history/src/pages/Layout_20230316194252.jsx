import React from "react";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
