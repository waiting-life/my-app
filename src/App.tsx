import React from 'react'
import Other from './pages/Other'
import Test from './pages/Test'
import Home from './pages/Home'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/other">
          <Other />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
      </Switch>
    </div>
  )
}

export default App
