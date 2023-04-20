import { useEffect, useState } from "react";

const useAPI = () => {
  const [data, setData] = useState<{ name: string }>();

  useEffect(() => {
    fetch("/api")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Error");
        }
        return resp.json();
      })
      .then((resp) => {
        setData(resp);
      });
  }, []);

  return { data };
};

export default useAPI;
