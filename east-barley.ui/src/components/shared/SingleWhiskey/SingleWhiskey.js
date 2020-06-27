import React, { Component } from 'react';
import { Card, Image, Input, Button } from 'semantic-ui-react';
import whiskeysShape from '../../../helpers/propz/productsShape';
import ProductModal from '../ProductModal/ProductModal';
import './SingleWhiskey.scss';

class SingleWhiskey extends Component {
  state = {
    modalOpen: false,
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  static propTypes = {
    whiskey: whiskeysShape.whiskeysShape,
  }

  render() {
    const { whiskey } = this.props;
    const { modalOpen } = this.state;
    return (
        <div className="SingleWhiskey">
           <Card className='whiskeyCard'>
              <Image className="image" src={whiskey.imageUrl} onClick={this.handleOpen}/>
                <Card.Content header={whiskey.title} textAlign='center' meta={whiskey.category} description={whiskey.description}/>
                <Input icon='plus cart' iconPosition='left' placeholder='Quantity'/>
                <Button.Group fluid>
                  <Button attached='left' onClick={this.handleOpen}>More Details</Button>
                  <Button attached='right' onClick={() => alert('set up later')}>Add To Cart</Button>
                </Button.Group>
            </Card>
            <ProductModal modalOpen={modalOpen} product={whiskey} handleClose={this.handleClose} handleOpen={this.handleOpen} />
        </div>
    );
  }
}

export default SingleWhiskey;
