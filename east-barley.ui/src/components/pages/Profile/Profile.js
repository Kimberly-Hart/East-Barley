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
import invoiceData from '../../../helpers/data/invoiceData';
import ProfileCard from '../../shared/ProfileCard/ProfileCard';
import ProfileDetails from '../../shared/ProfileDetails/ProfileDetails';
import InvoiceCard from '../../shared/InvoiceCard/InvoiceCard';
import './Profile.scss';

class Profile extends React.Component {
  state = {
    user: {},
    invoices: [],
  }

  // getUserInfo = (uid) => {
  //   userData.getUserByUID(uid)
  //     .then((user) => {
  //       this.setState({ user });
  //     })
  //     .catch((errorFromProfile) => console.error(errorFromProfile));
  // }

  // getInvoicesByUser = (userId) => {
  //   invoiceData.getInvoicesByUserId(userId)
  //     .then((invoices) => {
  //       this.setState({ invoices });
  //     })
  //     .catch((errorFromProfile) => console.error(errorFromProfile));
  // }

  componentDidMount() {
    userData.getUserByUID(authData.getUid())
      .then((user) => {
        this.setState({ user });
      }).then(() => {
        invoiceData.getInvoicesByUserId(this.state.user.userId)
          .then((invoices) => {
            this.setState({ invoices });
          });
      })
      .catch((errorFromProfile) => console.error(errorFromProfile));
  }

  render() {
    const { user, invoices } = this.state;
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
              <Header as='h2' icon='unordered list' content='Order History' />
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
                : <div className="invoice">
                    {invoices.map((invoice) => <InvoiceCard key={invoice.id} invoice={invoice} />)}
                  </div>
              }
            </div>
          </div>
        </div>
    );
  }
}

export default Profile;
