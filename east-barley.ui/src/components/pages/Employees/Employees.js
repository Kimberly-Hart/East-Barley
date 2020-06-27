import './Employees.scss';
import React from 'react';
import {
  Header,
  Icon,
  Divider,
  Segment,
  Grid,
  Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ProfileCard from '../../shared/ProfileCard/ProfileCard';
import ProfileDetails from '../../shared/ProfileDetails/ProfileDetails';
import InvoiceCard from '../../shared/InvoiceCard/InvoiceCard';
import employeeShape from '../../../helpers/propz/employeesShape';
import userShape from '../../../helpers/propz/usersShape';
import employeeData from '../../../helpers/data/employeeData';

class Employees extends React.Component {
  state = {
    invoices: [],
    totalSales: 0,
    monthlySales: 0,
  }

  static propTypes = {
    employee: employeeShape.employeeShape,
    user: userShape.userShape,
    isEmployee: PropTypes.bool,
  }

  componentDidMount() {
    const { employee } = this.props;
    const id = employee.salesRepId;
    employeeData.getInvoicesBySalesRepId(id)
      .then((employeeInvoices) => {
        this.setState({ invoices: employeeInvoices });
        employeeData.totalSalesBySalesRepId(id)
          .then((totalSales) => this.setState({ totalSales }));
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        employeeData.monthlySalesBySalesRepId(id, currentMonth, currentYear)
          .then((monthlySales) => this.setState({ monthlySales }));
      })
      .catch((errorFromEmployees) => console.error(errorFromEmployees));
  }

  render() {
    const { invoices, totalSales, monthlySales } = this.state;
    const { employee, user, isEmployee } = this.props;

    return (
      <div className="employeeDashboard">
      <div className="employeeTitle">
        <div className="titleContainer">
          <Header as='h2'>
            <Icon name='user' />
            <Header.Content>
              Employee Dashboard
            </Header.Content>
          </Header>
        </div>
        <div className="divider">
      <Divider />
        </div>
        <div className="employeeDetails">
          <div className="employeeDetailContainer">
            <Segment className="dividedContainer">
              <Grid columns={2} relaxed='very'>
                <Grid.Column>
                  <div className="leftPhotoCard">
                    <ProfileCard user={user} isEmployee={isEmployee} employee={employee} invoices={invoices} />
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="rightSideDetails">
                    <div className="meh">
                    <ProfileDetails user={user} />
                    </div>
                  </div>
                </Grid.Column>
              </Grid>
                <Divider vertical>And</Divider>
            </Segment>
            </div>
          </div>
          <div className="divider2">
            <Divider />
          </div>
          <div className="titleContainer">
            <Header as='h2' icon='unordered list' content='Sales History' />
          </div>
          <div className="invoiceList">
            {(!invoices)
              ? <div className="invoice">
                  <Segment placeholder>
                    <Header icon>
                      <Icon name='pdf file outline' />
                      {invoices}
                    </Header>
                  </Segment>
                </div>
              : <div className="multipleInvoice">
                  <div className="invoiceContainer">
                    <Grid>
                        {invoices.map((invoice) => <InvoiceCard key={invoice.invoiceId} invoice={invoice} />)}
                    </Grid>
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Employees;
