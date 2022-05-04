import React from "react";

export default class ClassCounter extends React.Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((previousState) => ({
      counter: previousState.counter + 1
    }));
  }

  render() {
    return (
      <>
        <div>This is the class component</div>
        {this.state.counter}
        <button onClick={this.handleClick}>Press Me</button>
      </>
    );
  }
}
