import React from "react";
import { UserInput, UserOutput } from "./assignmentOne";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "Initials"
    };
  }
  onInputChange = event => {
    let value = event.target.value;
    this.setState({
      userName: value
    });
  };

  render() {
    return (
      <div>
        <UserInput
          onChangeHandler={this.onInputChange}
          nameValue={this.state.userName}
        />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}
