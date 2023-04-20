import { useCallback, useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(counter + 1);
  }, []);

  return { increment, counter };
};

export default useCounter;
