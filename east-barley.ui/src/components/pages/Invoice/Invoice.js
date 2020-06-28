import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import InvoiceDetails from '../../shared/InvoiceDetailsCard/InvoiceDetailsCard';
import invoiceData from '../../../helpers/data/invoiceData';
import './Invoice.scss';

class Invoice extends React.Component {
  state = {
    lineItems: [],
  }

  componentDidMount() {
    const theInvoiceId = this.props.match.params.invoiceId;
    invoiceData.getLineItemsByInvoiceId(theInvoiceId)
      .then((lineItems) => {
        this.setState({ lineItems });
      })
      .catch((errorFromLineItems) => console.error(errorFromLineItems));
  }

  render() {
    const { lineItems } = this.state;
    return (
      <div className="overallTableContainer">
        <div className="tableContainer">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Product</Table.HeaderCell>
                <Table.HeaderCell>Product Name</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Details</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            { lineItems.map((lineItem) => <InvoiceDetails key={lineItem.lineItemid} lineItem={lineItem} />)}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default Invoice;
