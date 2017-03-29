import "./FieldGroup.less"

import React, { Component, PropTypes } from "react"

export default class FieldGroup extends Component {

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children } = this.props
    return (
      <div className="FieldGroup" role="group">
        {children}
      </div>
    )
  }

}
