import "./Form.less"

import React, { Component, PropTypes } from "react"

export default class Form extends Component {

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children, ...otherProps } = this.props
    return (
      <form className="Form" {...otherProps}>
        {children}
      </form>
    )
  }

}
