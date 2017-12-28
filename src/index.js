import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import App from './App'
import reducers from './ducks'
import MetalCuttingForm from './components/MetalCuttingForm'
import WoodCuttingForm from './components/WoodCuttingForm'
import FoodCuttingForm from './components/FoodCuttingForm'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/doradca/metal' component={MetalCuttingForm} />
                    <Route path='/doradca/drewno' component={WoodCuttingForm} />
                    <Route path='/doradca/zywnosc' component={FoodCuttingForm} />
                    <Route path='/doradca' component={App} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'))
