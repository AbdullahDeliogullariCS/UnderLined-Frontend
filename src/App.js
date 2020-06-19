import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import axios from "axios";

import ResourceList from './resource/components/ResourceList/ResourceList';

import SignIn from './shared/components/SignIn/SignIn';
import SignUp from './shared/components/SignUp/SignUp';
import NavigationBar from "./shared/components/Navigation/NavigationBar";
import Profile from "./shared/components/Profile/ProfileAvatar";
import ProfilePage from "./shared/components/Profile/ProfileAvatar";
import classes from "./App.css";

axios.defaults.withCredentials = true;

let myProp="<div>This is some html</div>";
class App extends Component {
    render() {
      return (
          <Router>
              <Switch>
                  <Router path="/sign-in">
                      <SignIn isOpen={true}/>
                  </Router>
                  <Router path="/sign-up">
                      <SignUp isOpen={true}/>
                  </Router>
                  <Router path="/home">
                      <NavigationBar/>
                  </Router>
                  <Router path="/resource">
                      <ResourceList isOpen={true}/>
                  </Router>
                  <Router path="/profile">
                      <ProfilePage/>
                  </Router>
                  <Router path="/editor">
                      <div>
                          {ReactHtmlParser("<strong>abdullah</strong>")}
                      </div>
                      </Router>
              </Switch>
          </Router>
      );
    }
}

export default App;
