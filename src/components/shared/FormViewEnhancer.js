/**
 * Created by Superstar on 20.01.2018.
 */
import React, { Component }  from 'react'

export default WrappedComponent => class FormViewEnhancer extends Component {
  render() {
    return (
        <div className='container'>
          <div className='row justify-content-md-center'>
            <div className='col col-md-8'>
              <WrappedComponent {...this.props} />
            </div>
          </div>
        </div>
    )
  }
}