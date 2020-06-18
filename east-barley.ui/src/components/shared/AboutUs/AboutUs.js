import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import './AboutUs.scss';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutWrap">
        <div className="aboutBackground">
          <div className="aboutPhoto"></div>
        </div>
          <div className="aboutContents">
          <Container fluid>
            <Header as='h2' className="aboutTitle">About Us</Header>
            <p>
              Domestic dogs inherited complex behaviors, such as bite inhibition, from
              their wolf ancestors, which would have been pack hunters with complex
              body language. These sophisticated forms of social cognition and
              communication may account for their trainability, playfulness, and
              ability to fit into human households and social situations, and these
              attributes have given dogs a relationship with humans that has enabled
              them to become one of the most successful species on the planet today.
            </p>
            <p>
              The dogs' value to early human hunter-gatherers led to them quickly
              becoming ubiquitous across world cultures. Dogs perform many roles for
              people, such as hunting, herding, pulling loads, protection, assisting
              police and military, companionship, and, more recently, aiding
              handicapped individuals. This impact on human society has given them the
              nickname "man's best friend" in the Western world. In some cultures,
              however, dogs are also a source of meat.
            </p>
        </Container>
          </div>
      </div>
    );
  }
}

export default AboutUs;
