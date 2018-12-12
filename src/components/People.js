import React, { Component } from 'react';
import { Link } from "react-router-dom";


class People extends Component {
  render() {
    return (
      <div>
        <h1>People</h1>
        <br/>
                <Link to="/home">Home</Link>
                <br/>
                <Link to="/form">Form</Link>
                <br/>
                
      </div>
    );
  }
}

export default People;
