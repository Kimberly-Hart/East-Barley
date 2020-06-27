import React from 'react';
import { Table, Image, Icon } from 'semantic-ui-react';
import productData from '../../../helpers/data/productData';

class InvoiceDetails extends React.Component {
  state = {
    product: [],
  }

  componentDidMount() {
    const { lineItem } = this.props;
    productData.getAnyProductById(lineItem.productId)
      .then((product) => {
        this.setState({ product });
      })
      .catch((errorFromInvoiceDetails) => console.error(errorFromInvoiceDetails));
  }

  render() {
    const { product } = this.state;
    const { lineItem } = this.props;
    return (
      <Table.Row>
      <Table.Cell>
        <Image src={product.imageUrl} size='tiny' verticalAlign='middle' />{' '}
      </Table.Cell>
      <Table.Cell>{product.title}</Table.Cell>
      <Table.Cell>{product.price}</Table.Cell>
      <Table.Cell>{lineItem.quantity}</Table.Cell>
      <Table.Cell selectable>
        <Icon link name='list alternate' size={'huge'} onClick={() => alert('alert')} />
      </Table.Cell>
      </Table.Row>
    );
  }
}

export default InvoiceDetails;
