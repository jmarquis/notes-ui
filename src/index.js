import "base"

import React from "react"
import { render } from "react-dom"

import { AppContainer } from "react-hot-loader"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"

import App from "App"

import { browserHistory } from "etc/routing"
import store from "etc/store"
import { auth } from "etc/firebase"
import { log } from "etc/logger"
import { updateUser } from "actions/user"

auth.onAuthStateChanged(user => {
  log("auth state change:", user)
  store.dispatch(updateUser(user))
})

const rootEl = document.getElementById("root")

const renderApp = (AppComponent) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Router history={browserHistory}>
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
