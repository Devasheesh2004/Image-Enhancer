import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import { defineElement } from "@lordicon/element";

const Download = () => {
  useEffect(() => {
    defineElement(lottie.loadAnimation);
  }, []);

  return (
    <lord-icon
      className="h-full w-full hover:cursor-pointer transition-all duration-300"
      src="https://cdn.lordicon.com/iykgtsbt.json"
      trigger="hover"
    ></lord-icon>
  );
};

export default Download;

