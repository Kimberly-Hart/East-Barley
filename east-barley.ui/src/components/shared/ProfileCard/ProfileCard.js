import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import userShape from '../../../helpers/propz/usersShape';
import employeeShape from '../../../helpers/propz/employeesShape';

class ProfileCard extends React.Component {
  static propTypes = {
    isEmployee: PropTypes.bool,
    user: userShape.userShape,
    employee: employeeShape.employeeShape,
  }

  formatMonth = (dt) => {
    const mlist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return mlist[dt - 1];
  };

  formatDate = (date) => {
    const m = new Date(`${date}`).getMonth() + 1;
    const month = this.formatMonth(m);
    const year = new Date(`${date}`).getFullYear();
    const fullDate = `${month} ${year}`;
    return fullDate;
  };

  render() {
    const {
      user,
      invoices,
      isEmployee,
      employee,
    } = this.props;
    return (
      <Card>
        { (user.imageUrl)
          ? <Image src={user.imageUrl} wrapped ui={false} />
          : <Image src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' wrapped ui={false} />
        }
        <Card.Content>
          <Card.Header>{user.firstName} {user.lastName}</Card.Header>
          { (isEmployee)
            ? <Card.Meta>{this.formatDate(employee.hireDate)}</Card.Meta>
            : <Card.Meta>{this.formatDate(user.dateAccountCreated)}</Card.Meta>
          }
        </Card.Content>
        { (isEmployee)
          ? <Card.Content extra><Icon name='user' /> Total Number of Sales: {invoices.length} </Card.Content>
          : <Card.Content extra><Icon name='user' />{invoices.length} Total Orders </Card.Content>
        }
      </Card>
    );
  }
}

export default ProfileCard;
