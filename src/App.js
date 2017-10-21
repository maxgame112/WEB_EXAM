import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.component';
import Page2 from './Components/Page2.component';

import President from './Components/President.component';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

class App extends Component {




  render() {
    return (

      <BrowserRouter>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
          <li><li><NavLink to="/" activeClassName="active">Home</NavLink></li></li>
          <li><li><NavLink to="/page2" activeClassName="active">Page2</NavLink></li></li>
          <li><li><NavLink to="/President" activeClassName="active">Show</NavLink></li></li>
          </ul>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">


        <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/Page2" component={Page2} />
            <Route path="/President" component={President} />
            </Switch>
        </p>


      </div>
      </BrowserRouter>
    );
  }
}

export default App;
