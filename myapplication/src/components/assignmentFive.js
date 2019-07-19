import React, { Component } from "react";
import "../styles/asstFive.css";

export class AssignmentFive extends Component {
  render() {
    return (
      <div id="container">
        <div id="layout">
          <div id="header">
            <h1>Hello World!!</h1>
          </div>
          <div id="navBar">
            <h2>NAVIGATION</h2>
          </div>

          <div id="content">
            <div id="leftCard" className="card">
              <div className="image" />
              <div className="text">
                <h6>
                  One common use for display: inline-block is to display list
                  items horizontally instead of vertically. The following
                  example creates horizontal navigation links:
                </h6>
              </div>
            </div>
            <div id="middleCard" className="card">
              <div className="image" />
              <div className="text">
                <h6>
                  One common use for display: inline-block is to display list
                  items horizontally instead of vertically. The following
                  example creates horizontal navigation links:
                </h6>
              </div>
            </div>
            <div id="rightCard" className="card">
              <div className="image" />
              <div className="text">
                <h6>
                  One common use for display: inline-block is to display list
                  items horizontally instead of vertically. The following
                  example creates horizontal navigation links:
                </h6>
              </div>
            </div>
          </div>

          <div id="footer">
            <h6>FOOTER</h6>
          </div>
        </div>
      </div>
    );
  }
}
