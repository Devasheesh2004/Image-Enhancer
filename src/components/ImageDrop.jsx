import React from "react";

const ImageDrop = ({imageobjectreceive}) => {

  const handleClick = (e) => {
    let file = e.target.files[0];
    if(file){
      imageobjectreceive(file)
    }
  };

  return (
    <label htmlFor="fileinput">
      <div className="group flex bg-white justify-center items-center rounded-lg h-[6.5vh] w-[clamp(250px,30vw,500px)] p-[clamp(0.45rem,0.6vw,0.85rem)] shadow-md hover:cursor-pointer">
        <input
          type="file"
          id="fileinput"
          className="hidden"
          accept="image/*"
          onChange={handleClick}
        />
        <div className="flex justify-center items-center h-full w-full border-2 border-dashed rounded-lg text-[clamp(0.75rem,0.9vw,1.2rem)] text-gray-700 text-center border-gray-300 transition-colors duration-200 group-hover:border-gray-400">
          Click and drag to upload your Image
        </div>
      </div>
    </label>
  );
};

export default ImageDrop;
