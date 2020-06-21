import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

class ProfileCard extends React.Component {
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
    const { user, invoices } = this.props;
    return (
      <Card>
          <Image src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>{user.firstName} {user.lastName}</Card.Header>
            <Card.Meta>{this.formatDate(user.dateAccountCreated)}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              {invoices.length} Total Orders
            </a>
          </Card.Content>
        </Card>
    );
  }
}

export default ProfileCard;
