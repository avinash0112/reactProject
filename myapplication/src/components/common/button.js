import React from "react";
import "../../styles/common/buttonStyle.css";

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonName: "initial",
      count: 0
    };
    this.changeName = this.changeName.bind(this);
  }
  changeName() {
    this.setState(state => ({
      count: state.count + 1,
      buttonName:
        state.count % 2 === 0 ? state.buttonName + "a" : state.buttonName + "b"
    }));
  }
  render() {
    return (
      <button onClick={this.changeName} className="button1">
        {this.state.buttonName}
      </button>
    );
  }
}
export class AddButton extends React.Component {
  render() {
    return (
      <button className="listButtons" onClick={this.props.addElementMethod}>
        Add element
      </button>
    );
  }
}
export class DeleteButton extends React.Component {
  render() {
    return (
      <button
        className="listButtons"
        onClick={this.props.deleteElementFromBottomMethod}
      >
        Delete last element
      </button>
    );
  }
}
export class DeleteByIndex extends React.Component {
  render() {
    return (
      <button
        className="listButtons"
        onClick={this.props.togglePopup}
      >
        Delete by index
      </button>
    );
  }

}
