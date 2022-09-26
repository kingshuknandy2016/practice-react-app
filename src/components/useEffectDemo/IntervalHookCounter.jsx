import { useEffect } from "react";
import { useState } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const tick = () => {
    setCount(count + 1);
  };

  return <h1>{count}</h1>;
}

export default IntervalHookCounter;
