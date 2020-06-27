import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import whiskeysShape from '../../../helpers/propz/productsShape';
import './SingleWhiskey.scss';

class SingleWhiskey extends Component {
    static propTypes = {
      whiskey: whiskeysShape.productsShape,
    }

    render() {
      const { whiskey } = this.props;
      return (
        <div className="SingleWhiskey">
            <Card className="whiskeyCard"
              image={whiskey.imageUrl}
              header={whiskey.title}
              meta={whiskey.category}
              description={whiskey.description}
              extra={this.button}
            />
                {/* <li>Price: {whiskey.price}</li>
                <li>Quantity: {whiskey.quantity}</li> */}
        </div>
      );
    }
}

export default SingleWhiskey;
