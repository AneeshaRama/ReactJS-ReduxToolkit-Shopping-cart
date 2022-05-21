import React from "react";

const Product = ({ item }) => {
  return (
    <>
      <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center border-2 border-purple-400 gap-3 p-4 h-[350px] mt-10 ml-5  rounded-xl">
        <div className="h-[180px]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="truncate w-40 mt-3 text-gray-700 font-semibold text-lg">
            {item.title}
          </h1>
        </div>
        <div className="flex items-center justify-between w-full mt-5">
          <button className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3">
            Add to cart
          </button>
          <p>${item.price}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
