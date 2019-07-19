import React from "react";
import "../../styles/common/homePage.css";
import { AddButton, DeleteButton, DeleteByIndex } from "./button.js";
//import { Popup } from "./inputForm";
export class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listElements: ["Element 1"],
      deletionIndex: null,
      showPopup: false
    };
  }
  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup,
      deletionIndex:null
    });
  };
  setDeletionIndex = value => {
    //console.log(value)
     this.setState({
       deletionIndex: value,
     })
  };
  addElementMethod = () => {
    let data = this.state.listElements;
    data.push(`Element ${data.length + 1}`);
    this.setState({
      listElements: data
    });
  };

  deleteElementFromBottomMethod = () => {
    let data = this.state.listElements;
    data.pop();
    this.setState({
      listElements: data
    });
  };

  deleteFromSpecificIndex = () => {
    let data = this.state.listElements;
    let index = this.state.deletionIndex;
    let elementCount = data.length;
    if (index > elementCount || index < 0) {
      console.log("invalid index to delete");
    } else {
      this.setState({ deletionIndex: index });
      data.splice(index - 1, 1);
      this.setState({
        listElements: data,
        deletionIndex: 3
      });
    }
  };
  render() {
    return (
      <div className="container">
        <Header />
        <AddButton addElementMethod={this.addElementMethod} />
        <DeleteButton
          deleteElementFromBottomMethod={this.deleteElementFromBottomMethod}
        />
        <DeleteByIndex togglePopup={this.togglePopup} />
        <DisplayList list={this.state.listElements} />
        {/* <div>
          {this.state.showPopup ? (
            <Popup setDeletionIndex={this.setDeletionIndex} />
          ) : null}
        </div> */}

      </div>
    );
  }
}
function Element(props) {
  let value = props.elementName;
  let id = "index" + props.id;
  let dataId = "id_" + id;
  return (
    <div id={id} className="element" dataid={dataId}>
      {value}
    </div>
  );
}
function DisplayList(props) {
  return (
    <div>
      {props.list.map((item, index) => (
        <Element elementName={item} id={index} key={index} />
      ))}
    </div>
  );
}
function Header() {
  return (
    <div className="header">
      <h1>List of Names</h1>
    </div>
  );
}
