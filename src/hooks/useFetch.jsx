import { useEffect, useState } from "react";
import { fetchData } from "../utils/apiFetch";

const useFetch = (endPoint) => {
  const [data, setData] = useState();
  console.log(endPoint)

  useEffect(async () => {
    makeApiCall();
  }, [endPoint]);

  const makeApiCall = async () => {
    const res = await fetchData(endPoint);
    console.log(res);
    setData(res);
  };

  return data;
};

export default useFetch;
