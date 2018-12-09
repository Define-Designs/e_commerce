import React, { Component } from 'react';
import {UnAuthLayout} from './layout/UnAuthLayout'
import {AuthLayout} from './layout/AuthLayout'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavbarComponent from './components/navbarComponent/NavbarComponent';
import HomePage from './layout/homePage/HomePage'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAuthorized: false,
    };
  }

  render() {   
    return (
  <div className="App">
  <header className="App-header">
      <NavbarComponent></NavbarComponent>
  </header>
  <div className="App-Body"> 
  <HomePage></HomePage>
  </div>

  <div className="App-footer"></div>  
    </div>  
    );
  }
}

export default App;
