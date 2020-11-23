import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from '../Screens/Header/Header'
import Home from '../Screens/Home/Home'
import Profile from '../Screens/Profile/Profile'

class MainNavigation extends Component {
  render() {
    return(
      <Router>
        <Route path='/'>
          <Header />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/profile/:userId'>
          <Profile />
        </Route>
      </Router>
    )
  }
}

export default MainNavigation
