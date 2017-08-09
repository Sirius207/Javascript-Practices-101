import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      headerText: "Welcome to React!",
      contentText: "In this lecture, we will go over the React Router"
    };
  }
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link activeStyle={{color: 'red'}} to="/home">Home</Link></li>
          <li><Link activeStyle={{color: 'red'}} to="/about">About</Link></li>
          <li><Link activeStyle={{color: 'red'}} to="/contact">Contact</Link></li>
          <li><Link activeStyle={{color: 'orange'}} to="/blog">Blog</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
