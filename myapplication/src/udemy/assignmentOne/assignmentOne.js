import React from "react";
import "./styles/assignmentOneStyle.css";
export class UserInput extends React.Component {
  render() {
    return (
      <input
        onChange={this.props.onChangeHandler}
        name="userName"
        value={this.props.nameValue}
      />
    );
  }
}

export class UserOutput extends React.Component {
  render() {
    const style = {
      backgroundColor: "#348768",
      width: "50%",
      margin: "auto",
      marginTop: "10px",
      color: "yellow"
    };
    return (
      <div>
        <p style={style}>{this.props.userName}</p>
      </div>
    );
  }
}
