import React, {Component} from 'react';

import Header from "../components/Header/Header";
import './App.css';
import logo from '../logo.svg';
import Profile from "./Profile";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header logo={logo} />
                <Profile />
            </div>
        );
    }
}

export default App;
