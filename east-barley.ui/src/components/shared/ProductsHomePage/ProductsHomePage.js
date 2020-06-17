import React from 'react';
import {
  Card,
  Image,
  Grid,
  Button,
} from 'semantic-ui-react';
import './ProductsHomePage.scss';

class ProductsHome extends React.Component {
  state = {
    products: [],
    verified: true,
  }

  render() {
    return (
      <div className="productsHome">
        { (this.state.verified)
          ? <React.Fragment>
            <div className="productsBanner"></div>
             <div className="productsContents">
              <div className="productsFinal">
                <h1 className="homepageProductTitle">Our Products</h1>
                <div className="productsCards">
                <Grid>
                    <Grid.Row relaxed columns={4}>
                      <Grid.Column>
                          <Card className="homeProductCard">
                            <Image className="cardPhoto" src='https://modistbrewing.com/wp-content/uploads/2017/09/Image-uploaded-from-iOS-3.jpg' />
                            <Button basic color='blue'>Our Beers Selection</Button>
                          </Card>
                      </Grid.Column>
                      <Grid.Column>
                        <Card className="homeProductCard">
                          <Image className="cardPhoto" src='https://www.wine-searcher.com/images/grape/whisky-----single-grain-1747-1-1.jpg' />
                          <Button basic color='blue'>Our Whiskeys Selection</Button>
                        </Card>
                      </Grid.Column>
                      <Grid.Column>
                        <Card className="homeProductCard">
                          <Image className="cardPhoto" src='https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg?w=650&h=433&fit=fill' />
                          <Button basic color='blue'>Our Books Selection</Button>
                        </Card>
                      </Grid.Column>
                      <Grid.Column>
                          <Card className="homeProductCard">
                            <Image className="cardPhoto" src='https://i.pinimg.com/originals/48/4a/54/484a54c56e5f87817c70b04f887cf8f9.jpg' />
                            <Button basic color='blue'>Our Barley Milk Selection</Button>
                          </Card>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  </div>
                </div>
            </div>
            </React.Fragment>
          : <React.Fragment>
             <div className="productsBanner"></div>
              <div className="productsContents">
                <Grid>
                    <Grid.Row columns={2}>
                    <Grid.Column>
                        <Card className="homeProductCard">
                          <Image className="cardPhoto" src='https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg?w=650&h=433&fit=fill' />
                          <Button basic color='blue'>Our Books Selection</Button>
                        </Card>
                      </Grid.Column>
                      <Grid.Column>
                          <Card className="homeProductCard">
                            <Image className="cardPhoto" src='https://i.pinimg.com/originals/48/4a/54/484a54c56e5f87817c70b04f887cf8f9.jpg' />
                            <Button basic color='blue'>Our Barley Milk Selection</Button>
                          </Card>
                      </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
          </React.Fragment>
        }
      </div>
    );
  }
}

export default ProductsHome;
