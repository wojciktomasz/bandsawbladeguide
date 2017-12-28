/**
 * Created by Superstar on 28.12.2017.
 */
export const SUBMIT_FORM  = 'submit_form'

export function getValues(values) {
  return {
    type: SUBMIT_FORM,
    values
  }
}

export default function(state = {}, action) {
  switch(action.type) {
    case SUBMIT_FORM:
      return action.values
    default:
      return state
  }
}

