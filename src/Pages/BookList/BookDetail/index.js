import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardTitle, Container, Row, Col} from "reactstrap";
import commonComponentHOC from "../../../HOC/commonComponentHOC";

class BookDetail extends Component{
  render() {
    const { location } = this.props;
    return(
      <section className="inner-wrapper">
        <Container>
          <h2>Book Detail</h2>
          <Row>
            <Col sm="4" md="3">
              <Card>
                <CardImg top width="100%" src="http://placehold.jp/348x196.png" alt="Book" />
                <CardBody>
                  <CardTitle>{location.state.name}</CardTitle>
                  <CardSubtitle>{location.state.price}</CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default commonComponentHOC(BookDetail);