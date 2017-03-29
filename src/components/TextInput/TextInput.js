import "./TextInput.less"

import React, { Component, PropTypes } from "react"

export default class TextInput extends Component {

  static propTypes = {
    type: PropTypes.string
  }

  static defaultProps = {
    type: "text"
  }

  render() {
    const { type, ...otherProps } = this.props
    return (
      <input
        className="TextInput"
        type={type}
        {...otherProps}
      />
    )
  }

}
