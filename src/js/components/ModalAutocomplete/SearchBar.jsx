import React, { PureComponent } from 'react'


export default class SearchBar extends PureComponent {

  

  constructor(props) {
    super(props)
    this.state = {
      inputname: '',
      searchingPersons: [],
      searching: [],
      //temporal -- dummy data
      parentList: [
        {
          id: 1277,
          name: "Andrés",
          lastname: "Ramírez",
          photo: "http://migracion.4kidz.co/html/4kidz/php_api/public/imgs/kids/GLmuY3bJyRiCDdreBZPI.png",
          role: 3,
          related: "Papá de Prueba, Prueba Opera, Pedro Conga",
        },
        {
          id: 1278,
          name: "Pow",
          lastname: "Paw",
          photo: "http://migracion.4kidz.co/html/4kidz/php_api/public/imgs/kids/GLmuY3bJyRiCDdreBZPI.png",
          role: 7,
          related: "Papá de Prueba, Prueba Opera",
          kids: [
            {
              name: "Prueba",
              lastname: "Prueba",
            },
            {
              name: "Prubea",
              lastname: "Opera",
            },
            {
              name: "Pedro",
              lastname: "Conga",
            }
          ]
        },
        {
          id: 1279,
          name: "Ramiro",
          lastname: "Fernandez",
          photo: "http://migracion.4kidz.co/html/4kidz/php_api/public/imgs/kids/GLmuY3bJyRiCDdreBZPI.png",
          role: 7,
          related: "Papá de Prueba, Prueba Opera",
          kids: [
            {
              name: "Prueba",
              lastname: "Prueba",
            },
            {
              name: "Prubea",
              lastname: "Opera",
            },
            {
              name: "Pedro",
              lastname: "Conga",
            }
          ]
        },
        
      ]
    }
  }

  personFilter() {
    const copyArray = []
    this.state.parentList.forEach(item => {
      let hijoHombre = false
      if(item.kids) {
        item.kids.forEach(kid => {
          if(String(kid.name).toUpperCase().includes(this.state.inputname.toUpperCase()) || String(kid.lastname).toUpperCase().includes(this.state.inputname.toUpperCase())) {
            hijoHombre = true
          }
        })
      }
      if(hijoHombre) {
        copyArray.push(item)
      } else if(String(item.name).toUpperCase().includes(this.state.inputname.toUpperCase()) || String(item.lastname).toUpperCase().includes(this.state.inputname.toUpperCase())) {
        copyArray.push(item)
      }
    })
    this.setState({searchingPersons: copyArray})
  }
  updateInputName(e) {
    this.setState({inputname: e.target.value})
    this.personFilter()
  }

  render() {
    return <div>
            <div className="input">
              <div className="box-search">
                <input className="focus-colour-messages a__m__searcher" placeholder="Buscar Personas" type="text" onChange={this.updateInputName.bind(this)} />
                <i className="lupa ion-ios-search-strong"></i>
                {
                  this.state.inputname.length >= 3 ?
                    <div className="m__a__topick tl">
                      <ul>
                      {this.state.searchingPersons.map((person, i) => {
                        return (
                          <li key={i} className={false ? 'active' : ''}>
                            <label>
                              <i className="ion-ios-circle-outline" />
                              <i style={{color: this.props.color}} className="ion-ios-checkmark" />
                            </label>
                            <div className="parent-kids-collage">                       
                              {
                                !person.kids && person.role ?
                                  <div className="kid-collage">
                                    <img className="clean-img" src={person.photo} />
                                  </div>
                                : person.kids ?
                                  person.kids.map((kid, j) => {
                                    if(j <=1) {
                                      return (
                                        <div key={j} className={`kid-collage ${j === person.kids.length -1 ? 'last' : ''}`} style={{display: person.kids === 1 ? flex: ''}}>
                                          <img className="clean-img" src={person.photo} />
                                        </div>
                                      )
                                    }
                                  })
                                : null
                              }
                              <div className="parent-info">
                                <div className="parent-name">
                                  {`${person.name.trim().split(' ')[0]} ${person.lastname.trim().split(' ')[0]}`}
                                </div>
                              </div>
                            </div>
                          </li>
                        )
                      })}
                      </ul>
                    </div>
                  : null
                }
              </div>
            </div>
          </div>
  }
}
