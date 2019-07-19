import React, { Component } from "react";
import "../styles/asstSix.css";

export class AssignmentSix extends Component {
  render() {
    return (
      <div id="container">
        <div id="layout">
          <div id="header">
            <div id="buttonPanel">
              <button className="button">Home</button>
              <button className="button">Blog</button>
              <button className="button">Contact Us</button>
              <button className="button">About Us</button>
              <button className="button">Products</button>
            </div>
          </div>
          <div id="content">
            <div id="imageList">
              <div className="imageContainer">
                <div className="image">
                  <div className="rectangle">
                    <div className="innerRectangle">
                      <div className="circle" />
                      <div className="smallTriangle" />
                      <div className="leftTriangle" />
                    </div>
                  </div>
                </div>
                <div className="imageButton">
                  <button className="button" id="buttonOne">
                    Button
                  </button>
                </div>
              </div>

              <div className="imageContainer">
                <div className="image">
                  <div className="rectangle">
                    <div className="innerRectangle">
                      <div className="circle" />
                      <div className="smallTriangle" />
                      <div className="leftTriangle" />
                    </div>
                  </div>
                </div>
                <div className="imageButton">
                  <button className="button" id="buttonTwo">
                    Button
                  </button>
                </div>
              </div>

              <div className="imageContainer">
                <div className="image">
                  <div className="rectangle">
                    <div className="innerRectangle">
                      <div className="circle" />
                      <div className="smallTriangle" />
                      <div className="leftTriangle" />
                    </div>
                  </div>
                </div>
                <div className="imageButton">
                  <button className="button" id="buttonThree">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="text">
            <h4>
              Then when I looked at errors, I would go through the printer test
              and modify them, using my understanding of the printer languages
              to test my theories about why specific printer language commands
              were causing the problems. Pretty soon I was filing detailed bug
              reports with snippets of printer code, indicating exactly what
              printer language commands were likely to be behaving wrong and
              causing the errors. It didn’t take long before the software
              development team became interested in pulling me in as a resource
              to show them how and what I was doing and for me to do more of it.
              I was eventually asked to write printer tests, and thus I
              officially became a programmer and got an actual programmer
              title.Later in my career, I went through a similar experience when
              I couldn’t find a software development job and again found myself
              at HP, this time in the role of a QA test lead. This time, I was
              sitting next to a fairly new software developer who didn’t have
              too good of a grasp of C++. When we’d chat about some of the
              problems he was facing, I’d come over to his cubicle and give him
              some tips and help to get his tasks done. I didn’t take any credit
              and only tried to make him look as good as possible.
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
