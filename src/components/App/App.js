import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { init } from "../../etc/firebase"

import Loading from "Loading"
import Authentication from "Authentication"
import Workspace from "Workspace"

// firebase
// redux
// react-dnd

export default class App extends Component {

  componentDidMount() {
    setTimeout(init, 2000)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/auth" component={Authentication} />
            <Route path="/:workspaceId" component={Workspace} />
            <Route path="/" component={Loading} />
          </Switch>
        </div>
      </Router>
    )
  }

}
