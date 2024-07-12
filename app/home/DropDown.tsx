import React, { FC } from "react";

interface iProps {
  header: {}[];
  onToggle?: any;
}

const DropDown: FC<iProps> = ({ header, onToggle }) => {
  return (
    <div className="w-[300px] rounded-b-md bg-slate-200 min-h-[200px]">
      <div className="pt-10 px-4">
        {header?.map((el: any) => (
          <div
            key={el.id}
            className=" w-full px-2 rounded-md h-[45px] flex items-center hover:bg-neutral-800 hover:text-white cursor-pointer transition-all duration-300 mb-2 text-[12px] font-bold uppercase
         "
            onClick={onToggle}
          >
            {el.name}
          </div>
        ))}
      </div>

      <div className="my-5 border-b border-slate-500" />

      <div className="w-full h-[50px] bg-black text-white justify-center items-center flex cursor-pointer">
        sign In
      </div>
    </div>
  );
};

export default DropDown;
