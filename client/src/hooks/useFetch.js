import { useState, useEffect } from "react";
// import axios from "axios";
// import {Api} from "../api/Api";
import Api from "../api/Api"

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const { data } = await Api.get(url);
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();
  }, [url]);
  return [data, error, loading];
}
export default useFetch;
