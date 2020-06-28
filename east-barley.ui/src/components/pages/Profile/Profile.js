import React from 'react';
import {
  Header,
  Icon,
  Divider,
  Segment,
  Grid,
  Button,
} from 'semantic-ui-react';
import invoiceData from '../../../helpers/data/invoiceData';
import ProfileCard from '../../shared/ProfileCard/ProfileCard';
import ProfileDetails from '../../shared/ProfileDetails/ProfileDetails';
import InvoiceCard from '../../shared/InvoiceCard/InvoiceCard';
import userShape from '../../../helpers/propz/usersShape';
import './Profile.scss';

class Profile extends React.Component {
  state = {
    invoices: [],
  }

  static propTypes = {
    user: userShape.userShape,
  }

  componentDidMount() {
    invoiceData.getInvoicesByUserId(this.props.user.userId)
      .then((invoices) => {
        this.setState({ invoices });
      })
      .catch((errorFromProfile) => console.error(errorFromProfile));
  }

  render() {
    const { invoices } = this.state;
    const { user } = this.props;
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
                      <ProfileCard user={user} invoices={invoices} />
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
              <div className="profileButtonGroup">
                <div className="buttonContainer">
                  <Button.Group attached='bottom'>
                    <Button inverted color='blue' onClick={() => alert('will do later')}>Edit Profile Information</Button>
                    <Button inverted color='red' onClick={() => alert('will do later')}>Delete Profile</Button>
                  </Button.Group>
                </div>
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

export default Profile;
