import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: this.props.counter,
  };
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.children}
        <span key={this.state.counter.product_id}>
          <div>Product ID: {this.state.counter.product_id}</div>
          <div>Value: {this.state.counter.value}</div>
          <button onClick={() => this.props.onIncrement(this.props.counter)}>
            Increase
          </button>
        </span>
      </div>
    );
  }
}

export default Counter;
