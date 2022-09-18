import { useCallback, useState } from "react";

const useFetchData = (url) => {
  const [response, setResponse] = useState({
    result: null,
    error: null,
    loading: false,
  });

  //   const [error,setError] = useState(null)

  const fetchData = useCallback(async () => {
    // set loading state to be true
    setResponse((prevState) => {
      return {
        ...prevState,
        loading: true,
      };
    });
    try {
      const response = await fetch(url);
      //   catch block ordinarilly won't get any error, thus throw new error to be bale to catch it
      if (!response.ok) {
        throw new Error("could not fetch data, please try again shortly");
      }
      const data = await response.json();

      //   get all fetched data
      setResponse((prevState) => {
        return {
          ...prevState,
          result: data.results,
        };
      });
    } catch (error) {
      //   set error state to true, if any error
      setResponse((prevState) => {
        return {
          ...prevState,
          error: true,
        };
      });
    }
    //   set loading state to false finally
    setResponse((prevState) => {
      return {
        ...prevState,
        loading: false,
      };
    });
  }, [url]);

  return { fetchData, response };
};

export default useFetchData;
