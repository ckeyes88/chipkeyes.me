import React from 'react';
import Logo from './Logo';

export default class NotFound extends React.Component {
  render () {
    return (
      <div className="content">
        <Logo height={125} width={125}/>
        <h2>Oops! Not sure where you're going.</h2>
      </div>
    )
  }
}
