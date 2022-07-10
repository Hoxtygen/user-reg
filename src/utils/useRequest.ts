import axios from "axios";
import { FormikValues } from "formik";
import { useState } from "react";

export default function useRequest() {
  const [error, setError] = useState(null);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const makeRequest = async (url: string, formData: FormikValues) => {
    setLoading(true);
    try {
      const response = await axios({
        method: "post",
        url: url,
        data: formData,
      });
      setData(response.data.paymentDataId);
      setError(null);
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      setError(err.message);
    }
  };
  return { makeRequest, error, data, loading };
}
