import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Button,
  Image,
  Input,
} from 'semantic-ui-react';
import beersShape from '../../../helpers/propz/productsShape';
import ProductModal from '../ProductModal/ProductModal';
import './SingleBeer.scss';
import employeeData from '../../../helpers/data/employeeData';

class SingleBeer extends Component {
  state = {
    modalOpen: false,
    quantitySelected: 1,
  }

  static propTypes = {
    isEmployee: PropTypes.bool,
    retreiveBeers: PropTypes.func,
    beer: beersShape.productsShape,
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
    const { beer, retreiveBeers } = this.props;
    const productToUpdate = {
      ProductId: beer.productId,
      Quantity: Number(quantitySelected),
    };
    employeeData.changeInventoryQuantity(productToUpdate)
      .then(() => {
        this.setState({ quantitySelected: 1 });
        retreiveBeers();
      }).catch((errorFromSingleBeer) => console.error(errorFromSingleBeer));
  }

  render() {
    const { beer, isEmployee } = this.props;
    const { modalOpen, quantitySelected } = this.state;
    return (
      <div className="SingleBeer">
            <Card className='beerCard'>
              <Image className="image" src={beer.imageUrl} onClick={this.handleOpen}/>
                <Card.Content header={beer.title} textAlign='center' meta={beer.category} />
                <Card.Content className='inStock' description={`Number in Stock: ${beer.quantity}`} textAlign='center' />
                <Input icon='plus cart' iconPosition='left' type='number' value={quantitySelected} onChange={this.changeQuantity} placeholder='Quantity'/>
                { (isEmployee)
                  ? <Button className='inventoryBtn' onClick={this.updateInventory} fluid>Update Inventory</Button>
                  : [<Button.Group fluid>
                    <Button attached='left' onClick={this.handleOpen}>More Details</Button>
                    <Button attached='right' onClick={() => alert('set up later')}>Add To Cart</Button>
                  </Button.Group>]
                }
            </Card>
            <ProductModal modalOpen={modalOpen} product={beer} handleClose={this.handleClose} handleOpen={this.handleOpen} />
      </div>
    );
  }
}

export default SingleBeer;
