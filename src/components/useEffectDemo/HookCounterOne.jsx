import { useEffect } from "react";
import { useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`Updating Document Title`);
    document.title = `You Clicked ${count} times`;

    return () => {
      console.log(`CleanUp Code Running`);
    };
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounterOne;
