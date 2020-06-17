import React from 'react';
import AboutUs from '../../shared/AboutUs/AboutUs';
import ProductsHomePage from '../../shared/ProductsHomePage/ProductsHomePage';
import CommunityHome from '../../shared/CommunityHome/CommunityHome';
import './Homepage.scss';

class HomePage extends React.Component {
  state = {
    verified: true,
  }

  render() {
    return(
      <div className="homepage">
        <AboutUs />
        <ProductsHomePage />
        <CommunityHome />
      </div>
    );
  }
}

export default HomePage;