import React, { PureComponent } from 'react'

import './modalAutocomplete'
import '../../../assets/stylesheets/api_v2'
import '../../../assets/stylesheets/main'

import SearchBar from './SearchBar'

export default class ModalAutocomplete extends PureComponent {


  constructor() {
    super()
    this.state = {
      greet: 'Hello'
    }
  }

  render() {
    const { greet } = this.state
    return <div className="modal-autocomplete-container">
            <header className="m__a__header cf">
              <span className="contacts pull-left" style={{color: this.props.color}}>Seleccionar contactos</span>
              <i className="m__a__close icon ion-close"> </i>
            </header>
            <section className="m__a__content">
              <div className="m__a__picker">
                <div className="m__a__picker__form">
                  <div className="m__a__typo">
                    <SearchBar color={this.props.color} />
                  </div>
                </div>
              </div>
            </section>
            <section className="m__a__footer input-group">
                <div className="picker-ok input">
                  <div className="count-contacts">
                    Total destinatarios: 0
                  </div>
                  <div className="button-ok">
                    <button className="k-button k-button-green m__a__ok" style={{backgroundColor: this.props.color}}>OK</button>
                  </div>
                </div>
            </section>           
          </div>
  }

}
