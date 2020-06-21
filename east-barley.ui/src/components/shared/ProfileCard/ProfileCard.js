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
    const { user } = this.props;
    return (
      <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>{user.firstName} {user.lastName}</Card.Header>
            <Card.Meta>{this.formatDate(user.dateAccountCreated)}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              10 Friends
            </a>
          </Card.Content>
        </Card>
    );
  }
}

export default ProfileCard;
