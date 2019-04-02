import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactCarousel from "../../Components/Carousel";
import CommonComponentHOC from '../../HOC/commonComponentHOC'
import CommonCard from "../../Components/Card";
import CommonTab from "../../Components/Tab";
import CommonTable from "../../Components/Table";

class HomePage extends Component {
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
        <section className="inner-wrapper bg-secondary">
          <Container>
            <h2>Tabs Section:</h2>
            <CommonTab />
          </Container>
        </section>
        <section className="inner-wrapper">
          <Container>
            <h2>Table Section:</h2>
            <CommonTable />
          </Container>
        </section>
      </React.Fragment>
    )
  }
}

// export default HomePage;
export default CommonComponentHOC(HomePage);