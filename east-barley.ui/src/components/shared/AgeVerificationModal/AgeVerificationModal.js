import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  Form,
  Input,
} from 'semantic-ui-react';
import './AgeVerificationModal.scss';

class AgeVerificationModal extends React.Component {
  state = {
    open: true,
    dateOfBirth: '',
  }

  static propTypes = {
    hasVerified: PropTypes.bool,
    setOver21: PropTypes.func,
  }

  componentDidMount() {
    const { hasVerified } = this.props;
    if (hasVerified) {
      this.setState({ open: false });
    }
  }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape: false, closeOnDimmerClick: false, open: true });
  }

  close = () => this.setState({ open: false });

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;

    return (
      <div>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
        >
          <Modal.Header>You must be 21 to view our beverage selection</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>First Name</label>
                <Input type='date' id='dateOfBirth' />
              </Form.Field>
              <Modal.Actions>
                <Button
                  onClick={this.close}
                  type='submit'
                  labelPosition='right'
                  icon='calendar check outline'
                  content='Submit'
                  basic color='green'
                />
              </Modal.Actions>
              {/* <Button type='submit'>Submit</Button> */}
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default AgeVerificationModal;
