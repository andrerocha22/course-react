import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
    return ReactDOM.createPortal(
        <div
            onClick={props.onDismiss}
            className="ui dimmer modals visible active"
        >
            <div
                onClick={e => e.stopPropagation()}
                className="ui tiny modal visible active"
            >
                <div className="ui center aligned large red header">
                    <i className="ban icon"></i>
                    {props.title}
                </div>
                <div className="ui content">
                    <h3>{props.message}</h3>
                </div>
                <div className="actions">
                    {props.action}
                    <div
                        onClick={props.onDismiss}
                        className="ui cancel button"
                    >
                        Cancel
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    );
};

export default Modal;
