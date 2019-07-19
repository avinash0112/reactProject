import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import './styles/layout1.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>login</h1>
      </div>
    );
  }
}

export class SocialCard extends Component{
  render() {
    return (
      <div className="socialCardContainer" div1Text="text from parent div">
        <div id="cardHeader">
          <div id="firstDiv">
            <h1>This is Social Card</h1>
          </div>
          <div id="secondDiv">
            <h2>This is another div</h2>
          </div>
          <h3>this is in card header</h3>
        </div>
        <h3>this is content</h3>
      </div>
    );
  }
}

export class Layout1 extends Component{
  render() {
    return (
      <div id="blueContainer">
        <div id="yellowContainer">
        </div>
        <div id="greenContainer">
          <div id="greenOne">

          </div>
          <div id="greenTwo">
          
          </div>
        </div>
        <div id="circle">

        </div>
        <div id="triangle">

        </div>
        <div id="triangle2">
        
        </div>
      </div>
    );
  }
}

export default App;
