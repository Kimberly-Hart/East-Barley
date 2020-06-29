import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Image,
  Input,
  Button,
} from 'semantic-ui-react';
import whiskeysShape from '../../../helpers/propz/productsShape';
import ProductModal from '../ProductModal/ProductModal';
import './SingleWhiskey.scss';
import employeeData from '../../../helpers/data/employeeData';

class SingleWhiskey extends Component {
  state = {
    modalOpen: false,
    quantitySelected: 1,
  }

  static propTypes = {
    isEmployee: PropTypes.bool,
    whiskey: whiskeysShape.productsShape,
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
    const { whiskey } = this.props;
    const productToUpdate = {
      ProductId: whiskey.productId,
      Quantity: Number(quantitySelected),
    };
    employeeData.changeInventoryQuantity(productToUpdate);
  }

  render() {
    const { whiskey, isEmployee } = this.props;
    const { modalOpen, quantitySelected } = this.state;
    return (
        <div className="SingleWhiskey">
           <Card className='whiskeyCard'>
              <Image className="image" src={whiskey.imageUrl} onClick={this.handleOpen}/>
                <Card.Content header={whiskey.title} textAlign='center' meta={whiskey.category} />
                <Input icon='plus cart' iconPosition='left' type='number' value={quantitySelected} onChange={this.changeQuantity} placeholder='Quantity'/>
                { (isEmployee)
                  ? <Button className='inventoryBtn' onClick={this.updateInventory} fluid>Update Inventory</Button>
                  : [<Button.Group fluid>
                    <Button attached='left' onClick={this.handleOpen}>More Details</Button>
                    <Button attached='right' onClick={() => alert('set up later')}>Add To Cart</Button>
                  </Button.Group>]
                }
            </Card>
            <ProductModal modalOpen={modalOpen} product={whiskey} handleClose={this.handleClose} handleOpen={this.handleOpen} />
        </div>
    );
  }
}

export default SingleWhiskey;
