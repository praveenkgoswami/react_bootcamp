import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, Container, ListGroup, Row} from "reactstrap";
import commonComponentHOC from "../../HOC/commonComponentHOC";
import Books from "../../Components/Books";

class BookList extends Component{
  state = {
    bookList : [
      {
        name: 'book1',
        id: '1',
        price: '45',
      },
      {
        name: 'book2',
        id: '2',
        price: '40',
      },
      {
        name: 'book3',
        id: '3',
        price: '50',
      },
      {
        name: 'book4',
        id: '4',
        price: '65',
      },
    ],
    bookDetail : undefined,
  };
  showDetailOnSamePage = (bookDetail) => {
    this.setState({bookDetail})
  };
  render() {
    const { bookList, bookDetail } = this.state;
    return(
      <section className="inner-wrapper">
        <Container>
          <h4>Book List</h4>
          <Row>
            <Col sm="6" lg="4">
              <ListGroup>
                {
                  bookList && bookList.map(book => {
                    return(
                      <React.Fragment key={book.id}>
                        <Books books={book} showDetailOnSamePage={this.showDetailOnSamePage}/>
                      </React.Fragment>
                    )
                  })
                }
              </ListGroup>
            </Col>
            {
              bookDetail !== undefined ? (
                <Col sm="6" lg="4">
                  <Card>
                    <CardImg top width="100%" src="http://placehold.jp/348x196.png" alt="Book" />
                    <CardBody>
                      <CardTitle>{bookDetail.name}</CardTitle>
                      <CardSubtitle>{bookDetail.price}</CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              ) : null
            }
          </Row>
        </Container>
      </section>
    )
  }
}

export default commonComponentHOC(BookList);