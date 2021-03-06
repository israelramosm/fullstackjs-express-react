import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './content/Login'
import Main from './content/Main'
import LandingPage from './content/LandingPage'

const App = () => {
  const username = 'username'
  return (
    <Switch>
      <Route path='/' exact component={LandingPage} />
      <Route path='/login' component={Login} />
      <Route path={`/${username}`} component={Main} />
    </Switch>
  )
}

export default App
