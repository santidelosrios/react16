import React from 'react'

import './assets/stylesheets/master-styling'

function MasterTemplate(ChildView) {
  return class extends React.PureComponent {
    render() {
      return (
        <section>
          <h1>Che</h1>
          <ChildView/>
        </section>
      )
    }
  }
}

export default MasterTemplate