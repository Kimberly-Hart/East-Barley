import React from 'react';
import SingleWhiskey from '../../shared/SingleWhiskey/SingleWhiskey';
import whiskeysData from '../../../helpers/data/whiskeysData';
import './AllWhiskeys.scss';

class AllWhiskeys extends React.Component {
    state = {
      whiskeys: [],
    }

    componentDidMount() {
      whiskeysData.getAllWhiskeys()
        .then((whiskeys) => {
          this.setState({ whiskeys });
        })
        .catch((errorFromGetWhiskeys) => console.error({ errorFromGetWhiskeys }));
    }

    render() {
      const { whiskeys } = this.state;
      const { isEmployee } = this.props;
      return (
        <div className="AllWhiskeys text-center">
          <h1>Whiskeys</h1>
          <div className="container">
          { whiskeys.map((whiskey) => <SingleWhiskey key={whiskey.productId} whiskey={whiskey} isEmployee={isEmployee} />)}
          </div>
        </div>
      );
    }
}

export default AllWhiskeys;
