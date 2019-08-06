import React from "react";
import "../../styles/common/homePage.css"
const CheckBox = props => {
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
export default CheckBox;


