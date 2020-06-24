import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import beersShape from '../../../helpers/propz/productsShape';
import './SingleBeer.scss';

class SingleBeer extends Component {
    static propTypes = {
      beer: beersShape.beersShape,
    }

    render() {
      const { beer } = this.props;
      return (
        <div className="SingleBeer">
            <Card className="beerCard"
              image={beer.imageUrl}
              header={beer.title}
              meta={beer.category}
              description={beer.description}
              extra={this.button}
            />
                {/* <li>Price: {beer.price}</li>
                <li>Quantity: {beer.quantity}</li> */}
        </div>
      );
    }
}

export default SingleBeer;
