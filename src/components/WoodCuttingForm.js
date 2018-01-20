/**
 * Created by Superstar on 28.12.2017.
 */
import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import data from '../data/data.json'
import Steps, {Step} from 'rc-steps'
import {renderSort, renderType} from '../helpers/formFunctions'
import FormViewEnhancer from './Shared/FormViewEnhancer'
import FormButton from './Shared/FormButton'
import '../App.css'

class WoodCuttingForm extends Component {

  onSubmit() {
    this.props.history.push('/doradca/drewno/pily')
  }

  render() {
    const {handleSubmit} = this.props

    return (
        <div>
          <Steps current={2}>
            <Step/>
            <Step/>
            <Step/>
          </Steps>
          <form onSubmit={handleSubmit(() => this.onSubmit())}>
            <label className="form-label">Zastosowanie:</label>
            <div>
              {renderSort(data, 'wood')}
            </div>
            <label className="form-label">Rodzaj cięcia:</label>
            <div>
              {renderType(data, 'wood')}
            </div>
            <FormButton />
          </form>

        </div>
    )
  }
}

export default reduxForm({
  form: 'WoodCuttingForm',
  destroyOnUnmount: false
})(FormViewEnhancer(WoodCuttingForm))