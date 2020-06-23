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
      return (
        <div className="AllWhiskeys">
          <h1>Whiskeys</h1>
          <div>
          { whiskeys.map((whiskey) => <SingleWhiskey key={whiskey.productId} whiskey={whiskey} />)}
          </div>
        </div>
      );
    }
}

export default AllWhiskeys;
