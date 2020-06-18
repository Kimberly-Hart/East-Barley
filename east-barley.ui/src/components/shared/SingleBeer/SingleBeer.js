import React, { Component } from 'react';
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
            <ul>
                <li>Category: {beer.category}</li>
                <li>Price: {beer.price}</li>
                <li>Title: {beer.title}</li>
                <li>Description: {beer.description}</li>
                <li>Quantity: {beer.quantity}</li>
            </ul>
        </div>
      );
    }
}

export default SingleBeer;
