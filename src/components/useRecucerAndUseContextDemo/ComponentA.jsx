import React from "react";

function ComponentA(props) {
  // const [onHandlerCall] = this.props;
  return (
    <div>
      Displaying Content of Component A
      <button
        onClick={() => {
          props.onHandlerCall("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          props.onHandlerCall("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          props.onHandlerCall("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ComponentA;
