import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/Counters";
import ClassComponentOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";
import ButtonContainer from "./components/ToggleContentContainer";
import ToggleContentContainer from "./components/ToggleContentContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/axiosDemo/ExtractDataOnBtnClick";
import ExtractAllData from "./components/axiosDemo/ExtractAllData";
import ExtractDataOnBtnClick from "./components/axiosDemo/ExtractDataOnBtnClick";

function App() {
  return (
    <div className="App">
      {/* <ClassComponentOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ToggleContentContainer></ToggleContentContainer> */}
      {/* <IntervalClassCounter></IntervalClassCounter>
      <IntervalHookCounter></IntervalHookCounter> */}
      <ExtractDataOnBtnClick></ExtractDataOnBtnClick>
      {/* <ExtractAllData></ExtractAllData> */}
    </div>
  );
}

export default App;
