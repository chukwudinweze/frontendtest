import { useState } from "react";
import { useCallback } from "react";

const useFetchDetail = (url) => {
  const [error, setError] = useState(null);
  const [detail, setDetail] = useState("");
  const [loading, setLoading] = useState("");

  const fetchdata = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("something");
      }
      const data = await response.json();
      console.log("dataaaaa", data);
      setDetail(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [url]);

  return { fetchdata, error, detail, loading };
};

export default useFetchDetail;
