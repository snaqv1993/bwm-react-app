import React, { Component } from 'react';
import { Header } from './shared/Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
    <div className="App"> 
    <Header />
      I am component
    </div>
  );
  }
  
}

export default App;
