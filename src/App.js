import Navbar from './components/Navbar';
import Body from './components/Body';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className='bg-light'>
         <Navbar/>
         <Body/>
      </div>
    )
  }
}

