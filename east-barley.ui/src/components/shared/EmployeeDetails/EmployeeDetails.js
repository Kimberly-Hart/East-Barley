/* eslint-disable no-useless-concat */
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import employeeShape from '../../../helpers/propz/employeesShape';
import './EmployeeDetails.scss';

class EmployeeDetails extends React.Component {
  static propTypes = {
    user: employeeShape.employeeShape,
    totalSales: PropTypes.number,
    monthlySales: PropTypes.number,
  }

  formatMonth = (dt) => {
    const mlist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return mlist[dt - 1];
  };

  formatDate = (date) => {
    const m = new Date(`${date}`).getMonth() + 1;
    const month = this.formatMonth(m);
    const day = new Date(`${date}`).getDate();
    const year = new Date(`${date}`).getFullYear();
    const fullDate = `${month}` + '/' + `${day}` + '/' + `${year}`;
    return fullDate;
  };

  render() {
    const { employee, totalSales, monthlySales } = this.props;
    return (
    <Table definition className="tableDetails">
      <Table.Body>
      <Table.Row>
          <Table.Cell width={2}>Role</Table.Cell>
          <Table.Cell>{employee.title}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Email</Table.Cell>
          <Table.Cell>{employee.email}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Employee Since</Table.Cell>
          <Table.Cell>{this.formatDate(employee.hireDate)}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Total Sales</Table.Cell>
          <Table.Cell>{`$${totalSales.toFixed(2)}`}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Sales This Month</Table.Cell>
          <Table.Cell>{`$${monthlySales.toFixed(2)}`}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    );
  }
}

export default EmployeeDetails;
