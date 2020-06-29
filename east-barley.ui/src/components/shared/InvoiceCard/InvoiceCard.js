/* eslint-disable no-useless-concat */
/* eslint-disable no-else-return */
import React from 'react';
import {
  Card,
  Label,
  Icon,
  Grid,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './InvoiceCard.scss';

class InvoiceCard extends React.Component {
  formatDate = (date) => {
    const month = new Date(`${date}`).getMonth() + 1;
    const day = new Date(`${date}`).getDate();
    const year = new Date(`${date}`).getFullYear();
    const fullDate = `${month}` + '/' + `${day}` + '/' + `${year}`;
    return fullDate;
  };

  getStatus = (statusId) => {
    let label;
    if (statusId === 1) {
      label = <Label color='grey' ribbon>
            Open Cart
             </Label>;
    } else if (statusId === 2) {
      label = <Label color='yellow' ribbon>
            Received
             </Label>;
    } else if (statusId === 3) {
      label = <Label color='orange' ribbon>
            Completed
             </Label>;
    } else if (statusId === 4) {
      label = <Label color='blue' ribbon>
            Shipped
             </Label>;
    }
    return label;
  }

  shipStatus = (statusId) => {
    const { invoice } = this.props;
    if (statusId === 1) {
      return 'Go view items saved in your cart';
    } else if (statusId === 2) {
      return `Shipping To: ${invoice.billingAddress}, ${invoice.billingCity}, ${invoice.billingState} ${invoice.billingZip}`;
    } else {
      return `Shipped To: ${invoice.billingAddress}, ${invoice.billingCity}, ${invoice.billingState} ${invoice.billingZip}`;
    }
  }

  render() {
    const { invoice } = this.props;
    return (
      <div className="invoiceCardContainer">
        <Grid.Column>
          <Link to={`invoice/${invoice.invoiceId}`} >
          <Card className="invoiceCard">
            {this.getStatus(invoice.statusId)}
              <Card.Content header={`$${invoice.totalCost.toFixed(2)}`} />
              <Card.Content description={this.shipStatus(invoice.statusId)} />
              <Card.Content extra className="extraDetails">
                <Icon name='calendar alternate outline' />{this.formatDate(invoice.invoiceDate)}
              </Card.Content>
            </Card>
            </Link>
        </Grid.Column>
      </div>
    );
  }
}

export default InvoiceCard;
