import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdminButtons(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link
                        to={`/streams/edit/${stream.id}`}
                        className="ui button primary"
                    >
                        Edit
                    </Link>

                    <Link
                        to={`/streams/delete/${stream.id}`}
                        className="ui button negative"
                    >
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderCreateStreamButton() {
        if (this.props.isSignedIn) {
            return (
                <div className="right menu">
                    <Link
                        to="/streams/new"
                        className="ui button primary right floated small"
                    >
                        CREATE STREAM
                    </Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdminButtons(stream)}
                    <i className="large middle aligned icon video" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">
                            {stream.title}
                        </Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                <div className="ui container">
                    {this.renderCreateStreamButton()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
        streams: Object.values(state.streams)
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
