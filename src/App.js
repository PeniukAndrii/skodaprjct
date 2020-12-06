import React, {Component} from 'react';
import Header from "./AllComponents/Header/Header";
import './App.css'
import Center from "./AllComponents/Header/Center";
import HeaderUnder from "./AllComponents/Header/HeaderUnder";


class App extends Component {
    render() {
        return (
            <div className={'Main-Wrap'}>
              <Header/>
              <HeaderUnder/>
              <Center/>
            </div>
        );
    }
}

export default App;