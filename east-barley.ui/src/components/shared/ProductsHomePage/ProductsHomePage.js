import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';
import './ProductsHomePage.scss';

class ProductsHome extends React.Component {
  state = {
    products: [],
    verified: true,
  }

  render() {
    return (
      <div className="productsHome">
        <div className="productsBanner"></div>
        { (this.state.verified)
          ? <div className="productsContents">
              <div className="productsFinal">
                <div className="productsCards">

                <Grid>
                    <Grid.Row relaxed columns={3}>
                      <Grid.Column>
                          <Card className="beerCard">
                            <Image className="beerPhoto" src='https://modistbrewing.com/wp-content/uploads/2017/09/Image-uploaded-from-iOS-3.jpg' />
                            <Card.Content>
                              <Card.Header>We are a Brewery</Card.Header>
                              <Card.Description>
                                  We brew all of our own beer.
                              </Card.Description>
                            </Card.Content>
                          </Card>
                      </Grid.Column>
                      <Grid.Column>
                        <Card className="whiskeyCard">
                          <Image className="beerPhoto" src='https://modistbrewing.com/wp-content/uploads/2017/09/Image-uploaded-from-iOS-3.jpg' />
                          <Card.Content>
                            <Card.Header>We are a Distillery</Card.Header>
                            <Card.Description>
                                We distill all of our own spirits.
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                      <Grid.Column>
                        <Card className="booksCard">
                          <Image className="beerPhoto" src='https://modistbrewing.com/wp-content/uploads/2017/09/Image-uploaded-from-iOS-3.jpg' />
                          <Card.Content>
                            <Card.Header>We are avid readers</Card.Header>
                            <Card.Description>
                                Come on in and have a pint and read a local author's book.
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row relaxed columns={3}>
                      <Grid.Column>
                      <Card className="booksCard">
                          <Image className="beerPhoto" src='https://modistbrewing.com/wp-content/uploads/2017/09/Image-uploaded-from-iOS-3.jpg' />
                          <Card.Content>
                            <Card.Header>We are avid readers</Card.Header>
                            <Card.Description>
                                Come on in and have a pint and read a local author's book.
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                      <Grid.Column>
                      <Card className="booksCard">
                          <Image className="beerPhoto" src='https://modistbrewing.com/wp-content/uploads/2017/09/Image-uploaded-from-iOS-3.jpg' />
                          <Card.Content>
                            <Card.Header>We are avid readers</Card.Header>
                            <Card.Description>
                                Come on in and have a pint and read a local author's book.
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  </div>
                </div>
            </div>
          : <div className="productsContents">
                <Grid>
                    <Grid.Row columns={3}>
                      <Grid.Column>
                          {/* <Card className="beerCard">
                            <Image className="beerPhoto" src='https://modistbrewing.com/wp-content/uploads/2017/09/Image-uploaded-from-iOS-3.jpg' />
                            <Card.Content>
                              <Card.Header>We are a Brewery</Card.Header>
                              <Card.Description>
                                  We brew all of our own beer.
                              </Card.Description>
                            </Card.Content>
                          </Card> */}
                          <Image className="beerPhoto" src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </Grid.Column>
                      <Grid.Column>
                        {/* <Card className="whiskeyCard">
                          <Image className="beerPhoto" src='https://modistbrewing.com/wp-content/uploads/2017/09/Image-uploaded-from-iOS-3.jpg' />
                          <Card.Content>
                            <Card.Header>We are a Distillery</Card.Header>
                            <Card.Description>
                                We distill all of our own spirits.
                            </Card.Description>
                          </Card.Content>
                        </Card> */}
                        <Image className="beerPhoto" src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </Grid.Column>
                      <Grid.Column>
                        {/* <Card className="booksCard">
                          <Image className="beerPhoto" src='https://modistbrewing.com/wp-content/uploads/2017/09/Image-uploaded-from-iOS-3.jpg' />
                          <Card.Content>
                            <Card.Header>We are avid readers</Card.Header>
                            <Card.Description>
                                Come on in and have a pint and read a local author's book.
                            </Card.Description>
                          </Card.Content>
                        </Card> */}
                        <Image className="beerPhoto" src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        }
      </div>
    );
  }
}

export default ProductsHome;
