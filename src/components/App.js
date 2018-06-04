import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import Footer from './Footer'
import * as routes from '../constants/routes'
import LandingPage from './pages/LandingPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import PasswordForgetPage from './pages/PasswordForgetPage'
import HomePage from './pages/HomePage'
import AccountPage from './pages/AccountPage'
import { firebase } from '../firebase'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      authUser: null
    }
  }

  componentDidMount () {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }))
    })
  }

  render () {
    return (
      <Router>
        <div>
          <Nav authUser={this.state.authUser}/>

          <Route
            exact path={routes.LANDING}
            component={() => <LandingPage />}
          />
          <Route
            exact path={routes.SIGN_UP}
            component={() => <SignUpPage />}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <SignInPage />}
          />
          <Route
            exact path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetPage />}
          />
          <Route
            exact path={routes.HOME}
            component={() => <HomePage />}
          />
          <Route
            exact path={routes.ACCOUNT}
            component={() => <AccountPage />}
          />

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
