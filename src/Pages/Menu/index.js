import React, { Component } from 'react';
import CommonComponentHOC from "../../HOC/commonComponentHOC";
import Dishes from '../../Components/Dishes';
import { Row, Col, ListGroup, Button } from "reactstrap";

class MenuContainer extends Component{
  state = {
    dishList : [
      {
        name: 'dish1',
        id: '1',
        price: '45',
      },
      {
        name: 'dish2',
        id: '2',
        price: '40',
      },
      {
        name: 'dish3',
        id: '3',
        price: '50',
      },
      {
        name: 'dish4',
        id: '4',
        price: '65',
      },
    ]
  };
  addDishIntoList = () => {
    const { dishList } = this.state;
    const arrLength = dishList.length;
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const obj = {
      name: 'dish'+(arrLength+1),
      id: arrLength + 1,
      price: getRndInteger(40,80),
    };
    dishList.push(obj);
    this.setState({dishList});
  };
  render() {
    const { dishList } = this.state;
    return(
      <section className="inner-wrapper">
        <div className="container">
          <h4>Menu List</h4>
          <Row>
            <Col sm="6" lg="4">
              <ListGroup>
              {
                dishList && dishList.map(dish => {
                  return(
                    <React.Fragment key={dish.id}>
                      <Dishes dishes={dish} />
                    </React.Fragment>
                  )
                })
              }
              </ListGroup>
            </Col>
          </Row>
          <Button
            outline
            color="primary"
            className="mt-3"
            onClick={()=>this.addDishIntoList()}
          >
            Add Dish
          </Button>
        </div>
      </section>
    )
  }
}

export default CommonComponentHOC(MenuContainer);