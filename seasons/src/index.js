import "./index.css"
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
  //Constructor is a good place to do one time setup
  // constructor(props) {
  //   super(props);

  //   //This is the only time we do direct assignment using this.state
  //   this.state = { lat: null, errorMessage: "" };
  // }

  state = { lat: null, errorMessage: "" };

  //Good place to do data loading
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //CALL setState TO UPDATE THE STATE!!!
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  //When you have conditionals its better use a helper method
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader message="Please accept location request" />;
  }

  //React says we have to define render!
  //Avoid doing anything besides returning JSX
  render() {
    return(
      <div className="border-red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
