import { revalidateTag } from "next/cache";
import React from "react";

const page = async () => {
  const res = await fetch("http://localhost:3000/api/hero", {
    cache: "no-cache",
    next: {
      tags: ["hero"],
    },
  });

  const data = await res.json();

  const mainActionPost = async (formData: FormData) => {
    "use server";
    const title = formData.get("title");
    const desc = formData.get("desc");
    const image = formData.get("image");

    await fetch(`http://localhost:3000/api/hero`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ title, desc, image }),
    });

    revalidateTag("hero");
  };

  const mainActionUpdate = async (formData: FormData) => {
    "use server";
    const title = formData.get("title");
    const desc = formData.get("desc");
    const image = formData.get("image");
    const color = formData.get("color");

    await fetch(`http://localhost:3000/api/hero/${data?.data[0]._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ title, desc, image, color }),
    });

    revalidateTag("hero");
  };

  return (
    <div className="px-6">
      <p className="text-[20px] font-bold my-10 text-center border-b pb-3">
        Hero Section
      </p>

      <div className="my-10" />
      <input className="border" type="color" />
      <input className="border" type="range" />
      <div className="my-10" />

      <form
        action={data?.data.length === 0 ? mainActionPost : mainActionUpdate}
        className="w-[300px]"
      >
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-[12px] mb-1">Hero Color</label>
          <input
            defaultValue={data?.data[0]?.color}
            placeholder="Hero Title Color"
            name="color"
            type="text"
            className="pl-2 border rounded-md h-[45px]"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-[12px] mb-1">Hero Title</label>
          <input
            defaultValue={data?.data[0]?.title}
            placeholder="Hero title"
            name="title"
            type="text"
            className="pl-2 border rounded-md h-[45px]"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-[12px] mb-1">Hero Desc</label>
          <input
            defaultValue={data?.data[0]?.desc}
            placeholder="Hero Desc"
            name="desc"
            type="text"
            className="pl-2 border rounded-md h-[45px]"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-[12px] mb-1">Hero Image</label>
          <input
            placeholder="Hero Image"
            name="image"
            type="text"
            className="pl-2 border rounded-md h-[45px]"
          />
        </div>

        <button
          className="w-full items-center justify-center bg-black text-white rounded-md h-[50px]"
          type="submit"
        >
          {data?.data.length === 0 ? "Submit Hero Data" : "Update Hero Data"}
        </button>
      </form>
    </div>
  );
};

export default page;
