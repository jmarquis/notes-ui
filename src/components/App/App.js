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

// react-dnd

@connect(state => {
  const { user } = state
  return { user }
})
@withRouter
export default class App extends Component {

  static propTypes = {
    history: PropTypes.object,
    user: PropTypes.any,
    dispatch: PropTypes.func
  }

  componentDidMount() {

    const { history, user, dispatch } = this.props

    // set up auth state listener
    auth.onAuthStateChanged(newUser => {
      log("user state change:", newUser)
      dispatch(updateUser(newUser))
    })

    // show auth page if not signed in
    setTimeout(() => {
      log("checking for auth state")
      if (!user) {
        log("redirecting to auth page")
        history.push("/auth")
      }
    }, 500)

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
