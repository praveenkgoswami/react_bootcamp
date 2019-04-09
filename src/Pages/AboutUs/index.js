import React, { Component } from 'react';
import CommonComponentHOC from '../../HOC/commonComponentHOC';
import Counter from "../../Components/Counter";
import Button from "reactstrap/es/Button";

class AboutUs extends Component{
  state = {
    addCountAll : false,
  };
  allUpdateCount = (countType) => {
    if (countType === 'add') {
      this.setState({
        addCountAll: true,
      })
    } else {
      this.setState({
        addCountAll: false,
      })
    }
  };
  render() {
    const { updateCount } = this.props;
    const { addCountAll } = this.state;
    return (
      <div className="container text-center">
        <h2>Know More About Us</h2>
        <div>
          <Button
            outline
            color="secondary"
            onClick={()=>updateCount()}
          >
            +Header Count
          </Button>
          <h4 className="mt-3">Click to add count 1</h4>
          <Counter addCountAll={addCountAll} />
          <h4 className="mt-3">Click to add count 2</h4>
          <Counter addCountAll={addCountAll} />
          <h4 className="mt-3">Click to add count 3</h4>
          <Counter addCountAll={addCountAll} />
          <div className="mt-3">
            <Button
              outline
              color="secondary"
              className="mr-2"
              onClick={()=>this.allUpdateCount('add')}
            >
              +All Increment
            </Button>
            <Button
              outline
              color="warning"
              onClick={()=>this.allUpdateCount('minus')}
            >
              -All Decrement
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default CommonComponentHOC(AboutUs);