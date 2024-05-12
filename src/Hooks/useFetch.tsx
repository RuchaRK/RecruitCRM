import * as React from "react";
import axios from "axios";

export function useFetch<T>(api: string): {
  data?: T;
  loading: boolean;
  error: boolean;
  setData: (data: T) => void;
} {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState<T>();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(api);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      setError(true);
      throw new Error(error as string);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return { loading, error, data, setData };
}
