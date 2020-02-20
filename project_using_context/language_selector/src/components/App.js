import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "./contexts/LanguageContext";

class App extends Component {
    state = { language: "english" };

    onLanguageChange = newLanguage => {
        this.setState({ language: newLanguage });
    };

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i
                        className="flag us"
                        onClick={() => this.onLanguageChange("english")}
                    />
                    <i
                        className="flag br"
                        onClick={() => this.onLanguageChange("portuguese")}
                    />
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;
