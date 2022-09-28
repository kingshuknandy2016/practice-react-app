import { UserContext, ChannelContext } from "../../App";
import React, { Component } from "react";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(username) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User Context value :{username}, Channel Context Value :{" "}
                    {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
