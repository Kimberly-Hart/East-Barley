import React from 'react';
import {
  Header,
  Icon,
  Divider,
  Segment,
  Grid,
} from 'semantic-ui-react';
import userData from '../../../helpers/data/userData';
import authData from '../../../helpers/data/authData';
import ProfileCard from '../../shared/ProfileCard/ProfileCard';
import ProfileDetails from '../../shared/ProfileDetails/ProfileDetails';
import './Profile.scss';

class Profile extends React.Component {
  state = {
    user: {},
  }

  componentDidMount() {
    userData.getUserByUID(authData.getUid())
      .then((user) => {
        this.setState({ user });
      })
      .catch((errorFromProfile) => console.error(errorFromProfile));
  }

  render() {
    const { user } = this.state;
    return (
      <div className="profilePage">
        <div className="accountTitle">
          <div className="titleContainer">
           <Header as='h2'>
              <Icon name='user' />
              <Header.Content>
                Account Information
              </Header.Content>
            </Header>
          </div>
          <div className="divider">
        <Divider />
          </div>
          <div className="accountDetails">
            <div className="accountDetailContainer">
              <Segment className="dividedContainer">
                <Grid columns={2} relaxed='very'>
                  <Grid.Column>
                    <div className="leftPhotoCard">
                      <ProfileCard user={user}/>
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <div className="rightSideDetails">
                      <ProfileDetails user={user} />
                    </div>
                  </Grid.Column>
                </Grid>
                  <Divider vertical>And</Divider>
              </Segment>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Profile;
