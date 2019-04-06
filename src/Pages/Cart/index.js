import React, { Component } from 'react';
import CommonComponentHOC from "../../HOC/commonComponentHOC";
import {
  Button,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Table,
  ListGroup,
  ListGroupItem
} from "reactstrap";

class Cart extends Component{
  state = {
    cart : [],
    inputValue: '',
    totalAmount: 0,
  };
  handleChange = (inputValue) => {
    this.setState({inputValue})
  };
  onFormSubmit = () => {
    const { inputValue, cart, totalAmount } = this.state;
    let splitedStr = [];
    let amount = 0;
    if (inputValue.includes('-')) {
      splitedStr = inputValue.split("-");
      const enteredName = splitedStr[0];
      const enteredPrice = splitedStr[1];
      if (isNaN(enteredPrice)) {
        alert(enteredPrice + ' - Price should be numeric only');
      } else {
        const cartObj = {
          name: enteredName,
          price: enteredPrice,
          quantity: 1,
        };
        cart.push(cartObj);
        amount = parseInt(totalAmount) + parseInt(enteredPrice);
        this.setState({cart, inputValue : '', totalAmount: amount});
      }
    } else {
      alert('Please enter Product Name - price like: Name-56');
    }
  };
  updateQuantity = (quantity, idx, updateType) => {
    const { cart, totalAmount } = this.state;
    const updateItem = cart[idx];
    let updatedAmount = 0;
    if (updateType === 'minus' && quantity > 1) {
      updatedAmount = parseInt(totalAmount) - parseInt(updateItem.price);
      updateItem.quantity = quantity - 1;
    } else if (updateType === 'plus') {
      updatedAmount = parseInt(totalAmount) + parseInt(updateItem.price);
      updateItem.quantity = quantity + 1;
    } else {
      updatedAmount = totalAmount;
    }
    this.setState({totalAmount: updatedAmount});
  };
  deleteItem = (idx) => {
    const { cart, totalAmount } = this.state;
    const deletedItem = cart.splice(idx, 1);
    const amount = parseInt(totalAmount) - parseInt(deletedItem[0].price);
    this.setState({totalAmount: amount});
  };
  render() {
    const { cart, inputValue, totalAmount } = this.state;
    return(
      <section className="inner-wrapper">
        <div className="container">
          <h4>Cart</h4>
          <Form>
            <InputGroup>
              <Input
                required
                value={inputValue}
                placeholder="Enter Product name and price with separated by - hyphen"
                onChange={(e)=>this.handleChange(e.target.value)}
              />
              <InputGroupAddon addonType="append">
                <Button color="secondary" onClick={()=>this.onFormSubmit()}>Add to Cart</Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          {
            cart.length ? (
              <React.Fragment>
                <h3 className="mt-4">Product Table</h3>
                <Table responsive className="mt-2">
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    cart && cart.map((cartItem, idx) => {
                      return(
                        <tr key={`${idx+1}`}>
                          <th scope="row">{`${idx+1}`}</th>
                          <td>{cartItem.name}</td>
                          <td>{cartItem.quantity}</td>
                          <td>{cartItem.price}</td>
                          <td>
                            <Button
                              className="mr-1"
                              color="primary"
                              onClick={()=>this.updateQuantity(
                                cartItem.quantity,
                                idx,
                                'minus')}
                            >
                              -
                            </Button>
                            <Button className="mr-2" color="primary" onClick={()=>this.updateQuantity(
                              cartItem.quantity,
                              idx,
                              'plus')}
                            >
                              +
                            </Button>
                            <Button color="danger" onClick={()=>this.deleteItem(idx)}>x</Button>
                          </td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </Table>
                <ListGroup className="mt-4">
                  <ListGroupItem className="d-flex" color="info">
                    <strong className="flex-grow-1">Total</strong>
                    <span className="text-right">{totalAmount}</span>
                  </ListGroupItem>
                </ListGroup>
              </React.Fragment>
            ) : null
          }
        </div>
      </section>
    )
  }
}

export default CommonComponentHOC(Cart);