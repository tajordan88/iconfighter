import React, { Component } from 'react';

class HP extends Component {
  componentDidUpdate() {
    
  }

  render() {
    return (
      <span className="hpanimate">{this.state.p2HP}</span>
    );
  }
}

export default HP;