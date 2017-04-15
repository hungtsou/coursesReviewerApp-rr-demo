import React, {Component} from 'react';
import {Link} from 'react-router';

class AboutPage extends Component {

  render() {

    return (
      <div className="About-page-component">
        <div className="jumbotron">
          <h1>About page component</h1>
          <p>page content</p>
          <Link to="/" className="btn btn-primary btn-lg">Go home</Link>
        </div>
      </div>
    );

  }
}

export default AboutPage;
