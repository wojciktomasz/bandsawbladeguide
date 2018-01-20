import React, {Component} from 'react'
import FormContact from './components/FormContact'
import InitialScreenMenu from './components/InitialScreenMenu'
import 'rc-steps/assets/index.css'
import 'rc-steps/assets/iconfont.css'
import './App.css'

class App extends Component {
  render() {
    return (
        <div className='container'>
          <div className='row'>
            <InitialScreenMenu />
            <FormContact />
          </div>
        </div>
    )
  }
}

export default App
