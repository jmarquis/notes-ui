import "./App.less"

import React, { Component, PropTypes } from "react"
import { Switch, Route, withRouter } from "react-router-dom"

import auth from "etc/auth"

import Loading from "Loading"
import Authentication from "Authentication"
import Workspace from "Workspace"

// redux
// react-dnd

@withRouter
export default class App extends Component {

  static propTypes = {
    history: PropTypes.object
  }

  componentDidMount() {
    const { history } = this.props
    setTimeout(() => {
      if (!auth.user) {
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
