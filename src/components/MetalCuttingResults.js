/**
 * Created by Superstar on 28.12.2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'
import { renderBladesWithWidths } from '../helpers/resultsFunctions'
import Steps, { Step } from 'rc-steps'

class MetalCuttingResults extends Component {

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
              <div>{renderBladesWithWidths(chosenValues)}</div>
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