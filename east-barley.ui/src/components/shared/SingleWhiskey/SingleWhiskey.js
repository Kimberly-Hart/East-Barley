import React, { Component } from 'react';
import whiskeysShape from '../../../helpers/propz/productsShape';
import './SingleWhiskey.scss';

class SingleWhiskey extends Component {
    static propTypes = {
      whiskey: whiskeysShape.whiskeysShape,
    }

    render() {
      const { whiskey } = this.props;
      return (
        <div className="SingleWhiskey">
            <ul>
                <li>Category: {whiskey.category}</li>
                <li>Price: {whiskey.price}</li>
                <li>Title: {whiskey.title}</li>
                <li>Description: {whiskey.description}</li>
                <li>Quantity: {whiskey.quantity}</li>
            </ul>
        </div>
      );
    }
}

export default SingleWhiskey;
