import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = (props) => {
  return (
    <div className="header-component">
      <nav className="nav">
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {' | '}
        <Link to="/about" activeClassName="active">About</Link>
        {' | '}
        <Link to="/courses" activeClassName="active">Courses</Link>
      </nav>
    </div>
  );
};

export default Header;
