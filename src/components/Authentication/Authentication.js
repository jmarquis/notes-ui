import "./Authentication.less"

import React, { Component } from "react"
import autobind from "autobind-decorator"

import { signIn } from "actions/user"

export default class Authentication extends Component {

  state = {
    email: "",
    password: ""
  }

  render() {
    return (
      <section className="Authentication">
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
