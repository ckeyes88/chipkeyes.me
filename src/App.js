import React from 'react';
import './App.styl';
import Navbar from './Components/Navbar';
import colors from './Helpers/Colors';
export default class App extends React.Component {
  render() {
    if (process.env.NODE_ENV !== 'production') {
      console.log('👨‍🚀 Application properties:\n', this.props);
    }
    
    return (
      <div className="app">
          <div style={{"borderTopColor": colors[Math.floor(Math.random()*6)]}} className="left-triangle"></div>
          <div style={{"borderTopColor": colors[Math.floor(Math.random()*6)]}} className="right-triangle"></div>
          <Navbar />
          <main>
            {this.props.children}
          </main>
      </div>
    );
  }
}
