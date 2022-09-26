import { useState } from "react";
import HookCounterOne from "./HookCounterOne";

function ToggleContentContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HookCounterOne></HookCounterOne>}
    </div>
  );
}

export default ToggleContentContainer;
