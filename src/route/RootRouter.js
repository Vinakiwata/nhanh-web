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
import FilterLeadScreen from '../containers/FilterLead'
import ViewLeadInfo from '../containers/ViewLeadInfo'
import EditLeadInfo from '../containers/EditLeadInfo'

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
            <Route path="/manager-lead">
                <ManagerLeadScreen/>
            </Route>
            <Route path="/filter-lead">
                <FilterLeadScreen/>
            </Route>
            <Route path="/lead-info">
                <ViewLeadInfo/>
            </Route>
            <Route path="/edit-lead">
                <EditLeadInfo/>
            </Route>
            <Route path="/loading">
                <LoadingScreen/>
            </Route>
        </Switch>
      </Router>
    )
  }

}

export default RootRouter;
