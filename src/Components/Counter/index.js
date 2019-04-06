import React, { Component } from 'react';
import { Button, Badge } from "reactstrap";

export default class Counter extends Component{
  state = {
    count : 0,
  };

  counterMethod = (count) => () => {
    this.setState({ count })
  };

  componentWillReceiveProps(nextProps) {
    const { addCountAll } = nextProps;
    const { count } = this.state;
    if (addCountAll) {
      this.setState({ count: count + 1 })
    }
    if (!addCountAll && count > 0) {
      this.setState({ count: count - 1 })
    }
  }

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
        <Badge color="secondary">{count}</Badge>
        <Button
          outline
          color="danger"
          onClick={this.counterMethod(count  > 0 ? count - 1 : 0 )}
        >
          -Count
        </Button>
      </React.Fragment>
    )
  }
}