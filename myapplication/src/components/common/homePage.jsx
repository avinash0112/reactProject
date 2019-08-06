import React from "react";
import "../../styles/common/homePage.css";
import { DetailPanel } from "../common/detailPanel";
import Header from "../common/header";
import {
  AddButton,
  DeleteButton,
  DeleteAllElements,
  DeleteSelected
} from "./button";
import { DisplayList } from "../displayList";

export class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listElements: [{ name: "Element 1", isSelected: false }]
    };
  }
  addElementMethod = () => {
    let data = [...this.state.listElements];
    data.push({ name: `Element ${data.length + 1}`, isSelected: false });
    this.setState({
      listElements: data
    });
  };
  deleteElementFromBottomMethod = () => {
    let data = [...this.state.listElements];
    data.pop();
    this.setState({
      listElements: data
    });
  };
  deleteElement = elementIndex => {
    let elementList = [...this.state.listElements];
    elementList.splice(elementIndex, 1);
    // elementList[elementIndex].isSelected = false;
    this.setState({ listElements: elementList });
  };
  handleCheckBox = checkBoxIndex => {
    let data = [...this.state.listElements];
    data[checkBoxIndex].isSelected = !data[checkBoxIndex].isSelected;
    this.setState({ listElements: data });
  };
  deleteAllElements = () => {
    let data = [...this.state.listElements];
    data = [];
    this.setState({ listElements: data });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <AddButton addElementMethod={this.addElementMethod} />
        <DeleteButton
          deleteElementFromBottomMethod={this.deleteElementFromBottomMethod}
        />
        <DeleteAllElements deleteAll={this.deleteAllElements} />
        <DeleteSelected />
        <DisplayList
          list={this.state.listElements}
          deleteElement={index => this.deleteElement(index)}
          toggleCheck={index => this.handleCheckBox(index)}
        />
        <DetailPanel />
      </div>
    );
  }
  
}
