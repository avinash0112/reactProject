import React from "react";
import "../styles/common/homePage.css";
import Element from "../components/common/element";

export class DisplayList extends React.Component {
  render() {
    const isListPresent = this.props.list;
    if (isListPresent.length === 0) {
      return (
        <div className="element">
          <h2>No Elements to display..</h2>
        </div>
      );
    } else {
      return (
        <div>
          {this.props.list.map((item, index) => (
            <Element
              elementName={item.name}
              id={index}
              key={index}
              deleteElement={this.props.deleteElement}
              toggleCheck={this.props.toggleCheck}
              isChecked={item.isSelected}
            />
          ))}
        </div>
      );
    }
  }
  componentDidUpdate(prevProps, prevState) {
    return this.props.list !== prevProps.list;
  }
}
