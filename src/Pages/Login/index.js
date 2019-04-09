import React, { Component } from 'react';
import commonComponentHOC from "../../HOC/commonComponentHOC";
import { Container, Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";

class Login extends Component{
  state = {
    userInputValue : '',
  };

  handleChange = (userInput) => {
    console.log('input data', userInput);
  };

  onLoginFormSubmit = (username, password) => {
    const { handleAuth, history } = this.props;
    console.log("Form submitted", username, password);
    handleAuth(true);
    history.push('/book-list');
  };
  render() {
    return(
      <section className="inner-wrapper">
        <Container>
          <h2 className="text-center">Login</h2>
          <Row>
            <Col md={{ size: 4, offset: 4 }}>
              <Form>
                <FormGroup>
                  <Label for="userEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="userEmail"
                    placeholder="Enter Your Email ID"
                    onChange={(e)=>this.handleChange(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="userPassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="userPassword"
                    placeholder="Enter Your Password"
                    onChange={(e)=>this.handleChange(e.target.value)}
                  />
                </FormGroup>
                <Button onClick={()=>this.onLoginFormSubmit('praveen', 'garg')}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default commonComponentHOC(Login);