import React, { Component } from 'react';
import Button from "reactstrap/es/Button";

export default class Counter extends Component{
  state = {
    count : 0,
  };

  counterMethod = (count) => () => {
    this.setState({ count })
  };

  render() {
    const { count } = this.state;
    return(
      <React.Fragment>
        <Button
          outline
          color="secondary"
          onClick={this.counterMethod(count + 1)}
        >
          +Count
        </Button>
        <span>{count}</span>
        <Button
          outline
          color="warning"
          onClick={this.counterMethod(count  > 0 ? count - 1 : 0 )}
        >
          -Count
        </Button>
      </React.Fragment>
    )
  }
}