/**
 * Created by Superstar on 28.12.2017.
 */
import React,  { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class MetalCuttingForm extends Component {

    onSubmit() {
      this.props.history.push('/doradca/metal/pily')
    }

    render () {
      const { handleSubmit } = this.props

        return (
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 offset-md-2'>
                  <form onSubmit={handleSubmit(() => this.onSubmit())}>
                    <label>Producer</label>
                    <div>
                      <label><Field name='producer' component='input' type='radio' value='SWORD-MASTER'/>SWORD-MASTER</label>
                      <label><Field name='producer' component='input' type='radio' value='AMADA'/>Amada</label>
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
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