/**
 * Created by Superstar on 14.01.2018.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'
import Steps, { Step } from 'rc-steps'
import { renderBlades } from '../helpers/resultsFunctions'

class WoodCuttingResults extends Component {
  render() {
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
              <div>{renderBlades(chosenValues)}</div>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    chosenValues: getFormValues('WoodCuttingForm')(state)
  })
}

export default connect(mapStateToProps)(WoodCuttingResults)