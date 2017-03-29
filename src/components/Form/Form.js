import "./Form.less"

import React, { Component, PropTypes } from "react"

export default class Form extends Component {

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children } = this.props
    return (
      <form className="Form">
        {children}
      </form>
    )
  }

}
