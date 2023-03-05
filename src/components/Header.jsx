import React from "react";

const Header = () => {
  return (
    <header className="bg-sky-500 flex justify-between items-center py-4 px-8 flex-wrap gap-4 shadow-md sticky top-0 z-999">
      <div>
        <h1 className="text-3xl text-white space-2 font-bold tracking-wide">
          REST Countries
        </h1>
        <p className="text-xl text-white">React & Redux</p>
      </div>
      <div>
        <button className="border border-white py-2 px-4 text-white rounded-md mr-4 hover:bg-white hover:text-sky-500 duration-300">
          Sign Up
        </button>
        <button className="border bg-white border-white py-2 px-4 text-sky-500 rounded-md  hover:bg-sky-500 hover:text-white duration-300">
          Log In
        </button>
      </div>
    </header>
  );
};

export default Header;
