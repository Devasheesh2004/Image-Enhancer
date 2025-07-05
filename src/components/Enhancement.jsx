import Upload from "./upload";
import Preview from "./preview";
import ImageDrop from "./ImageDrop";
import { useState } from "react";
import enhancedImageAPI from "./Image_Enhance_APII";

const Home = () => {
  const [preImage, setpreImage] = useState(null);
  const [enhanceImage, setenhancedImage] = useState(null);
  const [loading, setloading] = useState(false);

  const imageobjectreceive = async (file) => {
    console.log(URL.createObjectURL(file));

    setpreImage(URL.createObjectURL(file));
    setloading(true);

    try {
      const enhancedURL = await enhancedImageAPI(file);
      setenhancedImage(enhancedURL);
    } catch (error) {
      console.error("Enhancement error:", error.message);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <ImageDrop imageobjectreceive={imageobjectreceive} />

      <div className="flex flex-row justify-center items-center h-[35vh] lg:h-[50vh] md:h-[35vh] xl:h-[50vh] w-[90vw] md:w-[90vw] lg:w-[54vw] xl:w-[54vw] gap-[1vw] p-2">
        <Upload image={preImage} setloading={setloading} setpreImage={setpreImage} setenhancedImage={setenhancedImage} />
        <Preview image={enhanceImage} loading={loading} /> 
      </div>
    </div>
  );
};

export default Home;
