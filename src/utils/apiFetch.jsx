import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + import.meta.env.VITE_STRAPI_KEY,
  },
};

export const fetchData = async (url) => {
  console.log(url);
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_APP_RUN + url,
      params
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchCategories = async (url) => {
  console.log(url);
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_APP_RUN + "/" + url}`
    );
    console.log(import.meta.env.VITE_APP_RUN);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
