import React from "react";
import "../../styles/common/buttonStyle.css";

export class AddButton extends React.Component {
  render() {
    return (
      <button
        className="btn btn-primary listButtons"
        onClick={this.props.addElementMethod}
      >
        Add element
      </button>
    );
  }
}
export class DeleteButton extends React.Component {
  render() {
    return (
      <button
        className="btn btn-secondary listButtons"
        onClick={this.props.deleteElementFromBottomMethod}
      >
        Delete last element
      </button>
    );
  }
}

export const DeleteAllElements = props => {
  return (
    <button className="btn btn-danger listButtons" onClick={props.deleteAll}>
      Delete All
    </button>
  );
};
export const DeleteSelected = props => {
  return <button className="btn btn-info listButtons">Delete Selected</button>;
};
