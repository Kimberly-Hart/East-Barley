import React, { Component } from 'react';
import { Card, Button, Label, Icon, Image, Input } from 'semantic-ui-react';
import beersShape from '../../../helpers/propz/productsShape';
import ProductModal from '../ProductModal/ProductModal';
import './SingleBeer.scss';

class SingleBeer extends Component {
  state = {
    modalOpen: false,
  }

  static propTypes = {
    beer: beersShape.beersShape,
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    const { beer } = this.props;
    const { modalOpen } = this.state;
    return (
      <div className="SingleBeer">
            <Card className='beerCard'>
              <Image className="image" src={beer.imageUrl} onClick={this.handleOpen}/>
                <Card.Content header={beer.title} textAlign='center' meta={beer.category} description={beer.description}/>
                <Input icon='plus cart' iconPosition='left' placeholder='Quantity'/>
                <Button.Group fluid>
                  <Button attached='left' onClick={this.handleOpen}>More Details</Button>
                  <Button attached='right' onClick={() => alert('set up later')}>Add To Cart</Button>
                </Button.Group>
            </Card>
            <ProductModal modalOpen={modalOpen} product={beer} handleClose={this.handleClose} handleOpen={this.handleOpen} />
      </div>
    );
  }
}

export default SingleBeer;
