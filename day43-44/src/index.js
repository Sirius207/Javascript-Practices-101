import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

import Home from './Home'
import Submit from './Submit'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

ReactDOM.render(
  <Router>
  <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Brand</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li>
              <NavLink activeClassName="activeNav" to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeNav" to='/submit'>Submit</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <hr/>
    <Route exact path='/' component={Home}/>
    <Route path='/submit' component={Submit} history={history}/>
  </div>
</Router>, document.getElementById('root'))
