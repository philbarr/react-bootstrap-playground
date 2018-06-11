import React from 'react'
import * as routes from '../constants/routes'
import { Link } from 'react-router-dom'
import SignOutButton from './SignOutButton'

export default function Nav ({authUser}) {
  return (
    <nav className="site-header sticky-top py-1">
      { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
      }
    </nav>
  )
}

const NavigationAuth = () =>
  <div className="container d-flex flex-column flex-md-row justify-content-between">
    <Link className="py-2 d-none d-md-inline-block" to={routes.HOME}>Home</Link>
    <Link className="py-2 d-none d-md-inline-block" to={routes.LANDING}>Landing</Link>
    <Link className="py-2 d-none d-md-inline-block" to={routes.ACCOUNT}>Account</Link>
    <SignOutButton />
  </div>

const NavigationNonAuth = () =>
  <div className="container d-flex flex-column flex-md-row justify-content-between">
    <Link className="py-2 d-none d-md-inline-block" to={routes.HOME}>Home</Link>
    <Link className="py-2 d-none d-md-inline-block" to={routes.LANDING}>Landing</Link>
    <Link className="py-2 d-none d-md-inline-block btn btn-outline-primary" to={routes.SIGN_IN}>Sign In</Link>
  </div>
