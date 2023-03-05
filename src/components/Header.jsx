import React from "react";

const Header = () => {
  return (
    <header className="bg-sky-500 flex justify-between items-center py-4 px-8 flex-wrap gap-4 shadow-md sticky top-0">
      <div>
        <h1 className="text-3xl text-white space-2 font-bold tracking-wide">
          REST Countries
        </h1>
        <p className="text-xl text-white">React & Redux</p>
      </div>

      <form>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="search.."
          autoComplete="off"
          className="p-2 w-full md:w-[300px] rounded-md focus:outline-sky-400"
        />
      </form>
    </header>
  );
};

export default Header;
