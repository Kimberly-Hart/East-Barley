/* eslint-disable no-useless-concat */
import React from 'react';
import {
  Table,
  Icon,
  Header,
  Step,
  Label,
} from 'semantic-ui-react';
import InvoiceDetails from '../../shared/InvoiceDetailsCard/InvoiceDetailsCard';
import invoiceData from '../../../helpers/data/invoiceData';
import './Invoice.scss';

class Invoice extends React.Component {
  state = {
    lineItems: [],
    invoice: [],
  }

  componentDidMount() {
    const theInvoiceId = this.props.match.params.invoiceId;
    invoiceData.getLineItemsByInvoiceId(theInvoiceId)
      .then((lineItems) => {
        this.setState({ lineItems });
      })
      .catch((errorFromLineItems) => console.error(errorFromLineItems));
    invoiceData.getInvoicesByInvoiceId(theInvoiceId)
      .then((invoice) => {
        this.setState({ invoice });
      })
      .catch((errorFromLineItems) => console.error(errorFromLineItems));
  }

  fullAddress = () => {
    const { invoice } = this.state;
    const street = invoice.map((address) => address.billingAddress);
    const city = invoice.map((x) => x.billingCity);
    const state = invoice.map((f) => f.billingState);
    const zip = invoice.map((b) => b.billingZip);
    return <Step.Description>{`${street}` + ', ' + `${city}` + ', ' + `${state}` + ', ' + `${zip}`}</Step.Description>;
  }

  formatDate = (date) => {
    const month = new Date(`${date}`).getMonth() + 1;
    const day = new Date(`${date}`).getDate();
    const year = new Date(`${date}`).getFullYear();
    const fullDate = `${month}` + '/' + `${day}` + '/' + `${year}`;
    return fullDate;
  };

  getStatus = (statusId) => {
    let status;
    if (statusId === 2) {
      status = <div className="statusStepCard">
                 <Step.Group stackable='tablet'>
                    <Step completed>
                      <Icon name="checkmark" />
                      <Step.Content>
                        <Step.Title>Received</Step.Title>
                      </Step.Content>
                    </Step>
                    <Step disabled>
                      <Step.Content>
                        <Step.Title>Completed</Step.Title>
                      </Step.Content>
                    </Step>
                    <Step disabled>
                      <Step.Content>
                        <Step.Title>Shipped</Step.Title>
                      </Step.Content>
                    </Step>
                  </Step.Group>
                </div>;
    } else if (statusId === 3) {
      status = <div className="statusStepCard">
                <Step.Group stackable='tablet'>
                  <Step disabled>
                    <Step.Content>
                      <Step.Title>Received</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step completed>
                  <Icon name="checkmark" />
                    <Step.Content>
                      <Step.Title>Completed</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step disabled>
                    <Step.Content>
                      <Step.Title>Shipped</Step.Title>
                    </Step.Content>
                  </Step>
                </Step.Group>
              </div>;
    } else if (statusId === 4) {
      status = <div className="statusStepCard">
                <Step.Group stackable='tablet'>
                  <Step disabled>
                    <Step.Content>
                      <Step.Title>Received</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step disabled>
                    <Step.Content>
                      <Step.Title>Completed</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step completed>
                    <Icon name="checkmark" />
                    <Step.Content>
                      <Step.Title>Shipped</Step.Title>
                    </Step.Content>
                  </Step>
                </Step.Group>
              </div>;
    }
    return status;
  }

  render() {
    const { lineItems, invoice } = this.state;
    const date = invoice.map((x) => x.invoiceDate);
    const cost = invoice.map((x) => x.totalCost);
    const status = invoice.map((x) => x.statusId);
    return (
      <div className="overallInvoiceContainer">
        <div classname="InvoiceDateTitle">
          <div className="theTitle">
          <Header as='h1'>
              <Icon name='list' />
              <Header.Content>
              {this.formatDate(date)}
              </Header.Content>
            </Header>
          </div>
        </div>
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
      <div className="stepOrderContainer">
      <div className="stepOrderDetails">
        <Step.Group widths={2}>
          <Step className="stepCard">
            <Icon name='credit card' />
            <Step.Content>
              <Step.Title>Total Cost</Step.Title>
              <Step.Description>${cost}.00</Step.Description>
            </Step.Content>
          </Step>
          <Step>
            <Icon name='plane' />
            <Step.Content>
              <Step.Title>Shipping Address</Step.Title>
              {this.fullAddress()}
            </Step.Content>
          </Step>
        </Step.Group>
        </div>
        </div>
        {this.getStatus(status[0])}
      </div>
    );
  }
}

export default Invoice;
