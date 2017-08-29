import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import CreateLinks from './CreateLinks'
import LinkList from './LinkList'
import Header from './Header'
import Login from './Login'


class App extends Component {
  render () {
    return (
      <div className="center w85">
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/create' component={CreateLinks} />
            <Route exact path='/' component={LinkList} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
