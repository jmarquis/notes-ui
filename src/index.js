import "base"

import React from "react"
import { render } from "react-dom"
import { AppContainer } from "react-hot-loader"
import { BrowserRouter as Router } from "react-router-dom"

import App from "App"

const rootEl = document.getElementById("root")

const renderApp = (AppComponent) => {
  render(
    <AppContainer>
      <Router>
        <AppComponent />
      </Router>
    </AppContainer>,
    rootEl
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NewApp = require("./components/App").default
    renderApp(NewApp)
  })
}
