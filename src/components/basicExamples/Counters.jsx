import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { product_id: 1, value: 5 },
      { product_id: 4, value: 7 },
    ],
  };

  handleIncrement = (counter) => {
    console.log("Handle Increment", counter);
    const findIndex = this.state.counters.findIndex(
      (counterValue) => counter === counterValue
    );
    this.state.counters[findIndex].value++;
    this.setState(this.state.counters);
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => {
          return (
            <span key={counter.product_id}>
              <Counter counter={counter} onIncrement={this.handleIncrement}>
                <h4>Title</h4>
              </Counter>
            </span>
          );
        })}
      </div>
    );
  }
}

export default Counters;
