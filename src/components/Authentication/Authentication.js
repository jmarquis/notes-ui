import "./Authentication.less"

import React, { Component, PropTypes } from "react"
import autobind from "autobind-decorator"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import { auth } from "etc/firebase"
import { signIn } from "actions/user"

@connect(state => {
  const { user } = state
  return { user }
})
@withRouter
export default class Authentication extends Component {

  static propTypes = {
    user: PropTypes.any,
    history: PropTypes.any
  }

  state = {
    email: "",
    password: ""
  }

  componentDidUpdate() {
    const { user, history } = this.props
    if (user) {
      history.push("/")
    }
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
