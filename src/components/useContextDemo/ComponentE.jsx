import ComponentF from "./ComponentF";
import React, { Component, useContext } from "react";
import { UserContext, ChannelContext } from "./../../App";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <div>
        {user} - {channel}
      </div>
      <ComponentF></ComponentF>
    </div>
  );
}

export default ComponentE;
