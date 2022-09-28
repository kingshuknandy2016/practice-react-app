import React, { useContext } from "react";
import { CountContext } from "./../../App";

function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Displaying Content of Component F
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

export default ComponentF;
