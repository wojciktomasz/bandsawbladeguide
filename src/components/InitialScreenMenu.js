import React from 'react'
import { Link } from 'react-router-dom'
import Steps, { Step } from 'rc-steps'

const InitialScreenMenu = () => {
  return (
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
  )
}

export default InitialScreenMenu