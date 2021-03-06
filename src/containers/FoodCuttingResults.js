import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getFormValues} from 'redux-form'
import PropTypes from 'prop-types'
import {renderBladesWithWidthsNoType} from '../helpers/resultsFunctions'
import FormViewEnhancer from '../components/shared/FormViewEnhancer'
import Steps, {Step} from 'rc-steps'

class FoodCuttingResults extends Component {
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
          <div>{renderBladesWithWidthsNoType(chosenValues)}</div>
        </div>
    )
  }
}

FoodCuttingResults.propTypes = {
  chosenValues: PropTypes.shape({})
}

FoodCuttingResults.defaultProps = {
  chosenValues: {}
}

const mapStateToProps = state => {
  return ({
    chosenValues: getFormValues('FoodCuttingForm')(state)
  })
}

export default connect(mapStateToProps)(FormViewEnhancer(FoodCuttingResults))