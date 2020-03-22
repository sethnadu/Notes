import React, {useState} from 'react';
import {Route} from "react-router-dom"
import { AuthProvider } from "./Auth"

// Components
import Header from './components/header'
import Login from './components/login'
import SignUp from './components/signup'
import Note from './components/note'
import Container from './components/container'
import './App.css';



function App() {
  const [open, setOpen]= useState(true)

  const handleOpenChange = () => {
    setOpen(!open)
}

  return (
    <AuthProvider>
      <div className="App">
      <Header open = {open} setOpen={setOpen} handleOpenChange={handleOpenChange}/> 
        {/* <div style={{display: 'flex'}}>
          <Container open = {open} setOpen={setOpen} handleOpenChange={handleOpenChange}/>
          <Note open = {open}/>
        </div>  */}
        <Route path ="/login" component={Login} />
        <Route path ="/signup" component={SignUp} />
        <Route path ="/home" component={Container} />
      </div>
    </AuthProvider>
  );
}

export default App;
