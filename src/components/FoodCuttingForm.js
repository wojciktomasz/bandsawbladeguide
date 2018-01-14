/**
 * Created by Superstar on 28.12.2017.
 */
import React,  { Component } from 'react'
import { reduxForm } from 'redux-form'
import data from '../data/data.json'
import Steps, { Step } from 'rc-steps'
import { renderWidth, renderSort } from '../helpers/formFunctions'
import FormButton from './Shared/FormButton'
import '../App.css'

class FoodCuttingForm extends Component {
    onSubmit() {
      this.props.history.push('/doradca/zywnosc/pily')
    }

    render () {
      const { handleSubmit } = this.props
      return (
          <div className='container'>
            <div className='row justify-content-md-center'>
              <div className='col col-md-8'>
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
            </div>
          </div>
      )
    }
}

export default reduxForm({
  form: 'FoodCuttingForm',
  destroyOnUnmount: false
})(FoodCuttingForm)