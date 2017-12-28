import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Link to='/doradca/metal' className='btn btn-primary'>
            Cięcie metalu
        </Link>
        <Link to='/doradca/drewno' className='btn btn-primary'>
          Ciecie drewna
        </Link>
        <Link to='/doradca/zywnosc' className='btn btn-primary'>
          Cięcie żywności
        </Link>
      </div>
    )
  }
}

export default App
