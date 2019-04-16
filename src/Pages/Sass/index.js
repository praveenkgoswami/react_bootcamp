import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactCarousel from "../../Components/Carousel";
import CommonComponentHOC from '../../HOC/commonComponentHOC'
import CommonCard from "../../Components/Card";

class SassPage extends Component {
  render () {
    return (
      <React.Fragment>
        <ReactCarousel />
        <section className="inner-wrapper">
          <Container>
            <h2>Cards Section:</h2>
            <Row>
              <Col sm="6" lg="4"><CommonCard /></Col>
              <Col sm="6" lg="4"><CommonCard /></Col>
              <Col sm="6" lg="4"><CommonCard /></Col>
              <Col sm="6" lg="4"><CommonCard /></Col>
              <Col sm="6" lg="4"><CommonCard /></Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    )
  }
}

export default CommonComponentHOC(SassPage);