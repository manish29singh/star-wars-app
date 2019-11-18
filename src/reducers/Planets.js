import * as actionTypes from "../actionTypes"
const initialState = {
  data: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLANETS_SEARCH:
      return { ...state, data: action.planets }
    default:
      return state
  }
}
