import React from 'react';
import { Table } from 'semantic-ui-react';
import './ProfileDetails.scss';

class ProfileDetails extends React.Component {
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
      const { user } = this.props;
      return (
      <Table definition className="tableDetails">
        <Table.Body>
          <Table.Row>
            <Table.Cell width={2}>Email</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Account Created</Table.Cell>
            <Table.Cell>{this.formatDate(user.dateAccountCreated)}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Date Of Birth</Table.Cell>
            <Table.Cell>{this.formatDate(user.dateOfBirth)}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Verified</Table.Cell>
            <Table.Cell>{(user.isOver21) ? <p>True</p> : <p>False</p>}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      );
    }
}

export default ProfileDetails;
