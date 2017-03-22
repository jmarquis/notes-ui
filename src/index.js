import "base"

import React from "react"
import { render } from "react-dom"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import createLogger from "redux-logger"

import { AppContainer } from "react-hot-loader"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import App from "App"
import * as reducers from "./reducers"

const rootEl = document.getElementById("root")

const store = createStore(combineReducers(reducers), applyMiddleware(
  thunk,
  createLogger({
    level: "info",
    collapsed: true,
    diff: true
  })
))

const renderApp = (AppComponent) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <AppComponent />
        </Router>
      </Provider>
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
