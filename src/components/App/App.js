import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import auth from "etc/auth"

import Loading from "Loading"
import Authentication from "Authentication"
import Workspace from "Workspace"

// redux
// react-dnd

export default class App extends Component {

  componentDidMount() {
    setTimeout(() => {
      console.log(auth)
    }, 2000)
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
