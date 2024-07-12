import React from "react";

const BodyScreen = async () => {
  const res = await fetch("http://localhost:3000/api/hero", {
    cache: "no-cache",
    next: {
      tags: ["hero"],
    },
  });

  const data = await res.json();

  console.log(data);
  return (
    <div className="m-2 border rounded-md w-[calc(100vw-15px)] h-[calc(100vh-120px)]">
      <div className="w-[97.6%] border h-[500px] rounded-md m-4 grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-2 bg-red-300 h-[300px] p-4">
          <div
            className={`font-bold text-[20px] mb-4 ${
              data?.data[0]?.color && `text-[${data?.data[0]?.color}]`
            } `}
          >
            {data?.data[0]?.title}
          </div>
          <div>{data?.data[0]?.desc}</div>
        </div>
        <div className="bg-blue-500 col-span-3 h-[300px]">image</div>
      </div>
    </div>
  );
};

export default BodyScreen;
