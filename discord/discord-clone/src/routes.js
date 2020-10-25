import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Discord from './pages/Discord'
import NotFound from './pages/NotFound'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/discord" component={Discord} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes