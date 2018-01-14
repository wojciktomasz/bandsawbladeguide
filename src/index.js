import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import App from './App'
import reducers from './ducks'
import MetalCuttingForm from './components/MetalCuttingForm'
import WoodCuttingForm from './components/WoodCuttingForm'
import FoodCuttingForm from './components/FoodCuttingForm'
import MaterialCuttingForm from './components/MaterialCuttingForm'
import MetalCuttingResults from './components/MetalCuttingResults'
import WoodCuttingResults from './components/WoodCuttingResults'


const createStoreWithMiddleware = applyMiddleware(logger)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/doradca/metal/pily' component={MetalCuttingResults} />
                    <Route path='/doradca/metal' component={MetalCuttingForm} />
                    <Route path='/doradca/drewno/pily' component={WoodCuttingResults} />
                    <Route path='/doradca/drewno' component={WoodCuttingForm} />
                    <Route path='/doradca/zywnosc' component={FoodCuttingForm} />
                    <Route path='/doradca/tworzywo' component={MaterialCuttingForm}/>
                    <Route path='/' component={App} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'))
