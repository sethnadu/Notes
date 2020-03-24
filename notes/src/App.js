import React from 'react';
import {Route, Switch} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
// Components
import Login from './components/login'
import SignUp from './components/signup'
import Main from './components/main'
import './App.css';
import PrivateRoute from './util/PrivateRoute'



function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const {isAuthenticated, isVerifying} = state.auth;
  return (
      <div className="App">
        <Switch>
          <Route path ="/login" component={Login} />
          <Route path ="/signup" component={SignUp} />
          <PrivateRoute exact path ="/home" component = {Main} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
        </Switch>
      </div>
  );
}

export default App;
