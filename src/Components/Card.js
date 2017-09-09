import React, { Component } from 'react';
import PropTypes from 'prop-types';
import colors from '../Helpers/Colors';

class Card extends Component {
  
  render () {
    const background = this.props.image ? 
      {backgroundImage: `url('${this.props.image}')`} : {backgroundColor: `${colors[Math.floor(Math.random()*6)]}`}

    return (
      <div className="article">
        <div className="article-image" style={background}></div>
        <div className="article-info">
          <h3 className="article-title"><a href={this.props.url}>{this.props.title}</a></h3>
          <p className="article-preview">{this.props.preview}</p>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  image: PropTypes.string,
  preview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Card