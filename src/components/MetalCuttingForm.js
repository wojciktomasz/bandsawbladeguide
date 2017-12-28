/**
 * Created by Superstar on 28.12.2017.
 */
import React,  { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import data from '../data/data.json'
import _ from 'lodash'

class MetalCuttingForm extends Component {

    onSubmit() {
      this.props.history.push('/doradca/metal/pily')
    }

    renderProducer() {
      return _.map(_.uniqBy(data, 'producer'), post => {
        return (
            <label key={post.id}><Field name='producer' component='input' type='radio' value={post.producer}/>{post.producer}</label>
        )
      })
    }

    renderWidth() {
      const mappedWidths = _.map(data, 'widths')
      const mergedArray = _.flatten(mappedWidths)
      const uniqueValueArray = _.uniq(mergedArray)
      return uniqueValueArray.map(item => {
        return (
            <label key={item}><Field name='producer' component='input' type='radio' value={item}/>{item}</label>
        )
      })
    }


    render () {
      const { handleSubmit } = this.props

        return (
            <div className='container'>
              {console.log(data)}
              <div className='row justify-content-md-center'>
                <div className='col col-md-8'>
                  <form onSubmit={handleSubmit(() => this.onSubmit())}>
                    <label>Producent</label>
                    <div>
                      {this.renderProducer()}
                    </div>
                    <label>Szerokość</label>
                    <div>
                      {this.renderWidth()}
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