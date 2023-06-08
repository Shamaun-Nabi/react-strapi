import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + import.meta.env.VITE_STRAPI_KEY,
  },
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_APP_RUN + url,
      params
    );
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
