import "./BaseLayout.less"

import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

import Toolbar from "Toolbar"
import Menu from "Menu"
import Workspace from "Workspace"

export default class BaseLayout extends Component {

  render() {
    return (
      <section className="BaseLayout">
        <Toolbar />
        <section>
          <Menu />
          <Switch>
            <Route path="/:workspaceId" component={Workspace} />
          </Switch>
        </section>
      </section>
    )
  }

}
