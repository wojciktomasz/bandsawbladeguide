import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FormContact from './components/FormContact'
import Steps, { Step } from 'rc-steps'
import 'rc-steps/assets/index.css'
import 'rc-steps/assets/iconfont.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <Steps current={1}>
                <Step/>
                <Step/>
                <Step/>
              </Steps>
              <h1>Proces doboru piły</h1>
              <p>Wirtualny doradca w trzech krótkich krokach dobierze odpowiednie piły spełniające Państwa wymagania. Aby przygotować dedykowaną ofertę musi wcześniej poznać Państwa oczekiwania:</p>
              <h3>1. WYBIERZ RODZAJ CIĘTEGO MATERIAŁU:</h3>
              <Link to='/doradca/metal' className='btn btn-primary'>
                  Cięcie metalu
              </Link>
              <Link to='/doradca/drewno' className='btn btn-primary'>
                  Ciecie drewna
              </Link>
              <Link to='/doradca/zywnosc' className='btn btn-primary'>
                  Cięcie żywności
              </Link>
              <Link to='/doradca/tworzywo' className='btn btn-primary'>
                  Cięcie tworzywa
              </Link>
            </div>
            <div className='col-md-4'>
              <FormContact />
            </div>
          </div>
      </div>
    )
  }
}

export default App
