import React from 'react'
import * as routes from '../constants/routes'
import { Link } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className="site-header sticky-top py-1">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <a className="py-2" href="/">

        </a>
        <Link className="py-2 d-none d-md-inline-block" to={routes.SIGN_IN}>Sign In</Link>
        <Link className="py-2 d-none d-md-inline-block" to={routes.HOME}>Home</Link>
        <Link className="py-2 d-none d-md-inline-block" to={routes.LANDING}>Landing</Link>
        <Link className="py-2 d-none d-md-inline-block" to={routes.ACCOUNT}>Account</Link>
      </div>
    </nav>
  )
}
