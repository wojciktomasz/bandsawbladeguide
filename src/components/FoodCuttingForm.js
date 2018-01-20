/**
 * Created by Superstar on 28.12.2017.
 */
import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import data from '../data/data.json'
import Steps, {Step} from 'rc-steps'
import {renderWidth, renderSort} from '../helpers/formFunctions'
import FormButton from './shared/FormButton'
import FormViewEnhancer from './shared/FormViewEnhancer'
import '../App.css'

class FoodCuttingForm extends Component {
  onSubmit() {
    this.props.history.push('/doradca/zywnosc/pily')
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
            <label className="form-label">Szerokość:</label>
            <div>
              {renderWidth(data, 'food')}
            </div>
            <label className="form-label">Zastosowanie:</label>
            <div>
              {renderSort(data, 'food')}
            </div>
            <FormButton />
          </form>
        </div>
    )
  }
}

export default reduxForm({
  form: 'FoodCuttingForm',
  destroyOnUnmount: false
})(FormViewEnhancer(FoodCuttingForm))