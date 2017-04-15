import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {

  render() {

    return (
      <div className="home-page-component">
        <div className="jumbotron">
          <h1>Home page component</h1>
          <p>page content</p>
          <Link to="about" className="btn btn-primary btn-lg">Lear More</Link>
        </div>
      </div>
    );

  }
}

export default HomePage;
