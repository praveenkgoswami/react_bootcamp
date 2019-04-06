import React from 'react';
import { ListGroupItem } from 'reactstrap';

const showDetails = (details) => {
  console.log('Dish details', details)
};
const Dishes = (props) => {
  const { dishes } = props;
  return (
    <ListGroupItem onClick={()=>showDetails(dishes)}>{`Name- ${dishes.name}, Price- ${dishes.price}`}</ListGroupItem>
  );
};

export default Dishes;