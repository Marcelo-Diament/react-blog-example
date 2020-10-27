import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainPage from './pages/main/index'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={MainPage}
      />
      <Route
        exact
        path="/teste"
        component={MainPage}
      />
    </Switch>
  </BrowserRouter>
)

export default Routes