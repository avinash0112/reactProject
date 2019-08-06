import React from "react";
import CheckBox from "../common/checkBox";
import deleteIcon from "../../images/deleteIcon.png";
export default class Element extends React.Component {
  render() {
    let props = this.props;
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
  }
}
