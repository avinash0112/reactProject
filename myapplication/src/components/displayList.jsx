import React from "react";
import "../styles/common/homePage.css";
import deleteIcon from "../images/deleteIcon.png";

export const Header = () => {
  return (
    <div className="header">
      <h1>List of Names</h1>
    </div>
  );
};

export const CheckBox = props => {
  return (
    <div>
      <input
        type="checkbox"
        className="checkBoxStyle"
        id={props.id}
        checked={props.isChecked}
        onClick={() => props.toggleCheck(props.id)}
      />
    </div>
  );
};

export const Element = props => {
  let value = props.elementName;
  let elementId = "index" + props.id;
  let dataId = "id_" + elementId;
  let deleteIconClass = props.isChecked ? "deleteIcon" : "deleteIconHidden";
  return (
    <div id={elementId} className="element" dataid={dataId}>
      <div className="checkBox">
        <CheckBox
          id={props.id}
          checked={props.isChecked}
          toggleCheck={props.toggleCheck}
        />
      </div>
      <div className="elementDetail">{value}</div>
      <div
        className={deleteIconClass}
        title={`remove ${value}`}
        onClick={() => props.deleteElement(props.id)}
      >
        <img src={deleteIcon} alt="delete" />
      </div>
    </div>
  );
};

export const DisplayList = props => {
  const isListPresent = props.list;
  if (isListPresent.length === 0) {
    return (
      <div className="element">
        <h2>No Elements to display..</h2>
      </div>
    );
  } else {
    return (
      <div>
        {props.list.map((item, index) => (
          <Element
            elementName={item.name}
            id={index}
            key={index}
            deleteElement={props.deleteElement}
            toggleCheck={props.toggleCheck}
            isChecked={item.isSelected}
          />
        ))}
      </div>
    );
  }
};
