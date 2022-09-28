import logo from "./logo.svg";
import React, { Component } from "react";

import "./App.css";
import ExtractDataOnBtnClick from "./components/useEffectDemo/axiosDemo/ExtractDataOnBtnClick";
import CounterOne from "./components/useReducer/CounterOne";
import CounterTwo from "./components/useReducer/CounterTwo";
import CounterThree from "./components/useReducer/CounterThree";
import ComponentA from "./components/useRecucerAndUseContextDemo/ComponentA";
import ComponentB from "./components/useRecucerAndUseContextDemo/ComponentB";
import ComponentC from "./components/useRecucerAndUseContextDemo/ComponentC";
import { useReducer } from "react";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const CountContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const callDispatchHandler = (value) => {
    return dispatch(value);
  };
  return (
    <div className="App">
      {/* <ClassComponentOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ToggleContentContainer></ToggleContentContainer> */}
      {/* <IntervalClassCounter></IntervalClassCounter>
      <IntervalHookCounter></IntervalHookCounter> */}
      {/* <ExtractDataOnBtnClick /> */}
      {/* <ExtractAllData></ExtractAllData> */}

      {/* <UserContext.Provider value={"Viswas"}>
        <ChannelContext.Provider value={"CodeEvaluation"}>
          <ComponentC></ComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne></CounterOne> */}
      {/* <CounterTwo></CounterTwo> */}
      {/* <CounterThree></CounterThree> */}
      <div>Count - {count}</div>
      <ComponentA onHandlerCall={callDispatchHandler}></ComponentA>
      <CountContext.Provider value={dispatch}>
        <ComponentB></ComponentB>
        <ComponentC></ComponentC>
      </CountContext.Provider>
    </div>
  );
}

export default App;
