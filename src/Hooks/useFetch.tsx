import axios from "axios";
import * as React from "react";

export function useFetch<T>(api: string): {
  data?: T;
  loading: boolean;
  error: boolean;
  setData: (data: T) => void;
} {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState<T>();

  const fetchData = async () => {
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
