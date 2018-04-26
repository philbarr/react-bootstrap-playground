import React, { Component } from 'react'
import './App.css'
import Nav from './Nav'
import Headline from './Headline'
import Card from './Card'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <div className="App">

        <Nav />
        <Headline />
        <Card />
        <Footer />
      </div>
    )
  }
}

export default App
