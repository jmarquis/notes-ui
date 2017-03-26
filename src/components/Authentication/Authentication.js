import "./Authentication.less"

import React, { Component, PropTypes } from "react"
import autobind from "autobind-decorator"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"

import { signIn, signOut } from "actions/user"
import { log } from "etc/logger"

@connect(state => {
  const { user } = state
  return { user }
})
export default class Authentication extends Component {

  static propTypes = {
    user: PropTypes.any,
    history: PropTypes.any
  }

  state = {
    email: "",
    password: ""
  }

  render() {
    const { user } = this.props

    if (user) return <Redirect to="/" />

    return (
      <section className="Authentication">
        <Route
          exact
          path="/auth/signout"
          render={() => {
            signOut().then(() => log("sign out successful"))
            return <Redirect to="/" />
          }}
        />
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          <input type="submit" value="Sign in" />
        </form>
      </section>
    )
  }

  @autobind
  handleSubmit(event) {
    event.preventDefault()
    if (this.state.email && this.state.password) {
      signIn(this.state.email, this.state.password)
    }
  }

  @autobind
  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  @autobind
  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }

}
