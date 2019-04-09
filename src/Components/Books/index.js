import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { withRouter } from 'react-router-dom';

const showDetails = (details, props) => {
  const { showDetailOnSamePage } = props;
  showDetailOnSamePage(details);
  // history.push('/book-detail', details);
};
const Books = (props) => {
  const { books } = props;
  return (
    <ListGroupItem onClick={()=>showDetails(books, props)}>{`Name- ${books.name}, Price- ${books.price}`}</ListGroupItem>
  );
};

export default withRouter(Books);