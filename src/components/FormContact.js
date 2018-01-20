/**
 * Created by Superstar on 28.12.2017.
 */
import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

const FormContact = () => {
  return (
      <div className='col-md-4'>
        <img src='http://sword.pl/wp-content/uploads/2017/02/doradca.jpg' alt='Wirtualny Doradca doboru pił taśmowych' className='img img-fluid'/>
        <div className='form-contact'>
          <h3>Doradca Techniczny</h3>
            <dl>
              <dt><i className='fa fa-phone' aria-hidden='true' />Infolinia:</dt>
              <dd>800 150 007</dd>
              </dl>
              <dl>
              <dt><i className='fa fa-envelope' aria-hidden='true' />E-mail:</dt>
              <dd> sword@sword.pl</dd>
            </dl>
        </div>
      </div>
  )
}

export default FormContact