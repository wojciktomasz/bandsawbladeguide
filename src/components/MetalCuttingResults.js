/**
 * Created by Superstar on 28.12.2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getFormValues} from 'redux-form'

class MetalCuttingResults extends Component {
  render () {
    return (
        <div>
          {console.log(this.props.chosenValues)}
          Wyniki
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