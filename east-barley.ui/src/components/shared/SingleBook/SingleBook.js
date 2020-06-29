import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Image,
  Input,
  Button,
} from 'semantic-ui-react';
import booksShape from '../../../helpers/propz/booksShape';
import ProductModal from '../ProductModal/ProductModal';
import './SingleBook.scss';
import employeeData from '../../../helpers/data/employeeData';

class SingleBook extends Component {
  state = {
    modalOpen: false,
    quantitySelected: 1,
  }

  static propTypes = {
    isEmployee: PropTypes.bool,
    retreiveBooks: PropTypes.func,
    book: booksShape.booksShape,
  }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    changeQuantity = (e) => {
      e.preventDefault();
      this.setState({ quantitySelected: e.target.value });
    }

    updateInventory = (e) => {
      e.preventDefault();
      const { quantitySelected } = this.state;
      const { book, retreiveBooks } = this.props;
      const productToUpdate = {
        ProductId: book.productId,
        Quantity: Number(quantitySelected),
      };
      employeeData.changeInventoryQuantity(productToUpdate)
        .then(() => {
          this.setState({ quantitySelected: 1 });
          retreiveBooks();
        }).catch((errorFromSingleBook) => console.error(errorFromSingleBook));
    }

    render() {
      const { book, isEmployee } = this.props;
      const { modalOpen, quantitySelected } = this.state;
      return (
        <div className="SingleBook">
            <Card className='bookCard'>
              <Image className="image" src={book.imageUrl} onClick={this.handleOpen}/>
                <Card.Content header={book.title} textAlign='center' meta={book.category} />
                <Card.Content className='inStock' description={`Number in Stock: ${book.quantity}`} textAlign='center' />
                <Input icon='plus cart' iconPosition='left' type='number' value={quantitySelected} onChange={this.changeQuantity} placeholder='Quantity'/>
                { (isEmployee)
                  ? <Button className='inventoryBtn' onClick={this.updateInventory} fluid>Update Inventory</Button>
                  : [<Button.Group fluid>
                    <Button attached='left' onClick={this.handleOpen}>More Details</Button>
                    <Button attached='right' onClick={() => alert('set up later')}>Add To Cart</Button>
                  </Button.Group>]
                }
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
