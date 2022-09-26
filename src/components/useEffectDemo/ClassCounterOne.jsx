import React, { Component } from "react";

class ClassComponentOne extends Component {
  constructor(props) {
    console.log(`Inside ClassComponentOne constructor `);
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }
  // state = {  }

  componentDidMount() {
    console.log(`componentDidMount Executed`);
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.count !== this.state.count) {
      console.log(`componentDidUpdate Executed`);
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        ></input>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {" "}
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassComponentOne;
