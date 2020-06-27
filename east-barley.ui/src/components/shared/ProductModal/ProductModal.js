import React from 'react';
import {
  Button,
  Breadcrumb,
  Icon,
  Modal,
  Card,
  Divider,
  Input,
  Label,
} from 'semantic-ui-react';
import './ProductModal.scss';

class ProductModal extends React.Component {
  state = {
    isBook: false,
  }

  isbnNumber = () => {
    const { product } = this.props;
    return `ISBN: ${product.isbn}`;
  }

  publisher = () => {
    const { product } = this.props;
    return `Publisher: ${product.publisher}`;
  }

  pageCount = () => {
    const { product } = this.props;
    return `Page Count: ${product.pageCount}`;
  }

  componentDidMount() {
    const { product } = this.props;
    if (product.productTypesTableId === 1) {
      this.setState({ isBook: true });
    } else {
      this.setState({ isBook: false });
    }
  }

  render() {
    const {
      modalOpen,
      handleClose,
      product,
    } = this.props;
    return (
      <div className="allModalContent">
      <Modal
        open={modalOpen}
        onClose={handleClose}
        basic
        size='small'
      >
        <div className="breadcrumbSection">
            <React.Fragment key={'huge'}>
              <Breadcrumb size={'huge'} className="breadcrumb">
                <Breadcrumb.Section>Product</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right chevron' color='green' />
                <Breadcrumb.Section>{product.category}</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right chevron' color='green' />
                <Breadcrumb.Section>{product.title}</Breadcrumb.Section>
              </Breadcrumb>
              <Divider hidden />
            </React.Fragment>
        </div>
        <div className="modalCardContent">
          <Modal.Content>
            <Card color='red' image={product.imageUrl} />
              <Card className='productModalCard'>
                <Card.Content header={product.title} textAlign='center' />
                {(this.state.isBook)
                  ? <Card.Content meta={product.author} textAlign='center' />
                  : null
                }
                  <Card.Content description={product.description} textAlign='center' />
                  {(this.state.isBook)
                    ? <Card.Content description={this.isbnNumber()} textAlign='center' />
                    : null
                  }
                  {(this.state.isBook)
                    ? <Card.Content description={this.pageCount()} textAlign='center' />
                    : null
                  }
                  {(this.state.isBook)
                    ? <Card.Content description={this.publisher()} textAlign='center' />
                    : null
                  }
                    <Card.Content extra textAlign='center'>
                      <Label.Group tag size='huge'>
                        <Label><Icon name='dollar sign' header>{product.price}</Icon></Label>
                      </Label.Group>
                    </Card.Content>
              </Card>
        </Modal.Content>
        </div>
        <div className="productModalButtons">
          <Modal.Actions>
          <Input icon='plus cart' iconPosition='left' placeholder='Quantity' />
            <Button color='green' onClick={handleClose} inverted>
              <Icon name='checkmark' /> Add to Cart & Check Out
            </Button>
            <Button color='green' onClick={handleClose} inverted>
              <Icon name='checkmark' /> Add to Cart & Keep shopping
            </Button>
          </Modal.Actions>
        </div>
      </Modal>
      </div>
    );
  }
}

export default ProductModal;
