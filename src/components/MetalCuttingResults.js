/**
 * Created by Superstar on 28.12.2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getFormValues} from 'redux-form'
import data from '../data/data.json'
import _ from 'lodash'

class MetalCuttingResults extends Component {

  renderBlades() {
    const filteredBlades = _.filter(data, {cutting: [{sort: this.props.chosenValues.sort, type: this.props.chosenValues.type}]})
    // const filteredWidths = filteredBlades.filter(item => item.widths.includes((this.props.chosenValues.width).toString))
    return filteredBlades.map(item => {
      return (
          <div>
            <h1>Linia {item.line}:</h1>
            <img src={item.img} alt={item.title} />
            <h2>{item.name}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.catalogue}>Pobierz katalog</a>
          </div>
      )
    })
  }

  render () {
    const { chosenValues } = this.props
    return (
        <div>
          {console.log(chosenValues)}
          <h1>Zobacz propozycje wirtualnego doradcy:</h1>
          <div>{this.renderBlades()}</div>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    chosenValues: getFormValues('MetalCuttingForm')(state)
  })
}

export default connect(mapStateToProps)(MetalCuttingResults)