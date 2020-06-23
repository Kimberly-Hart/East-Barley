import React from 'react';
import SingleBeer from '../../shared/SingleBeer/SingleBeer';
import beersData from '../../../helpers/data/beersData';
import './AllBeers.scss';

class AllBeers extends React.Component {
    state = {
      beers: [],
    }

    componentDidMount() {
      beersData.getAllBeers()
        .then((beers) => {
          this.setState({ beers });
        })
        .catch((errorFromGetBeers) => console.error({ errorFromGetBeers }));
    }

    render() {
      const { beers } = this.state;
      return (
        <div className="AllBeers">
          <h1>Beers</h1>
          <div className="container">
          { beers.map((beer) => <SingleBeer key={beer.productId} beer={beer} />)}
          </div>
        </div>
      );
    }
}

export default AllBeers;
