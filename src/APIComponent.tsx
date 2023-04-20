import { useEffect, useState } from "react";

const APIComponent = () => {
  const [data, setData] = useState<{ name: string }>();

  useEffect(() => {
    let isMounted = true;
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Error");
        }
        return resp.json();
      })
      .then((resp) => {
        if (isMounted) {
          setData(resp);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>{data && <div role={"contentinfo"}>Name is {data.name}</div>}</div>
  );
};

export default APIComponent;
