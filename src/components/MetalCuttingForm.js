/**
 * Created by Superstar on 28.12.2017.
 */
import React,  { Component } from 'react'
import { reduxForm } from 'redux-form'
import data from '../data/data.json'
import Steps, { Step } from 'rc-steps'
import { renderProducer, renderWidth, renderSort, renderType } from '../helpers/formFunctions'
import FormButton from './Shared/FormButton'
import '../App.css'

class MetalCuttingForm extends Component {

    onSubmit() {
      this.props.history.push('/doradca/metal/pily')
    }

    render () {
      const { handleSubmit } = this.props

        return (
            <div className='container'>
              {console.log(data)}
              <div className='row justify-content-md-center'>
                <div className='col col-md-8'>
                  <Steps current={2}>
                    <Step/>
                    <Step/>
                    <Step/>
                  </Steps>
                  <form onSubmit={handleSubmit(() => this.onSubmit())}>
                    <label className="form-label">Producent:</label>
                    <div>
                      {renderProducer(data)}
                    </div>
                    <label className="form-label">Szerokość:</label>
                    <div>
                      {renderWidth(data, 'metal')}
                    </div>
                    <label className="form-label">Rodzaj ciętego materiału:</label>
                    <div>
                      {renderSort(data, 'metal')}
                    </div>
                    <label className="form-label">Typ ciętego materiału:</label>
                    <div>
                      {renderType(data, 'metal')}
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
  form: 'MetalCuttingForm',
  destroyOnUnmount: false
})(MetalCuttingForm)