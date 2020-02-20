import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editStream(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.stream) {
            return (
                <div className="ui active dimmer">
                    <div className="ui loader"></div>
                </div>
            );
        }
        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm
                    //Use pick just to create a object with the values we care
                    initialValues={_.pick(
                        this.props.stream,
                        "title",
                        "description"
                    )}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
    StreamEdit
);
