import React, { Component } from 'react';
import { Card, Segment, Button } from 'semantic-ui-react';
import booksShape from '../../../helpers/propz/booksShape';
import './SingleBook.scss';

class SingleBook extends Component {
    static propTypes = {
      book: booksShape.booksShape,
    }

    button = () => (
      <div>
        <div className="ui inverted segment">
        <button class="ui teal inverted button">Teal</button>
        </div>
      </div>
    )

    render() {
      const { book } = this.props;
      return (
        <div className="SingleBook">
            <Card className="bookCard"
              image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
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
