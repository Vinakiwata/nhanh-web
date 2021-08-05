import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AddLeadScreen from '../containers/AddLead/index'
import SplashScreen from '../containers/SplashScreen'
import LoadingScreen from '../containers/LoadingScreen'
import ManagerLeadScreen from '../containers/ManagerLead/index'


class RootRouter extends Component {

  render(){
    return(
      <Router>
        <Switch>
            <Route
                exact
                path="/login"
                >
                <SplashScreen/>
            </Route>
            <Route exact path="/">
                <AddLeadScreen/>
            </Route>
            <Route exact path="/manager-lead">
                <ManagerLeadScreen/>
            </Route>
            <Route exact path="/loading">
                <LoadingScreen/>
            </Route>
        </Switch>
      </Router>
    )
  }

}

export default RootRouter;
