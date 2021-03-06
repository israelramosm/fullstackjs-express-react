import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'

const Main = ({ match }) => (
  <main>
    <div>Main</div>
    <Route path={`${match.url}/dashboard`}><Dashboard /></Route>
  </main>
)

export default Main
