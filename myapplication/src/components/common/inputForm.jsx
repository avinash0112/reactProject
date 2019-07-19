import React from "react";
import "../../styles/common/homePage.css";
export class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexValue: null
        };
    }
        handleSubmit = (event) => {
            event.preventDefault()
        }
        render() {
            return (
                <div id="outerPopup">
                    <div id="innerPopup">
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Index :
              <input
                                    type="text"
                                    name="index"
                                />
                            </label>
                            <input
                                type="submit"
                                onClick={this.props.setDeletionIndex}
                            />
                        </form>
                    </div>
                </div>
            );
        }
    }
