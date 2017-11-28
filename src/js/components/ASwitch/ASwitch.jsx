import React, { PureComponent } from 'react'

export default class ASwitch extends PureComponent {


  constructor() {
    super()
    this.state = {
      greet: 'Hello'
    }
  }

  render() {
    const { greet } = this.state
    return <div>{greet}</div>
  }

}
