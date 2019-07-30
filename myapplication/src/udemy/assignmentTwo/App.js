import React from "react";
class ValidationComponent extends React.Component {
  render() {
    const length = this.props.textLength;
    let message = "";
    message = length > 5 ? "Text long enough" : "Text too short";
    return <h1>{message}</h1>;
  }
}
class CharComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }
  onChangeFunction = event => {
    const input = event.target.value;
    const newState = {
      inputText: input
    };
    this.setState(newState);
  };
  render() {
    const style = {
      display: "inline-block",
      padding: "16px",
      textAlign: "center",
      margin: "16px",
      border: "1px solid black"
    };
    return (
      <div style={style}>
        <input type="text" onChange={this.onChangeFunction} />
        <h1>{this.state.inputText}</h1>
        <h1 onClick={this.props.click}>{this.props.text}</h1>
      </div>
    );
  }
}
export class InputFiled extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      inputLength: 0
    };
  }
  onChangeHandler = event => {
    const value = event.target.value;
    const valueLength = value.length;
    const newState = {
      inputText: value,
      inputLength: valueLength
    };
    this.setState(newState);
  };
  render() {
    let span =
      this.state.inputLength !== 0 ? (
        <span>
          <ValidationComponent textLength={this.state.inputLength} />
        </span>
      ) : null;
    return (
      <div>
        <input
          type="text"
          onChange={this.onChangeHandler}
          value={this.state.inputText}
        />
        {span}

        <CharComponent />
        <CharComponent />
        <CharComponent />
      </div>
    );
  }
}
export class List extends React.Component {
  constructor() {
    super();
    this.state = {
      listItems: [
        { id: 1, text: "a" },
        { id: 2, text: "b" },
        { id: 3, text: "c" }
      ]
    };
  }
  deleteListItem = itemIndex => {
    const listItems = [...this.state.listItems];
    listItems.splice(itemIndex, 1);
    this.setState({ listItems: listItems });
  };
  render() {
    return (
      <div>
        {this.state.listItems.map((item, index) => {
          return (
            <CharComponent
              text={item.text}
              listIndex={item.id}
              click={() => this.deleteListItem(index)}
              key={`index_${item.id}`}
            />
          );
        })}
      </div>
    );
  }
}
