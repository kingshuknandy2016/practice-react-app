# Features and Description

## Some Basic Features Practice

- **Counters** and **Counter** are two class component that I have used for practice. Here the following features are covered
  - Basic State Usage
  - Calling a Child Component
  - Passing an event handler to child component
  - Conditional Rendering
  - Props Usage
    In order to view this App.js should be.
    It looks like the following ![image](./docs/couterAppBasic.png)

```javascript
import Counters from "./components/Counters";

function App() {
  return (
    <div className="App">
      <Counters />
    </div>
  );
}
```

## UseEffect() Examples

- **HookCounterOne** is the functional component representation of **ClassComponentOne** Class Counter. This represent the useEffect hook with different Lifecycle phases and it looks like ![image](./docs/HookCounterOne.png)
  In order to view this App.js should be.

```javascript
import ClassComponentOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";

function App() {
  return (
    <div className="App">
      <ClassComponentOne />
      <HookCounterOne />
    </div>
  );
}
```

- **ToggleContentContainer** is the functional component representation that demonstrates **componentWillUnmount** in functional Component format. This represent the useEffect hook with different Lifecycle phases and it looks like ![image](./docs/toogle.png)
  In order to view this App.js should be.

```javascript
import ToggleContentContainer from "./components/ToggleContentContainer";

function App() {
  return (
    <div className="App">
      <ToggleContentContainer></ToggleContentContainer>
    </div>
  );
}
```

- **Interval Hook Counter** is the functional component representation of **IntervalClassCounter** Class Counter. This represent the useEffect hook with different Lifecycle phases and it looks like ![image](./docs/InterVal%20Counter.png)
  In order to view this App.js should be.

```javascript
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";

function App() {
  return (
    <div className="App">
      <IntervalClassCounter></IntervalClassCounter>
      <IntervalHookCounter></IntervalHookCounter>
    </div>
  );
}
```

- Here we will showing how to **fetch data from an API endpoint** using **useEffect** Hook. We will be using **axios** for data-fetching

```cmd
    npm install axios
```

    We have the following implementations Done:

1.  **ExtractAllData** which extracts all data from the api https://jsonplaceholder.typicode.com/posts
2.  **ExtractDataOnChange** which extracts data with specified id from the api https://jsonplaceholder.typicode.com/posts/1 on change of the input field
3.  **ExtractDataOnBtnClick** which extracts data with specified id from the api https://jsonplaceholder.typicode.com/posts/1 on click of button

## Available Scripts

In the project directory, you can run:

#### `npm install`

To Install the dependency

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## useContext() Examples

In order to view this App.js should be.

```javascript
import logo from "./logo.svg";
import React, { Component } from "react";
import ComponentC from "./components/useContextDemo/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Viswas"}>
        <ChannelContext.Provider value={"CodeEvaluation"}>
          <ComponentC></ComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
```

## useReducer() Examples

There are 3 implementations

- **CounterOne** is the basic example of useReducer
- **CounterTwo** is another advanced option where we use two initial state to manage 2 counter
- **CounterThree** we have used 2 useReducer to manage 2 counter

## useReducer with useContext

We want share state between components(**_Global State Management_**). So here we will be using **useReducer** with **useContext**.

Lets consider a scenario. We have **app.js** and on different levels we have different components. Our requirement is to share a counter state between components A, D and F. We will maintain the counter state in **app.js** but we share the state and the methods to change the state deep down in the component tree. Passings props through so many steps is definitely a bad idea. So we will be using **contextAPI**.

![image](./docs/useContextWithuseReducer.png)
