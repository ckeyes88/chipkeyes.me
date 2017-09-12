import React from 'react';
import Logo from './Logo';
import Icon from 'react-simple-icons';

export default class Landing extends React.Component {

  componentWillMount() {
    
  }

  render() {
    // console.log("PR,OPS", this.props);
    return (
      <div className="content">
        <Logo 
          height={125} 
          width={125}/>
        <h1>CHIP KEYES - REBUILD</h1>
        <ul id="social">
          <li><a href="https://www.linkedin.com/in/cchipkeyes/" aria-label="External link to Linkedin account"><Icon className="icon" name="linkedin"/></a></li>
          <li><a href="https://github.com/ckeyes88" aria-label="External link to Github profile"><Icon className="icon" name="github"/></a></li>
          <li><a href="https://twitter.com/godlygilligan" aria-label="External link to Twitter profile"><Icon className="icon" name="twitter"/></a></li>
        </ul>
      </div>
    );
  }
}
