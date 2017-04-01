import "./App.less"

import React, { Component, PropTypes } from "react"
import { Switch, Route, withRouter } from "react-router-dom"
import { connect } from "react-redux"

import { auth } from "etc/firebase"
import { log } from "etc/logger"
import { updateUser } from "actions/user"

import Loading from "Loading"
import Authentication from "Authentication"
import BaseLayout from "BaseLayout"

// TODO: react-dnd

@connect(state => {
  const { user } = state
  return { user }
}, null, null, { pure: false })
@withRouter
export default class App extends Component {

  static propTypes = {
    history: PropTypes.object,
    user: PropTypes.any,
    dispatch: PropTypes.func
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Loading} />
          <Route exact path="/auth" component={Authentication} />
          <Route component={BaseLayout} />
        </Switch>
      </div>
    )
  }

}
