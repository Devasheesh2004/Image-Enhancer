import React from "react";
import Download from "./Download";
import { useEffect } from "react";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { Link } from "react-router-dom";

const Preview = ({ image, loading }) => {
  useEffect(() => {
    // Define lord-icon element only once
    defineElement(lottie.loadAnimation);
  }, []);

  return (
    <div className="flex flex-col justify-between items-center rounded-lg bg-white h-full w-2/4 shadow-xl shadow-bg-slate-700">
      <div className="w-full relative bg-indigo-500 rounded-t-lg h-11 flex justify-center items-center text-white font-bold">
        <span>Enhanced Image</span>
        <span className="absolute right-[0] h-3/4 w-[3vw] flex items-center justify-center">
          <a href={image} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center h-full w-full">
            <Download />
          </a>
        </span>
      </div>

      {loading ? (
        <div className="my-4 text-gray-600 font-medium h-full w-full flex items-center justify-center">
          <lord-icon
            src="https://cdn.lordicon.com/jxhgzthg.json"
            trigger="loop"
            style={{ width: "30%", height: "30%" }}
          ></lord-icon>
        </div>
      ) : image ? (
        <div className="flex flex-col justify-between items-center w-full h-full">
          <img
            src={image}
            alt="Enhanced"
            className="object-fill w-full h-full"
          />
        </div>
      ) : (
        <div className="relative bottom-[10%]">
          <p className="text-gray-600">Nothing to Enhance</p>
        </div>
      )}
    </div>
  );
};

export default Preview;
