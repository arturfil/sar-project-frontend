import React, { Component } from 'react'

import './App.css'

import Volcanoes from './components/volcanoes/Volcanoes'

class App extends Component {

  render() {
    return (
      <div className="main-cont">
        <h2>Sar Project - Volcanoes</h2>
        <Volcanoes/>
      </div>
    )
  }
}

export default App;