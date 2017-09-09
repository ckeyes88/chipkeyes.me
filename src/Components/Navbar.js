import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav id="main-nav">
        <ul>
          <li><Link to="/">SOCIAL</Link></li>
          <li><Link to="/self">SELF</Link></li>
          <li><Link to="/thoughts">THOUGHTS</Link></li>
          <li><Link to="/work">WORK</Link></li>
        </ul>
      </nav>
    )
  }
}
