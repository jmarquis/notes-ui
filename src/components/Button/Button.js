import "./Button.less"

import React, { Component, PropTypes } from "react"
import classNames from "classnames"

export default class Button extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string
  }

  static defaultProps = {
    size: "medium"
  }

  render() {
    const { text, size, ...otherProps } = this.props
    return (
      <button
        className={classNames("Button", size)}
        {...otherProps}
      >
        {text}
      </button>
    )
  }

}
