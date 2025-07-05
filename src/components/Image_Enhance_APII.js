import axios from "axios";

// const API_KEY = import.meta.env.VITE_API_KEY;
const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = "https://techhk.aoscdn.com";

const enhancedImageAPI = async (file) => {
  try {
    const task_id = await uploadImage(file);
    console.log("Image Uploaded Successfully at task_Id:", task_id);

    const enhancedImage = await GetImage(task_id);
    console.log("Image Enhanced Successfully");

    return enhancedImage;
  } catch (error) {
    console.error("Error in Enhancing Image:", error);
    throw error;
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data?.task_id) {
    throw new Error("Failed to Upload Image");
  }

  return data.data.task_id;
};

const GetImage = async (task_id) => {
  let result;
  let maxRetries = 10;
  let retries = 0;

  do {
    result = await ImagePolling(task_id);
    const state = result?.data?.state;
    const image = result?.data?.image;

    console.log(`Polling Attempt ${retries + 1}:`, { state, image });

    // Accept both 1 and 2 as "complete/success"
    if ((state === 1 || state === 2) && image) {
      console.log("Enhanced Image URL:", image);
      return image;
    }

    // Failure
    if (state === 3) {
      throw new Error("Enhancement failed on server side (state 3).");
    }

    // Wait before retry
    await new Promise((res) => setTimeout(res, 2000));
    retries++;
  } while ((result?.data?.state === 4 || result?.data?.state === 0) && retries < maxRetries);

  throw new Error("Enhanced image not available.");
};



const ImagePolling = async (task_id) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${task_id}`,
    {
      headers: { "X-API-KEY": API_KEY },
    }
  );
  return data;
};

export default enhancedImageAPI;
