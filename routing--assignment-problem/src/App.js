import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/users' component={Users} />
          <Route path='/courses' component={Courses} />
          <Redirect from='/all-courses' to='/courses' />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
