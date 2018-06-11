import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import * as routes from '../../constants/routes'
import { auth } from '../../firebase'
import '../../css/signup.css'

const SignUpPage = ({history}) =>
  <div>
    <h1>SignUp</h1>
    <SignUpForm history={history}/>
  </div>

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
})

class SignUpForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {...INITIAL_STATE}
  }

  onSubmit = (event) => {
    const {
      email,
      passwordOne
    } = this.state

    const {
      history
    } = this.props

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
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
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state

    const isValid =
      passwordOne === passwordTwo &&
      passwordOne !== '' &&
      email !== '' &&
      username !== ''

    return (

      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h3 className="form-signin-heading">Create an account</h3>
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
            value={passwordOne}
            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
            type="password"
            placeholder="Password"
          />
          <label htmlFor="inputPassword" className="sr-only">Confirm Password</label>
          <input
            className="form-control"
            value={passwordTwo}
            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
            type="password"
            placeholder="Confirm Password"
          />
          <button disabled={!isValid} className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
        </form>
        <div className="error">{ error && <p>{error.message}</p> }</div>
      </div>
    )
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage)

export {
  SignUpForm,
  SignUpLink
}
