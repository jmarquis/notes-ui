import "./Field.less"

import React, {
  Component,
  PropTypes,
  Children,
  cloneElement
} from "react"

import classNames from "classnames"
import uuid from "uuid"

import Label from "Label"

export default class Field extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }

  state = {
    focused: false
  }

  fieldId = uuid.v4()

  render() {
    let labelApplied = false
    return (
      <div className={classNames("Field", { focused: this.state.focused })}>
        <Label text={this.props.label} htmlFor={this.fieldId} />
        {
          Children.map(this.props.children, child => {
            if (labelApplied) this.fieldId = undefined
            else labelApplied = false
            return cloneElement(child, {
              id: this.fieldId,
              onFocus: () => this.setState({ focused: true }),
              onBlur: () => this.setState({ focused: false })
            })
          })
        }
      </div>
    )
  }

}
