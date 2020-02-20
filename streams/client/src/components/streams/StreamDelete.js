import React, { Component } from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    actions() {
        return (
            <div
                onClick={() => {
                    this.props.deleteStream(this.props.match.params.id);
                }}
                className="ui approve button negative"
            >
                Delete
            </div>
        );
    }

    renderMessage() {
        if (!this.props.stream) {
            return "Are you sure do you want to delete this stream";
        }

        return `Are you sure do you want to delete the ${this.props.stream.title} stream?`;
    }

    render() {
        return (
            <Modal
                title="Delete Stream"
                message={this.renderMessage()}
                button_action="Delete"
                action={this.actions()}
                onDismiss={() => history.push("/")}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
    StreamDelete
);
