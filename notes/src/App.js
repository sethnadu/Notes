import React from 'react';
import {Route} from "react-router-dom"
import { AuthProvider } from "./Auth"

// Components
import Login from './components/login'
import SignUp from './components/signup'
import Main from './components/main'
import './App.css';
import PrivateRoute from './PrivateRoute'



function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Route path ="/login" component={Login} />
        <Route path ="/signup" component={SignUp} />
        <PrivateRoute exact path ="/home" component = {Main} />
      </div>
    </AuthProvider>
  );
}

export default App;
