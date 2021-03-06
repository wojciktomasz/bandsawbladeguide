/**
 * Created by Superstar on 14.01.2018.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getFormValues} from 'redux-form'
import Steps, {Step} from 'rc-steps'
import PropTypes from 'prop-types'
import FormViewEnhancer from '../components/shared/FormViewEnhancer'
import {renderBlades} from '../helpers/resultsFunctions'

class WoodCuttingResults extends Component {
  render() {
    const {chosenValues} = this.props
    return (
        <div>
          {console.log(chosenValues)}
          <Steps current={3}>
            <Step/>
            <Step/>
            <Step/>
          </Steps>
          <h1>Zobacz propozycje wirtualnego doradcy:</h1>
          <div>{renderBlades(chosenValues)}</div>
        </div>
    )
  }
}

WoodCuttingResults.propTypes = {
  chosenValues: PropTypes.shape({})
}

WoodCuttingResults.defaultProps = {
  chosenValues: {}
}

const mapStateToProps = state => {
  return ({
    chosenValues: getFormValues('WoodCuttingForm')(state)
  })
}

export default connect(mapStateToProps)(FormViewEnhancer(WoodCuttingResults))