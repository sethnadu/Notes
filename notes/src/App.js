import React, {useState} from 'react';
import Header from './components/header'
import Login from './components/login'
import Container from './components/container'
import './App.css';



function App() {
  const [open, setOpen]= useState(true)

  const handleOpenChange = () => {
    setOpen(!open)
}

  return (
    <div className="App">
      <Header open = {open} setOpen={setOpen} handleOpenChange={handleOpenChange}/>
      <Container open = {open} setOpen={setOpen} handleOpenChange={handleOpenChange}/>
      {/* <Login /> */}
    </div>
  );
}

export default App;
