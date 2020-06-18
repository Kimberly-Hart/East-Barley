import './Homepage.scss';
import React from 'react';
import PropTypes from 'prop-types';
import AboutUs from '../../shared/AboutUs/AboutUs';
import ProductsHomePage from '../../shared/ProductsHomePage/ProductsHomePage';
import CommunityHome from '../../shared/CommunityHome/CommunityHome';

class Homepage extends React.Component {
  static propTypes = {
    verified: PropTypes.bool,
  }

  render() {
    const { verified } = this.props;
    return (
      <div>
        <AboutUs />
        <ProductsHomePage verified={verified} />
        <CommunityHome />
      </div>
    );
  }
}

export default Homepage;
