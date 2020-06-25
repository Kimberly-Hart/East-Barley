import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
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
          <Card className="beerCard"
            image={beer.imageUrl}
            header={beer.title}
            meta={beer.category}
            description={beer.description}
            extra={this.button}
            onClick={this.handleOpen}
          />
            <Button onClick={this.handleOpen}>Show Modal</Button>
              {/* <li>Price: {beer.price}</li>
              <li>Quantity: {beer.quantity}</li> */}
            <ProductModal modalOpen={modalOpen} product={beer} handleClose={this.handleClose} handleOpen={this.handleOpen} />
      </div>
    );
  }
}

export default SingleBeer;
