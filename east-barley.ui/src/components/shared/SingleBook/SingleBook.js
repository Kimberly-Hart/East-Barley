import React, { Component } from 'react';
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
            <ul>
                <li>Category: {book.category}</li>
                <li>Price: {book.price}</li>
                <li>Title: {book.title}</li>
                <li>Description: {book.description}</li>
                <li>Quantity: {book.quantity}</li>
                <li>Author: {book.author}</li>
                <li>ISBN: {book.isbn}</li>
                <li>Publisher: {book.publisher}</li>
                <li>Page Count: {book.pageCount}</li>
            </ul>
        </div>
      );
    }
}

export default SingleBook;
