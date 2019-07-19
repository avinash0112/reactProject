import React, { Component } from "react";
import "../../styles/common/headerStyle.css";
import mainLogo from "../../images/mainLogo.png";
export class Header extends Component {
  render() {
    return (
      <div>
        <div id="headerContainer">
          <div id="logo" className="headerCommon">
            <img src={mainLogo} alt="ontrack logo" />
          </div>
          <div id="customerName" className="headerCommon">
            <h1>ON!Track</h1>
          </div>
          <div id="cart" className="headerCommon">
            <h1>Transfer Cart</h1>
          </div>
          <div id="user" className="headerCommon">
            <h1>Username</h1>
          </div>
        </div>
      </div>
    );
  }
}
