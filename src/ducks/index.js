/**
 * Created by Superstar on 28.12.2017.
 */
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer
})

export default rootReducer