import React, { Component } from 'react';
import { Card, Image, Input, Button } from 'semantic-ui-react';
import booksShape from '../../../helpers/propz/booksShape';
import ProductModal from '../ProductModal/ProductModal';
import './SingleBook.scss';

class SingleBook extends Component {
  state = {
    modalOpen: false,
  }

  static propTypes = {
    book: booksShape.booksShape,
  }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    render() {
      const { book } = this.props;
      const { modalOpen } = this.state;
      return (
        <div className="SingleBook">
            <Card className='bookCard'>
              <Image className="image" src={book.imageUrl} onClick={this.handleOpen}/>
                <Card.Content header={book.title} textAlign='center' meta={book.category} />
                <Input icon='plus cart' iconPosition='left' placeholder='Quantity'/>
                <Button.Group fluid>
                  <Button attached='left' onClick={this.handleOpen}>More Details</Button>
                  <Button attached='right' onClick={() => alert('set up later')}>Add To Cart</Button>
                </Button.Group>
            </Card>
            <ProductModal modalOpen={modalOpen} product={book} handleClose={this.handleClose} handleOpen={this.handleOpen} />
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
