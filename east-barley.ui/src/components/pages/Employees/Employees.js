import './Employees.scss';
import React from 'react';
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
    return (
      <div>
        <h1>Employee Dashboard</h1>
      </div>
    );
  }
}

export default Employees;
