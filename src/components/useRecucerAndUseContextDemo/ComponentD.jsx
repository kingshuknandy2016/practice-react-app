import React, { useContext } from "react";
import { CountContext } from "./../../App";

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Displaying Content of Component D
      <button
        onClick={() => {
          countContext("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          countContext("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          countContext("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ComponentD;
