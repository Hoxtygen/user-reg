import axios from "axios";
import { useState } from "react";

export default function useRequest() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const makeRequest = async (url, formData) => {
    setLoading(true);
    try {
      const response = await axios({
        method: "post",
        url: url,
        data: formData,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      setData(response.data);
      setError(null);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  return { makeRequest, error, data, loading };
}
