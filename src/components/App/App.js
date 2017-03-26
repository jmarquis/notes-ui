import "./App.less"

import React, { Component, PropTypes } from "react"
import { Switch, Route, withRouter } from "react-router-dom"
import { connect } from "react-redux"

import { auth } from "etc/firebase"
import { log } from "etc/logger"
import { updateUser } from "actions/user"

import Loading from "Loading"
import Authentication from "Authentication"
import Workspace from "Workspace"

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
          <Route path="/auth" component={Authentication} />
          <Route path="/:workspaceId" component={Workspace} />
          <Route path="/" component={Loading} />
        </Switch>
      </div>
    )
  }

}
