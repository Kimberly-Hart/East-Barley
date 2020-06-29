import React from 'react';
import SingleBook from '../../shared/SingleBook/SingleBook';
import booksData from '../../../helpers/data/booksData';
import './AllBooks.scss';

class AllBooks extends React.Component {
    state = {
      books: [],
    }

    componentDidMount() {
      booksData.getAllBooks()
        .then((books) => {
          this.setState({ books });
        })
        .catch((errorFromGetBooks) => console.error({ errorFromGetBooks }));
    }

    render() {
      const { books } = this.state;
      const { isEmployee } = this.props;
      return (
        <div className="Allbooks text-center">
          <h1>Books</h1>
          <div className="container">
          { books.map((book) => <SingleBook key={book.productId} book={book} isEmployee={isEmployee} />)}
          </div>
        </div>
      );
    }
}

export default AllBooks;
