import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import booksShape from '../../../helpers/propz/booksShape';
import './SingleBook.scss';

class SingleBook extends Component {
    static propTypes = {
      book: booksShape.booksShape,
    }

    render() {
      const { book } = this.props;
      return (
        <div className="SingleBook">
            <Card className="bookCard"
              image={book.imageUrl}
              header={book.title}
              meta={book.author}
              description={book.description}
              extra={this.button}
            />
            {/* <ul>
                <li>Category: {book.category}</li>
                <li>Price: {book.price}</li>
                <li>Description: {book.description}</li>
                <li>Quantity: {book.quantity}</li>
                <li>ISBN: {book.isbn}</li>
                <li>Publisher: {book.publisher}</li>
                <li>Page Count: {book.pageCount}</li>
            </ul> */}
        </div>
      );
    }
}

export default SingleBook;
