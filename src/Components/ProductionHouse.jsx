import React from "react";

import disney from "./../assets/images/disney.png";
import marvel from "./../assets/images/marvel.png";
import nationalIG from "./../assets/images/nationalG.png";
import pixar from "./../assets/images/pixar.png";
import starwar from "./../assets/images/starwar.png";

import starwarV from "./../assets/Videos/star-wars.mp4";
import disneyV from "./../assets/Videos/disney.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import nationalGeographicV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";

function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalIG,
      video: nationalGeographicV,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {productionHouseList.map((item) => (
        <div className="border-[2px] rounded-lg border-gray-600 hover:scale-110 transition-all duration-300 cursor-pointer relative shadow-xl shadow-gray-800">
          <video src={item.video} autoPlay loop playsInline muted className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50" />
          <img src={item.image} className="w-full z-[1]" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
