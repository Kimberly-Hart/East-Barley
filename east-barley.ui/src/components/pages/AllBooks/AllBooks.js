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
      return (
        <div className="Allbooks">
          <h1>Books</h1>
          { books.map((book) => <SingleBook key={book.productId} book={book} />)}
        </div>
      );
    }
}

export default AllBooks;
