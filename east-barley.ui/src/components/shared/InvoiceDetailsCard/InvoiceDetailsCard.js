import React from 'react';
import { Table, Image, Icon } from 'semantic-ui-react';
import productData from '../../../helpers/data/productData';
import ProductModal from '../../shared/ProductModal/ProductModal';
import './InvoiceDetailsCard.scss';

class InvoiceDetails extends React.Component {
  state = {
    product: [],
    openModal: false,
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  componentDidMount() {
    const { lineItem } = this.props;
    productData.getAnyProductById(lineItem.productId)
      .then((product) => {
        this.setState({ product });
      })
      .catch((errorFromInvoiceDetails) => console.error(errorFromInvoiceDetails));
  }

  render() {
    const { product, modalOpen } = this.state;
    const { lineItem } = this.props;
    return (
      <Table.Row>
      <Table.Cell>
        <Image className="productPicture" src={product.imageUrl} size='tiny' verticalAlign='middle' onClick={this.handleOpen} />{' '}
      </Table.Cell>
      <Table.Cell>{product.title}</Table.Cell>
      <Table.Cell>{product.price}</Table.Cell>
      <Table.Cell>{lineItem.quantity}</Table.Cell>
      <Table.Cell selectable className="detailsButton">
        <Icon link name='list alternate' size={'huge'} onClick={this.handleOpen} />
      </Table.Cell>
      <ProductModal modalOpen={modalOpen} product={product} handleClose={this.handleClose} handleOpen={this.handleOpen} />
      </Table.Row>
    );
  }
}

export default InvoiceDetails;
