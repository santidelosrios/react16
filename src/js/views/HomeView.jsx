import React, { PureComponent } from 'react'

import MasterTemplate from './../HoCs/MasterTemplate'
import './assets/stylesheets/home-styling'

import { Accesories } from './../components'

class HomeView extends PureComponent {
  
  constructor() {
    super()
    this.state = {
      numberOfMates: 0,
      mates: []
    }

    this.handleNumberOfMates = this.handleNumberOfMates.bind(this)
    this.handleForm = this.handleForm.bind(this)
  }

  handleNumberOfMates(e) {
    
    e.preventDefault()
    
    let mates = []
    const numberOfMates = e.target.value

    if (numberOfMates < 2) return

    for(let i = 0; i < numberOfMates; i++) {
      mates.push({
        id: i + 1,
        name: '',
        // email: ''
      })
    }
    this.setState({
      numberOfMates: numberOfMates,
      mates
    })
  }

  handleForm() {
    
    const { mates } = this.state
    let result = []

    mates.map(mate => {
      const nameInput = this.refs['name_' + mate.id]
      result = [...result, { id: mate.id, name: nameInput.value, taken: 0 }]
    })

    console.log(this.matchEmUp(result))

  }


  matchEmUp(mates) {
    let _mates = Object.assign([], mates), result = []
    for(let i = 0; i < _mates.length; i++) {
      let first = _mates[i]
      let rest = _mates.filter((m,p) => i !== p && m.taken === 0)
      let second = rest[Math.floor(Math.random()*rest.length)]
      second.taken = 1
      result.push({first, second})
    }
    return result
  }

  render() {
    
    const  { mates } = this.state

    let matesDOM = mates.map(mate => {
      return (
        <div className="dude" key={mate.id}>
          <div className="name">
            <input 
              type="text" 
              placeholder="m8's name"
              ref={`name_${mate.id}`} />
          </div>
          {/*<div className="email">
            <input 
              type="email" 
              placeholder="m8's email"
              ref={`email_${mate.id}`} />
          </div>*/}
        </div>
      )
    })

    return (
      <div className="home-content">
        <section className="explanation">
        Lorem ipsum dolor amet hell of sartorial biodiesel tacos vaporware, knausgaard blog tote bag snackwave mixtape meggings hot chicken letterpress everyday carry tbh.
        </section>
        <section className="dudes">
          <h3>How many of you are going to play?</h3>
          <input 
            type="number" 
            placeholder="# of m8s" 
            onChange={this.handleNumberOfMates} />
          <section className="dudes-list">
            {matesDOM}
            <div className="match-button">
              <button onClick={this.handleForm}>Match us</button>
            </div>
          </section>
          <Accesories/>
        </section>
      </div>
    )
  }

}

export default MasterTemplate(HomeView)