import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Authentication from "Authentication"
import Workspace from "Workspace"

// redux
// react-dnd

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/:workspaceId" component={Workspace} />
            <Route path="/" component={Authentication} />
          </Switch>
        </div>
      </Router>
    )
  }

}
