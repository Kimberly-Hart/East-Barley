import React from 'react';
import { Image } from 'semantic-ui-react';

class InvoiceCard extends React.Component {
  render() {
    const { invoice } = this.props;
    return (
      <Image
        fluid
        label={{
          as: 'a',
          color: 'black',
          content: 'Shipped',
          icon: 'hotel',
          ribbon: true,
        }}
        src='https://react.semantic-ui.com/images/wireframe/image.png'
    />
    );
  }
}

export default InvoiceCard;
