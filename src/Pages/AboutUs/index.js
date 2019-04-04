import React from 'react';
import CommonComponentHOC from '../../HOC/commonComponentHOC';
import Counter from "../../Components/Counter";
import Button from "reactstrap/es/Button";

const AboutUs = (props) => {
  const { updateCount } = props;
  return (
    <div className="container text-center">
      <h2>Know More About Us</h2>
      <div>
        <h4>Click to add count</h4>
        <Counter />
        <div className="mt-3">
          <Button
            outline
            color="secondary"
            onClick={()=>updateCount()}
          >
            +Count
          </Button>
        </div>
      </div>
    </div>
  )
};

export default CommonComponentHOC(AboutUs);