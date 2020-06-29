import React from 'react';
import SingleBeer from '../../shared/SingleBeer/SingleBeer';
import beersData from '../../../helpers/data/beersData';
import './AllBeers.scss';

class AllBeers extends React.Component {
    state = {
      beers: [],
    }

    retreiveBeers = () => {
      beersData.getAllBeers()
        .then((beers) => {
          this.setState({ beers });
        })
        .catch((errorFromGetBeers) => console.error({ errorFromGetBeers }));
    }

    componentDidMount() {
      this.retreiveBeers();
    }

    render() {
      const { beers } = this.state;
      const { isEmployee } = this.props;
      return (
        <div className="AllBeers text-center">
          <h1>Beers</h1>
          <div className="container">
          { beers.map((beer) => <SingleBeer key={beer.productId} beer={beer} isEmployee={isEmployee} retreiveBeers={this.retreiveBeers} />)}
          </div>
        </div>
      );
    }
}

export default AllBeers;
