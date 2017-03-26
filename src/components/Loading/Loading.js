import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import { go } from "etc/routing"

@connect(state => {
  const { user } = state
  return { user }
})
export default class Loading extends Component {

  static propTypes = {
    user: PropTypes.any
  }

  componentDidMount() {
    const { user } = this.props
    setTimeout(() => {
      if (user) {
        go("/1")
      } else {
        go("/auth")
      }
    }, 500)
  }

  render() {
    return (
      <section className="Loading">
        loading
      </section>
    )
  }

}
