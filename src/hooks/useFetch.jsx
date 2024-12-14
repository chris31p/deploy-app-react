import { useState, useEffect } from "react"

const useFetch = (url, update) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if(!response.ok){
          throw new Error('Network response was not OK');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
      finally {
        setLoading(false);
      }
    }
    fetchData();  
  }, [url, update])
  

  return {data, loading, error};
};

export default useFetch