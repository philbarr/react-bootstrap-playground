import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { SignUpLink } from './SignUpPage'
import { auth } from '../../firebase'
import * as routes from '../../constants/routes'
import '../../css/signup.css'

const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />

  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
}

class SignInForm extends Component {
  constructor (props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = (event) => {
    const {
      email,
      password
    } = this.state

    const {
      history
    } = this.props

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }))
        history.push(routes.HOME)
      })
      .catch(error => {
        this.setState(byPropKey('error', error))
      })

    event.preventDefault()
  }

  render () {
    const {
      email,
      password,
      error
    } = this.state

    const isValid =
      password !== '' &&
      email !== ''

    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h3 className="form-signin-heading">Sign In</h3>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input
            id="inputEmail"
            className="form-control"
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="email"
            placeholder="Email Address"
            required autoFocus
          />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input
            className="form-control"
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            type="password"
            placeholder="Password"
          />

          <button disabled={!isValid} className="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
          <SignUpLink className="sr-only"/>
        </form>
        <div className="error">{ error && <p>{error.message}</p> }</div>
      </div>
    )
  }
}

export default withRouter(SignInPage)

export {
  SignInForm
}
