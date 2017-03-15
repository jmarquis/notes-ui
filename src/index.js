import React from "react"
import { render } from "react-dom"
import { AppContainer } from "react-hot-loader"

import App from "App"

const rootEl = document.getElementById("root")

const renderApp = (AppComponent) => {
  render(<AppContainer><AppComponent /></AppContainer>, rootEl)
}

renderApp(App)

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NewApp = require("./components/App").default
    renderApp(NewApp)
  })
}
