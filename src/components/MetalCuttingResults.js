/**
 * Created by Superstar on 28.12.2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getFormValues} from 'redux-form'
import data from '../data/data.json'
import _ from 'lodash'

class MetalCuttingResults extends Component {

  renderName() {
    const name = data.map(item => (_.filter(item.cutting, {'sort': this.props.chosenValues.sort, 'type': this.props.chosenValues.type})).length > 0 ? item.name : null).filter(item => item !== null)
    return <h3>{name[0]}</h3>
  }

  render () {
    const { chosenValues } = this.props
    return (
        <div>
          {console.log(chosenValues.type)}
          <h1>Zobacz propozycje wirtualnego doradcy:</h1>
          <h2>{this.renderName()}</h2>
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