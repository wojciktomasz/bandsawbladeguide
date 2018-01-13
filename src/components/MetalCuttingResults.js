/**
 * Created by Superstar on 28.12.2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getFormValues} from 'redux-form'
import data from '../data/data.json'
import _ from 'lodash'
import Steps, { Step } from 'rc-steps'

class MetalCuttingResults extends Component {

  renderBlades() {
    const filteredBlades = _.filter(data, {cutting: [{sort: this.props.chosenValues.sort, type: this.props.chosenValues.type}]})
    const parse = parseInt(this.props.chosenValues.width)
    const filteredBladesWithWidths = filteredBlades.filter(item => item.widths.indexOf(parse) > -1)
    return filteredBladesWithWidths.map(item => {
      return (
          <div key={item.id}>
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
        <div className='container'>
          <div className='row justify-content-md-center'>
            <div className='col col-md-8'>
              {console.log(chosenValues)}
              <Steps current={3}>
                <Step/>
                <Step/>
                <Step/>
              </Steps>
              <h1>Zobacz propozycje wirtualnego doradcy:</h1>
              <div>{this.renderBlades()}</div>
            </div>
          </div>
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