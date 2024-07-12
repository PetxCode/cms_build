"use client";

import React, { useState } from "react";
import DropDown from "./DropDown";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const header = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "About",
      url: "/",
    },
    {
      id: 3,
      name: "Contact",
      url: "/",
    },
    {
      id: 4,
      name: "Reach",
      url: "/",
    },
  ];
  return (
    <div className="relative w-full">
      <div className="w-full border-b h-[70px] items-center flex justify-center text-[12px]">
        <div className="flex w-[90%] h-full items-center justify-between">
          <div className="flex items-center gap-10 text-[12px] uppercase">
            <p className="font-bold ">Logo</p>
            <div className="hidden md:flex gap-1">
              {header?.map((el) => (
                <nav
                  key={el.id}
                  className="cursor-pointer hover:bg-slate-200 rounded-md py-2 px-6 duration-300 transition-all"
                >
                  {el.name}
                </nav>
              ))}
            </div>
          </div>
          <p className="hidden md:block">
            <button className="text-white bg-black py-3 px-8 rounded-md uppercase">
              Sign in
            </button>
          </p>
          <p className="block md:hidden">
            <button
              className="text-white bg-red-500 py-3 px-8 rounded-md uppercase"
              onClick={onToggle}
            >
              Menu
            </button>
          </p>
        </div>
      </div>

      {toggle && (
        <div className="absolute right-6 ">
          <DropDown header={header} onToggle={onToggle} />
        </div>
      )}
    </div>
  );
};

export default Header;
