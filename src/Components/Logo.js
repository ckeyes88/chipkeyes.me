import React, { Component } from 'react'
import { getColors } from '../Helpers/Colors';
class Logo extends Component {
  
  render() {
    const colors = getColors();
    
    return (
      <svg id="main-logo" 
        height={this.props.height}
        width={this.props.width}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 157.2 183.94">
        {/* <g id="Layer_2" data-name="Layer 2"> */}
          <g id="Layer_2-2" data-name="Layer 2">
            {/* <polygon fill={colors[0]} className="cls-1" points="0.5 78.5 0.5 79.16 0.79 78.83 0.5 78.5" /> */}
            <polygon fill={colors[0]} className="cls-1" points="72.83 0.64 72.23 0.54 0.65 41.62 0.65 81.5 1.36 81.83 72.83 0.64" />
            <polygon fill={colors[1]} className="cls-1" points="0.65 82.16 0.65 123.78 72.23 164.86 72.99 164.54 1.26 81.83 0.65 82.16" />
            <polygon fill={colors[2]} className="cls-1" points="72 0.64 0.87 81.83 49.4 137.94 97.28 15.2 72 0.64" />
            <polygon fill={colors[3]} className="cls-1" points="142.65 41.62 97.03 15.2 71.82 79.52 142.65 55.68 142.65 41.62" />
            <polygon fill={colors[4]} className="cls-1" points="72.19 79.52 49.4 137.94 72.42 164.54 110.29 142.72 90.98 73.21 72.19 79.52" />
            <polygon fill={colors[5]} className="cls-1" points="142.65 55.68 90.73 73.21 109.91 142.72 142.65 123.78 142.65 55.68" />
          </g>
        {/* </g> */}
      </svg>
    )
  }
}

export default Logo