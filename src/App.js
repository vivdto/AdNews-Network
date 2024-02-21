import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom";
  
  import LoadingBar from 
  'react-top-loading-bar'


export default class App extends Component {
  render() {
    return (
      <div>
        
        <NavBar/>

        <LoadingBar
        color='#f11946'
        progress={100}
       // onLoaderFinished={() => setProgress(0)}
      />

        <News pageSize={5} category = "science"/>

       
  </div>
    )
  }
}
