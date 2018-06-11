import React from 'react'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'

const SignOutButton = () =>
  <Link
    className="py-2 d-none d-md-inline-block btn btn-outline-primary"
    onClick={auth.doSignOut} to="/"
  >
    Sign Out
  </Link>

export default SignOutButton
